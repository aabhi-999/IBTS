# # app.py (Flask Backend)



# from flask import Flask, request, render_template, jsonify

# app = Flask(__name__)

# # In-memory storage for bus location
# bus_locations = {
#     "bus_101": {"lat": 0.0, "lon": 0.0}
# }

# @app.route('/')
# def index():
#     return render_template('map.html')

# @app.route('/update_location', methods=['POST'])
# def update_location():
#     data = request.json
#     bus_id = data.get('bus_id')
#     lat = data.get('latitude')
#     lon = data.get('longitude')
#     if bus_id and lat and lon:
#         bus_locations[bus_id] = {'lat': lat, 'lon': lon}
#         return jsonify({"status": "success"}), 200
#     return jsonify({"status": "error", "message": "Invalid data"}), 400

# @app.route('/get_location/<bus_id>', methods=['GET'])
# def get_location(bus_id):
#     location = bus_locations.get(bus_id)
#     if location:
#         return jsonify(location)
#     return jsonify({"error": "Bus not found"}), 404

# if __name__ == '__main__':
#     app.run(debug=True)


# # templates/map.html (Google Map Page)


# # <!DOCTYPE html>
# # <html>
# # <head>
# #     <title>Live Bus Tracking</title>
# #     <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY"></script>
# # </head>
# # <body>
# #     <h2>Bus 101 Live Location</h2>
# #     <div id="map" style="height: 500px; width: 80%; margin: auto;"></div>
# #     <script src="/static/script.js"></script>
# # </body>
# # </html>





# # static/script.js (Real-Time Update Logic)

# # let map;
# # let marker;

# # function initMap(lat, lon) {
# #     const location = { lat, lng: lon };
# #     map = new google.maps.Map(document.getElementById("map"), {
# #         zoom: 15,
# #         center: location,
# #     });
# #     marker = new google.maps.Marker({
# #         position: location,
# #         map: map,
# #         title: "Bus 101",
# #     });
# # }

# # function updateMap(lat, lon) {
# #     const location = { lat, lng: lon };
# #     marker.setPosition(location);
# #     map.setCenter(location);
# # }

# # function fetchBusLocation() {
# #     fetch('/get_location/bus_101')
# #         .then(response => response.json())
# #         .then(data => {
# #             const lat = parseFloat(data.lat);
# #             const lon = parseFloat(data.lon);
# #             if (!map) {
# #                 initMap(lat, lon);
# #             } else {
# #                 updateMap(lat, lon);
# #             }
# #         });
# # }

# # setInterval(fetchBusLocation, 5000);

# # Replace YOUR_GOOGLE_MAPS_API_KEY with a valid Google Maps JavaScript API key.

# # Install Flask if you haven’t:

# # bash
# # Copy
# # Edit
# # pip install flask
# # Run the server:

# # bash
# # Copy
# # Edit
# # python app.py
# # Open http://127.0.0.1:5000 in your browser.

# # Simulate GPS location updates with this sample curl:

# # bash
# # Copy
# # Edit
# # curl -X POST http://127.0.0.1:5000/update_location \
# # -H "Content-Type: application/json" \
# # -d '{"bus_id":"bus_101", "latitude":28.6139, "longitude":77.2090}'




# # simulate_gps_updates: This function runs in a separate thread and updates the bus location every 5 seconds by slightly modifying the latitude and longitude values randomly.

# # The simulated data will automatically update the bus location every few seconds

# # Step 2: Test Simulated Updates
# # Run app.py:

# #  app.py
# # Visit http://127.0.0.1:5000 in your browser.

# # The map will update every 5 seconds, showing the bus moving randomly within a small region.
# import random
# from flask import Flask, request, render_template, jsonify
# import threading
# import time

# app = Flask(__name__)

# bus_locations = {
#     "bus_101": {"lat": 28.6139, "lon": 77.2090}  # Initial coordinates (for Delhi)
# }

# def simulate_gps_updates():
#     while True:
#         # Simulate a small change in GPS coordinates
#         bus_id = "bus_101"
#         new_lat = bus_locations[bus_id]["lat"] + random.uniform(-0.0001, 0.0001)
#         new_lon = bus_locations[bus_id]["lon"] + random.uniform(-0.0001, 0.0001)
        
#         bus_locations[bus_id] = {"lat": new_lat, "lon": new_lon}
#         print(f"Simulated update: {bus_id} -> Lat: {new_lat}, Lon: {new_lon}")
#         time.sleep(5)  # Update every 5 seconds

# @app.route('/')
# def index():
#     return render_template('map.html')

