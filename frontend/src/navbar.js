// src/components/Navbar.js
export default function navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">IBTS 🚍</h1>
      <ul className="flex gap-6">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/search" className="hover:underline">Search</a></li>
        <li><a href="/book" className="hover:underline">Booking</a></li>
        <li><a href="/about" className="hover:underline">About</a></li>
      </ul>
    </nav>
  );
}
