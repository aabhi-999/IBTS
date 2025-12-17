import React from "react";

function About() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">ℹ️ About IBTS</h1>
      <p className="text-gray-700 leading-relaxed">
        The <strong>Intelligent Bus Transportation System (IBTS)</strong> is a  
        smart platform designed to modernize government bus services.
        <br />
        <br /> 
        With IBTS, passengers can:
      </p>
      <ul className="list-disc list-inside mt-3 text-gray-700 text-left">
        <li>🔍 Search buses between source and destination</li>
        <li>🚌 Book tickets online securely</li>
        <li>📍 Track live bus locations in real-time</li>
        <li>💰 Get accurate fare details</li>
      </ul>
      <p className="mt-4 text-gray-700">
        Our goal is to make government buses more accessible, reliable, and
        convenient for everyone while reducing traffic congestion.
      </p>
    </div>
  );
}

export default About;
