import { useState } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">MyPortfolio</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-500">Home</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-500">Projects</a>
            <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <a href="#home" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a>
          <a href="#projects" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Projects</a>
          <a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About</a>
          <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
