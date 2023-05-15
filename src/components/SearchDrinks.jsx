/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';

const SearchDrinks = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const inputRef = useRef(null);

  // search for drinks
  const getDrinksSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    // call focus on input search re-renders
    inputRef.current.focus();
  }, [setSearchTerm]);

  return (
    <form className='flex justify-center items-center w-full max-w-[350px] md:max-w-[600px] h-[50px] bg-white rounded-full shadow-md px-7'>
      <input
        ref={inputRef}
        type='text'
        className=' w-full h-[40px] bg-transparent outline-none text-gray-600 text-lg font-semibold'
        placeholder='Search your favorite cocktail...'
        value={searchTerm}
        onChange={getDrinksSearch}
      />
    </form>
  );
};

export default SearchDrinks;
