import React, { useEffect, useState } from "react";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(savedBookings);
  }, []);

  const handleCancel = (id) => {
    const updatedBookings = bookings.filter((b) => b.id !== id);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    setBookings(updatedBookings);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">📑 My Bookings</h1>

      {bookings.length > 0 ? (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="p-4 border rounded-lg shadow flex justify-between items-center"
            >
              <div>
                <h2 className="font-bold">{booking.bus.name}</h2>
                <p>
                  {booking.bus.source} → {booking.bus.destination}
                </p>
                <p>Date: {booking.date} | Time: {booking.bus.time}</p>
                <p>Passenger: {booking.passenger} (Age: {booking.age})</p>
                <p>Seat: {booking.seat}</p>
                <p className="text-green-600 font-bold">Fare: ₹{booking.bus.fare}</p>
              </div>
              <button
                onClick={() => handleCancel(booking.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Cancel
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No bookings yet.</p>
      )}
    </div>
  );
}

export default MyBookings;
