// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// eslint-disable-next-line react/prop-types
const SharedLayout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex-grow'>{children}</main>
      <Footer />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
