import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bus = location.state?.bus; 

  const [passenger, setPassenger] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
  });

  const [confirmed, setConfirmed] = useState(false);
  const [pnr, setPnr] = useState(null);

 
  const handleChange = (e) => {
    setPassenger({ ...passenger, [e.target.name]: e.target.value });
  };

 
  const handleBooking = () => {
    if (
      !passenger.name.trim() ||
      !passenger.age ||
      !passenger.gender ||
      !passenger.contact.trim()
    ) {
      alert("⚠️ Please fill all details before confirming.");
      return;
    }
    const uniquePNR = "PNR" + Math.random().toString(36).substr(2, 6).toUpperCase();
    setPnr(uniquePNR);

    setConfirmed(true);
  };

  if (!bus) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold">⚠️ No bus selected</h2>
        <button
          onClick={() => navigate("/search")}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          🔍 Go Back to Search
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      {!confirmed ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">🚌 Booking Details</h2>

          {/* Bus Info */}
          <div className="mb-4 border-b pb-3">
            <p className="font-semibold text-lg">{bus.name}</p>
            <p>
              🚏 {bus.source} → {bus.destination}
            </p>
            <p>📅 Date: {bus.date}</p>
            <p>🕒 Time: {bus.time}</p>
            <p className="text-green-600 font-bold">💰 Fare: ₹{bus.fare}</p>
          </div>

          {/* Passenger Form */}
          <h3 className="text-lg font-semibold mb-2">👤 Passenger Information</h3>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={passenger.name}
            onChange={handleChange}
            className="w-full border p-2 mb-2 rounded"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={passenger.age}
            onChange={handleChange}
            className="w-full border p-2 mb-2 rounded"
          />
          <select
            name="gender"
            value={passenger.gender}
            onChange={handleChange}
            className="w-full border p-2 mb-2 rounded"
          >
            <option value="">Select Gender</option>
            <option value="Male">👨 Male</option>
            <option value="Female">👩 Female</option>
            <option value="Other">⚧ Other</option>
          </select>
          <input
            type="text"
            name="contact"
            placeholder="📞 Contact Number"
            value={passenger.contact}
            onChange={handleChange}
            className="w-full border p-2 mb-4 rounded"
          />

          <button
            onClick={handleBooking}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
          >
            ✅ Confirm Booking
          </button>
        </div>
      ) : (
        <div className="bg-green-100 shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-green-700">🎉 Booking Confirmed!</h2>
          <p className="mt-2 font-mono text-lg">🆔 {pnr}</p>

          <div className="mt-3">
            <p>
              👤 <strong>{passenger.name}</strong> ({passenger.age}, {passenger.gender})
            </p>
            <p>📞 {passenger.contact}</p>
            <p>
              🚏 {bus.source} → {bus.destination}
            </p>
            <p>
              🕒 {bus.time} | 💰 ₹{bus.fare}
            </p>
          </div>

          <button
            onClick={() => navigate("/search")}
            className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            ➕ Book Another Bus
          </button>
        </div>
      )}
    </div>
  );
};

export default Booking;
