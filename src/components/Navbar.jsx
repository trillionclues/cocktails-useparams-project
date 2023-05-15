// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='relative'>
      <nav
        className='fixed top-0 left-0
      w-full bg-white shadow-lg py-5 pr-0 md:pr-10 z-10'
      >
        <div
          className='
        container mx-auto flex flex-wrap justify-around items-center'
        >
          <Link
            to='/'
            className='font-bold text-xl flex flex-row items-center uppercase'
          >
            <img
              src='/food-favicon.jpg'
              className='
            w-8 h-8 rounded-full mr-2
            '
              alt=''
            />{' '}
            The <span className='uppercase tracking-widest'> CockTailGUY</span>
          </Link>
          <div className='flex flex-row gap-4 md:gap-10 justify-between items-center uppercase font-bold tracking-widest'>
            <NavLink
              to='/'
              style={({ isActive }) => {
                return {
                  color: isActive ? '#476a2e' : 'black',
                };
              }}
            >
              Home
            </NavLink>
            <NavLink
              to='/about'
              style={({ isActive }) => {
                return {
                  color: isActive ? '#476a2e' : 'black',
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
