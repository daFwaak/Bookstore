import React from 'react';
import { Link } from 'react-router-dom'; // Correct import

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <div
        className="flex-grow flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1499257398700-43669759a540?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhZGluZyUyMGJvb2slMjBoYXZpbmclMjBsYXJnZSUyMHdpc3RofGVufDB8fDB8fHww')",
        }}
      >
        <div className="container mx-auto text-center text-white px-6 bg-black bg-opacity-50 py-10 rounded-lg">
          <h1 className="text-5xl font-bold">Welcome to Mini-Bookstore</h1>
          <p className="text-lg mt-2">Discover your next great read with us!</p>
          <Link to="/books">
            <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Explore
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Home;
