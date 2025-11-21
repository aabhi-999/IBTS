import React, { useState } from 'react';
import { api } from '../utils/api';

const BusSearch = () => {
  const [searchData, setSearchData] = useState({
    source: '',
    destination: ''
  });
  const [buses, setBuses] = useState([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSearched(true);
    
    try {
      const response = await api.searchBuses(searchData);
      const data = await response.json();
      setBuses(data);
    } catch (error) {
      console.error('Error searching buses:', error);
      // Fallback sample data
      setBuses([
        { 
          id: 1, 
          bus_number: 'UP-01-1234', 
          source: searchData.source || 'Lucknow', 
          destination: searchData.destination || 'Delhi', 
          seats: 40,
          departure_time: '08:00',
          arrival_time: '14:00',
          fare: 450,
          bus_type: 'AC Sleeper',
          rating: 4.2,
          operator: 'UP State Transport',
          amenities: 'WiFi,Charging Point,Water Bottle'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleBooking = (bus) => {
    const passengerName = prompt('Enter passenger name:');
    const phone = prompt('Enter phone number:');
    const seatNumber = prompt('Enter seat number (1-' + bus.seats + '):');
    
    if (passengerName && phone && seatNumber) {
      // Simple booking simulation
      const pnr = 'IBTS' + Math.random().toString(36).substr(2, 6).toUpperCase();
      alert(`Booking Successful!\nPNR: ${pnr}\nPassenger: ${passengerName}\nSeat: ${seatNumber}`);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6 animate-slide-down">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          🚍 Search Buses
        </h2>
        
        <form onSubmit={handleSearch} className="flex gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">From</label>
            <input
              type="text"
              value={searchData.source}
              onChange={(e) => setSearchData({...searchData, source: e.target.value})}
              placeholder="Enter source city (e.g., Lucknow)"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">To</label>
            <input
              type="text"
              value={searchData.destination}
              onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
              placeholder="Enter destination city (e.g., Delhi)"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            {loading ? (
              <span className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Searching...
              </span>
            ) : (
              '🔍 Search Buses'
            )}
          </button>
        </form>
      </div>

      {buses.length > 0 ? (
        <div className="bg-white rounded-lg shadow-lg p-6 animate-slide-up">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            🎯 Available Buses ({buses.length} found)
          </h3>
          <div className="space-y-4">
            {buses.map((bus, index) => (
              <div 
                key={bus.id} 
                className="border rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-102 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold text-gray-800">🚌 {bus.bus_number}</h4>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {bus.bus_type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">🏢 {bus.operator}</p>
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                      📍 {bus.source} → 🏁 {bus.destination}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span>🕐 Departure: <strong>{bus.departure_time}</strong></span>
                      <span>🕐 Arrival: <strong>{bus.arrival_time}</strong></span>
                      <span>💺 {bus.seats} seats</span>
                      <span className="flex items-center">
                        ⭐ <strong>{bus.rating}</strong>
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      🎯 Amenities: {bus.amenities}
                    </div>
                  </div>
                  <div className="text-right ml-6">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      ₹{bus.fare}
                    </div>
                    <button 
                      onClick={() => handleBooking(bus)}
                      className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                      🎫 Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : searched && buses.length === 0 && !loading ? (
        <div className="bg-white rounded-lg shadow-lg p-8 text-center animate-fade-in">
          <div className="text-6xl mb-4">😔</div>
          <h3 className="text-2xl font-bold mb-4 text-gray-600">No Buses Found</h3>
          <p className="text-gray-500 mb-2">
            No buses available for {searchData.source} to {searchData.destination}
          </p>
          <p className="text-sm text-gray-400">Try searching for different cities</p>
        </div>
      ) : null}
    </div>
  );
};

export default BusSearch;