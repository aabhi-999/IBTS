import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold text-blue-600">Welcome to IBTS 🚍</h1>
      <p className="mt-2 text-gray-600">
        Intelligent Bus Transportation System for easy government bus bookings and live tracking.
      </p>

      {/* Button navigates to Search page */}
      <button
        onClick={() => navigate("/search")}
        className="mt-5 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
      >
        🔍 Search Buses
      </button>
    </div>
  );
}

export default Home;
