// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='relative'>
      <nav
        className='absolute top-0 left-0
      w-full bg-white shadow-lg py-5 pr-10 z-10'
      >
        <div
          className='
        container mx-auto flex flex-wrap justify-around items-center'
        >
          <Link to='/' className='font-bold text-xl'>
            The <span className='uppercase'> CockTailGUY</span>
          </Link>
          <div className='flex flex-row gap-10 justify-between items-center uppercase'>
            <NavLink
              to='/'
              style={({ isActive }) => {
                return {
                  color: isActive ? 'red' : 'black',
                };
              }}
            >
              Home
            </NavLink>
            <NavLink
              to='/about'
              style={({ isActive }) => {
                return {
                  color: isActive ? 'red' : 'black',
                };
              }}
            >
              About
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
