import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MyBookings from "./MyBookings"; 
// Import components from separate files
import Home from "./Home";
import Search from "./Search";
import Booking from "./Booking";
import About from "./About";

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
