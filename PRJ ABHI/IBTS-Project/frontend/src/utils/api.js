// API utility functions
const API_BASE_URL = 'http://127.0.0.1:8000';

export const api = {
  // Bus endpoints
  getBuses: () => fetch(`${API_BASE_URL}/buses/`),
  searchBuses: (searchData) => 
    fetch(`${API_BASE_URL}/buses/search`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(searchData)
    }),
  getBusSeats: (busId) => fetch(`${API_BASE_URL}/buses/seats/${busId}`),
  
  // Booking endpoints
  createBooking: (bookingData) =>
    fetch(`${API_BASE_URL}/booking/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData)
    }),
  
  // Tracking endpoints
  getBusLocation: (busId) => fetch(`${API_BASE_URL}/tracking/${busId}`)
};

export default api;