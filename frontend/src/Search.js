import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook
import buses from "./buses";

function Search() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate(); // ✅ Initialize navigation

  const handleSearch = () => {
    const filtered = buses.filter(
      (bus) =>
        bus.source.toLowerCase().includes(source.toLowerCase()) &&
        bus.destination.toLowerCase().includes(destination.toLowerCase())
    );
    setResults(filtered);
  };

  const handleBooking = (bus) => {
    // Navigate to Booking page & pass selected bus details
    navigate("/booking", { state: { bus } });
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">🔍 Search Buses</h1>

      {/* Search Form */}
      <div className="flex justify-center space-x-4 mb-6">
        <input
          type="text"
          placeholder="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="px-3 py-2 border rounded"
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="px-3 py-2 border rounded"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow"
        >
          Search
        </button>
      </div>

      {/* Results */}
      {results.length > 0 ? (
        <div className="space-y-4">
          {results.map((bus) => (
            <div
              key={bus.id}
              className="border p-4 rounded-lg shadow bg-gray-50"
            >
              <h2 className="font-bold text-lg">{bus.name}</h2>
              <p>
                🚏 {bus.source} → {bus.destination}
              </p>
              <p>
                🕒 {bus.departure} - {bus.arrival}
              </p>
              <p>💰 Fare: ₹{bus.fare}</p>
              <button
                onClick={() => handleBooking(bus)} // ✅ Call booking handler
                className="mt-2 px-3 py-1 bg-green-600 text-white rounded"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No buses found. Try searching!</p>
      )}
    </div>
  );
}

export default Search;
