import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-2">
      <div className="container mx-auto w-11/12 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center">
            <h1 className="text-lg font-bold">Mini-Bookstore</h1>
          </div>

          <div>
            <h3 className="text-base font-bold mb-2">Contacts</h3>
            <p className="text-xs">Phone: +977 9840860843</p>
            <p className="text-xs">Email: info@minibookstore.com</p>
            <p className="text-xs">Address: Samakhusi-10, Kathmandu</p>
          </div>

          <div>
            <h3 className="text-base font-bold mb-2">Social Media</h3>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-white text-lg hover:text-gray-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-white text-lg hover:text-gray-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white text-lg hover:text-gray-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white text-lg hover:text-gray-300" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold mb-2">Services</h3>
            <ul className="text-xs">
              <li><a href="#" className="hover:underline">Web Development</a></li>
              <li><a href="#" className="hover:underline">App Development</a></li>
              <li><a href="#" className="hover:underline">SEO Optimization</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-2 border-t border-gray-700 pt-1 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Mini-Bookstore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