# @app.route('/update_location', methods=['POST'])
# def update_location():
#     data = request.json
#     bus_id = data.get('bus_id')
#     lat = data.get('latitude')
#     lon = data.get('longitude')
#     if bus_id and lat and lon:
#         bus_locations[bus_id] = {'lat': lat, 'lon': lon}
#         return jsonify({"status": "success"}), 200
#     return jsonify({"status": "error", "message": "Invalid data"}), 400

# @app.route('/get_location/<bus_id>', methods=['GET'])
# def get_location(bus_id):
#     location = bus_locations.get(bus_id)
#     if location:
#         return jsonify(location)
#     return jsonify({"error": "Bus not found"}), 404

# if __name__ == '__main__':
#     # Start the GPS simulation in a separate thread
#     threading.Thread(target=simulate_gps_updates, daemon=True).start()
#     app.run(debug=True)


# # Option 2: Real GPS Updates via Mobile App
# # If you want to track the bus in real-time using actual GPS data from a mobile device, you’ll need to build a simple Android app that sends the GPS coordinates to the Flask server.

# # Step 1: Android App to Get GPS Coordinates
# # Here’s a basic outline of how to create a simple Android app that fetches the GPS coordinates and sends them to your Flask backend:

# # Set up a new Android project:

# # In Android Studio, create a new project with an Empty Activity.

# # Add Permissions: In AndroidManifest.xml, add the necessary permissions for accessing GPs

# # <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
# # <uses-permission android:name="android.permission.INTERNET" />
# # Create a Location Listener: In your MainActivity.java or MainActivity.kt, request the device's GPS coordinates.





# # import android.location.Location
# # import android.os.Bundle
# # import android.widget.Toast
# # import androidx.appcompat.app.AppCompatActivity
# # import com.google.android.gms.location.FusedLocationProviderClient
# # import com.google.android.gms.location.LocationServices
# # import com.google.android.gms.tasks.OnSuccessListener
# # import kotlinx.coroutines.*
# # import okhttp3.*
# # import org.json.JSONObject

# # class MainActivity : AppCompatActivity() {
# #     private lateinit var fusedLocationClient: FusedLocationProviderClient
# #     private val client = OkHttpClient()

# #     override fun onCreate(savedInstanceState: Bundle?) {
# #         super.onCreate(savedInstanceState)
# #         setContentView(R.layout.activity_main)

# #         fusedLocationClient = LocationServices.getFusedLocationProviderClient(this)

# #         // Get current location every 5 seconds
# #         GlobalScope.launch(Dispatchers.Main) {
# #             while (true) {
# #                 getLocation()
# #                 delay(5000) // update every 5 seconds
# #             }
# #         }
# #     }

# #     private fun getLocation() {
# #         fusedLocationClient.lastLocation.addOnSuccessListener(this, OnSuccessListener<Location> { location ->
# #             if (location != null) {
# #                 sendLocationToServer(location.latitude, location.longitude)
# #             }
# #         })
# #     }

# #     private fun sendLocationToServer(lat: Double, lon: Double) {
# #         val url = "http://127.0.0.1:5000/update_location"
# #         val json = JSONObject()
# #         json.put("bus_id", "bus_101")
# #         json.put("latitude", lat)
# #         json.put("longitude", lon)

# #         val body = RequestBody.create(
# #             MediaType.parse("application/json; charset=utf-8"),
# #             json.toString()
# #         )

# #         val request = Request.Builder()
# #             .url(url)
# #             .post(body)
# #             .build()

# #         client.newCall(request).enqueue(object : Callback {
# #             override fun onFailure(call: Call, e: IOException) {
# #                 Toast.makeText(this@MainActivity, "Failed to send location", Toast.LENGTH_SHORT).show()
# #             }

# #             override fun onResponse(call: Call, response: Response) {
# #                 if (response.isSuccessful) {
# #                     // Location updated successfully
# #                 }
# #             }
# #         })
# #     }
# # }
# # Explanation:
# # The app uses FusedLocationProviderClient to get the current GPS location.

# # The location is sent to your Flask backend (POST /update_location) every 5 seconds.

# # Step 2: Test the Mobile App
# # Build and run the app on an Android device (or emulator).

# # Ensure the app is running and GPS is enabled.

# # The app will start sending the GPS coordinates to the server every 5 seconds.

# # 📝 Final Step: Check Real-Time Updates
# # Once the mobile app sends real GPS data, your Flask server will receive updates and update the bus location on the map in real-time.

# # Additional Enhancements:
# # Error Handling: Add error handling in both Flask and Android app for network issues, GPS failure, etc.

# # Data Validation: Ensure the data being sent (like latitude and longitude) is valid before updating it in your backend.

# # Security: Use an authentication method (e.g., API tokens) to restrict who can update locations.

# # Let me know if you'd like any help with further details or any part of the Android app!