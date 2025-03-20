import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import RootLayout from './components/RootLayout';
import Books from './pages/Books';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,  // Wrap with Layout
    children: [
      { index: true, element: <Home /> }, // Default page
      { path: 'about', element: <About /> },
      { path: 'books', element: <Books /> }, 
      { path: 'contact', element: <Contact /> },
      
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
