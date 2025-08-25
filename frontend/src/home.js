// src/pages/Home.js
export default function home() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-4">Welcome to IBTS 🚍</h2>
      <p className="text-lg text-gray-600 mb-6">
        Intelligent Bus Transportation System for easy government bus bookings and live tracking.
      </p>
      <a
        href="/search"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700"
      >
        Search Buses
      </a>
    </div>
  );
}
