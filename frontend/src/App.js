import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold text-blue-600">Welcome to IBTS 🚍</h1>
      <p className="mt-2 text-gray-600">
        Intelligent Bus Transportation System for easy government bus bookings and live tracking.
      </p>
      <button className="mt-5 px-4 py-2 bg-blue-600 text-white rounded-lg shadow">
        Search Buses
      </button>
    </div>
  );
}

function Search() {
  return <h1 className="text-center mt-10 text-2xl">🔍 Search Buses Page</h1>;
}

function Booking() {
  return <h1 className="text-center mt-10 text-2xl">🚌 Booking Page</h1>;
}

function About() {
  return <h1 className="text-center mt-10 text-2xl">ℹ️ About IBTS</h1>;
}

function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-blue-600 px-6 py-3 text-white">
        <div className="text-xl font-bold">IBTS 🚍</div>
        <div className="space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/search" className="hover:underline">Search</Link>
          <Link to="/booking" className="hover:underline">Booking</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </div>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
