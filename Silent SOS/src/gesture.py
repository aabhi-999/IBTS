import cv2
import numpy as np
import yaml
class GestureDetector:
    def __init__(self, config_file="config/params.yaml", setting="indoor_daylight"):
        # Load config from YAML file
        f = open(config_file, 'r')
        config = yaml.safe_load(f)
        f.close()
        
        # Get parameters for current setting
        params = config[setting]
        self.hsv_min = np.array(params['hsv_low'])
        self.hsv_max = np.array(params['hsv_high'])
        self.area_threshold = params['min_area']
        self.frames_needed = params['consecutive_frames']
        self.target_roi = params['roi']  # x,y,width,height
        
        # Keep track of detections
        self.detection_history = []
        self.is_triggered = False
        
    def detect_gesture(self, frame):
        # Step 1: Convert BGR to HSV color space
        hsv_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
        
        # Step 2: Create binary mask using HSV thresholds
        mask = cv2.inRange(hsv_frame, self.hsv_min, self.hsv_max)
        
        # Step 3: Clean up mask with morphology (remove noise)
        kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
        # Close small gaps
        mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, kernel)
        # Remove small blobs
        mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel)
        
        # Step 4: Find all contours in the mask
        contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        
        # Step 5: Find the biggest contour (assuming it's our target)
        biggest_contour = None
        biggest_area = 0
        
        for cnt in contours:
            area = cv2.contourArea(cnt)
            if area > biggest_area and area > self.area_threshold:
                biggest_area = area
                biggest_contour = cnt
        
        # Step 6: Check if detected object is in our ROI
        found_in_roi = False
        bounding_box = None
        
        if biggest_contour is not None:
            x, y, w, h = cv2.boundingRect(biggest_contour)
            bounding_box = (x, y, w, h)
            
            # Check if bounding box overlaps with ROI
            roi_x, roi_y, roi_w, roi_h = self.target_roi
            # Simple overlap check
            if (x < roi_x + roi_w and x + w > roi_x and 
                y < roi_y + roi_h and y + h > roi_y):
                found_in_roi = True
        
        # Step 7: Update detection history
        self.detection_history.append(found_in_roi)
        # Keep only recent frames
        if len(self.detection_history) > self.frames_needed:
            self.detection_history.pop(0)
        
        # Step 8: Check if we should trigger
        was_triggered = self.is_triggered
        # Need object detected in ROI for required number of consecutive frames
        if len(self.detection_history) == self.frames_needed:
            self.is_triggered = all(self.detection_history)
        else:
            self.is_triggered = False
        
        # Return results
        result = {}
        result['triggered'] = self.is_triggered
        result['new_trigger'] = self.is_triggered and not was_triggered
        result['bbox'] = bounding_box
        result['contour'] = biggest_contour
        result['mask'] = mask
        return result
    
    def add_debug_info(self, frame, result):
        # Draw the ROI rectangle (blue)
        roi_x, roi_y, roi_w, roi_h = self.target_roi
        cv2.rectangle(frame, (roi_x, roi_y), (roi_x + roi_w, roi_y + roi_h), (255, 0, 0), 2)
        cv2.putText(frame, "ROI", (roi_x, roi_y-10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 0, 0), 1)
        
        # Draw bounding box if we found something (green)
        if result['bbox']:
            x, y, w, h = result['bbox']
            cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
        
        # Draw the contour outline (yellow)
        if result['contour'] is not None:
            cv2.drawContours(frame, [result['contour']], -1, (0, 255, 255), 2)
        
        # Show status text
        if result['triggered']:
            status_text = "GESTURE DETECTED!"
            text_color = (0, 0, 255)  # red
        else:
            status_text = "Waiting for gesture..."
            text_color = (255, 255, 255)  # white
            
        cv2.putText(frame, status_text, (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.8, text_color, 2)
        
        # Show detection count
        count_text = f"Detections: {sum(self.detection_history)}/{len(self.detection_history)}"
        cv2.putText(frame, count_text, (10, 60), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 1)
        
        return frame

# Main program - run this to test the gesture detector
if __name__ == "__main__":
    print("Starting gesture detection...")
    print("Press 'q' to quit")
    
    # Create detector with default settings
    detector = GestureDetector()
    
    # Start webcam
    camera = cv2.VideoCapture(0)
    
    # Main loop
    while True:
        # Get frame from camera
        success, frame = camera.read()
        if not success:
            print("Failed to read from camera")
            break
            
        # Process the frame
        result = detector.detect_gesture(frame)
        
        # Add debug overlays
        frame_with_debug = detector.add_debug_info(frame, result)
        
        # Show the results
        cv2.imshow('Gesture Detection - Main View', frame_with_debug)
        cv2.imshow('Binary Mask', result['mask'])
        
        # Print when gesture is first detected
        if result['new_trigger']:
            print("*** GESTURE TRIGGERED! ***")
        
        # Check for quit key
        key = cv2.waitKey(1) & 0xFF
        if key == ord('q'):
            break
    
    # Cleanup
    camera.release()
    cv2.destroyAllWindows()
    print("Program ended")