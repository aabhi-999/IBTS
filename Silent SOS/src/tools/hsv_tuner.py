import cv2
import numpy as np

class HSVTuner:
    def __init__(self):
        self.h_low = 0
        self.s_low = 0
        self.v_low = 0
        self.h_high = 179
        self.s_high = 255
        self.v_high = 255
        
        cv2.namedWindow('Controls')
        cv2.createTrackbar('H Low', 'Controls', 0, 179, self.update_h_low)
        cv2.createTrackbar('S Low', 'Controls', 0, 255, self.update_s_low)
        cv2.createTrackbar('V Low', 'Controls', 0, 255, self.update_v_low)
        cv2.createTrackbar('H High', 'Controls', 179, 179, self.update_h_high)
        cv2.createTrackbar('S High', 'Controls', 255, 255, self.update_s_high)
        cv2.createTrackbar('V High', 'Controls', 255, 255, self.update_v_high)
    
    def update_h_low(self, val): self.h_low = val
    def update_s_low(self, val): self.s_low = val
    def update_v_low(self, val): self.v_low = val
    def update_h_high(self, val): self.h_high = val
    def update_s_high(self, val): self.s_high = val
    def update_v_high(self, val): self.v_high = val
    
    def process_frame(self, frame):
        hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
        
        lower = np.array([self.h_low, self.s_low, self.v_low])
        upper = np.array([self.h_high, self.s_high, self.v_high])
        
        mask = cv2.inRange(hsv, lower, upper)
        result = cv2.bitwise_and(frame, frame, mask=mask)
        
        # Print current values
        print(f"HSV Low: [{self.h_low}, {self.s_low}, {self.v_low}]")
        print(f"HSV High: [{self.h_high}, {self.s_high}, {self.v_high}]")
        
        return mask, result

if __name__ == "__main__":
    tuner = HSVTuner()
    cap = cv2.VideoCapture(0)
    
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        
        mask, result = tuner.process_frame(frame)
        
        cv2.imshow('Original', frame)
        cv2.imshow('Mask', mask)
        cv2.imshow('Result', result)
        
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    
    cap.release()
    cv2.destroyAllWindows()