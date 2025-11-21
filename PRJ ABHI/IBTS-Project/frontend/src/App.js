import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BusSearch from "./components/BusSearch";
import SplashScreen from "./components/SplashScreen";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center pt-20 animate-fade-in">
        <div className="mb-8">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-slide-down">
            Welcome to IBTS 🚍
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full animate-glow"></div>
        </div>
        
        <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto animate-slide-up">
          Intelligent Bus Transportation System for seamless government bus bookings.
        </p>
        
        <div className="space-y-6 animate-slide-up">
          <Link 
            to="/search" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg font-semibold"
          >
            🔍 Search Buses
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16 px-4">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🚌</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Easy Booking</h3>
              <p className="text-gray-600">Book your bus tickets in just a few clicks</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Live Tracking</h3>
              <p className="text-gray-600">Track your bus location in real-time</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Simple Booking</h3>
              <p className="text-gray-600">Quick and easy bus reservations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 animate-fade-in">
      <BusSearch />
    </div>
  );
}



function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-16 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16 animate-slide-down">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            About IBTS
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center animate-slide-up">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Revolutionizing Public Transport</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Intelligent Bus Transport System digitizes UP government bus services with 
              online booking for better passenger experience.
            </p>
            <div className="space-y-4">

              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Online seat booking</span>
              </div>

            </div>
          </div>
          
          <div className="text-center">
            <div className="text-8xl mb-4 animate-float">🚍</div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Serving UP State</h3>
              <p className="text-gray-600">Connecting cities across Uttar Pradesh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div>
      <Router>
        {/* Enhanced Navbar */}
        <nav className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4 text-white shadow-lg sticky top-0 z-40">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <Link to="/" className="text-2xl font-bold hover:scale-105 transition-transform duration-200">
              IBTS 🚍
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="hover:text-blue-200 transition-colors duration-200 font-medium">Home</Link>
              <Link to="/search" className="hover:text-blue-200 transition-colors duration-200 font-medium">Search</Link>

              <Link to="/about" className="hover:text-blue-200 transition-colors duration-200 font-medium">About</Link>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-white hover:text-blue-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Page Routes with Animation Container */}
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />

            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
