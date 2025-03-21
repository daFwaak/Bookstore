import React from 'react';
import { useParams } from 'react-router-dom';

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

const BookDetails = () => {
  const { id } = useParams();
  const book = books.find(book => book.id === parseInt(id));

  if (!book) {
    return <div className="text-center text-red-500 text-xl mt-10">Book not found!</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <img src={book.image} alt={book.title} className="w-full h-60 object-cover rounded" />
        <h1 className="text-3xl font-bold mt-4">{book.title}</h1>
        <h2 className="text-xl text-gray-600">{book.author}</h2>
        <p className="text-lg font-bold mt-2">{book.price}</p>
        <p className="text-gray-700 mt-4">{book.description}</p>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Add to Cart
          </button>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
