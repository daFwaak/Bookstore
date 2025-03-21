import React from 'react';
import { Link } from 'react-router-dom';

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A classic novel about the American dream and high society in the 1920s.",
    image: "https://via.placeholder.com/150",
    price: "$10.99"
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel about a totalitarian regime and surveillance society.",
    image: "https://via.placeholder.com/150",
    price: "$12.99"
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A deep and powerful story about racial injustice in the Deep South.",
    image: "https://via.placeholder.com/150",
    price: "$9.99"
  }
];

const Books = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Books Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map(book => (
          <div key={book.id} className="border p-4 rounded-lg shadow-lg bg-white">
            <img src={book.image} alt={book.title} className="w-full h-40 object-cover rounded" />
            <h2 className="text-xl font-bold mt-4">{book.title}</h2>
            <p className="text-gray-600">{book.author}</p>
            <p className="text-sm text-gray-700 mt-2">{book.description}</p>
            <p className="text-lg font-bold mt-2">{book.price}</p>
            
            {/* Buttons */}
            <div className="mt-4 flex space-x-2">
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                Add to Cart
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Buy Now
              </button>
            </div>

            {/* View Details Link */}
            <Link to={`/books/${book.id}`} className="block mt-4 text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
