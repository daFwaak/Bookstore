import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
     
        <h1 className="text-2xl font-bold">Mini-BookStore</h1>

        
        <button 
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        
        <nav className={`md:flex gap-6 ${isOpen ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0`}>
          <ul className="md:flex md:space-x-6">
            <li><Link to="/" className="block py-2 px-4 md:p-0 hover:text-gray-400">Home</Link></li>
            <li><Link to="/about" className="block py-2 px-4 md:p-0 hover:text-gray-400">About</Link></li>
            <li><Link to="/books" className="block py-2 px-4 md:p-0 hover:text-gray-400">Books</Link></li>
            <li><Link to="/contact" className="block py-2 px-4 md:p-0 hover:text-gray-400">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
