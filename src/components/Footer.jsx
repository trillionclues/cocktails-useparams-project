// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='relative'>
      <div
        className='absolute mx-auto flex justify-center items-center
      w-full bg-white shadow-lg py-3 pr-10 z-10 bottom-0 shadow-lg

      '
      >
        <p className='uppercase'>
          Made with &#10084; by
          <span className='px-1 font-bold'>
            <Link to='https://github.com/trillionclues' target='_blank'>
              trillionclues
            </Link>
          </span>
          - TheCocktailGuy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
