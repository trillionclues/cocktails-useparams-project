/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const CockTails = ({
  strDrink,
  strGlass,
  strCategory,
  strDrinkThumb,
  idDrink,
}) => {
  return (
    <div>
      <article className='bg-white rounded-md shadow-lg'>
        <Link to={`drinks/${idDrink}`}>
          <img
            src={strDrinkThumb}
            alt={strDrink}
            className='w-80 md:w-72 h-72 md:h-56 object-cover rounded-t-md'
          />
        </Link>

        <div className='py-3 px-3'>
          <h2 className='text-black font-extrabold text-2xl py-2 tracking-wide uppercase'>
            {strDrink}
          </h2>
          <h3 className='text-black font-bold text-[1rem] tracking-widest'>
            {strGlass}
          </h3>
          <p className='text-slate-700 text-[14px]'>{strCategory}</p>
          <Link to={`drinks/${idDrink}`}>
            <button className='mt-2 border-none font-light hover:text-black px-4 py-1 text-base text-slate-200 bg-[#476a2e] hover:bg-[#ececec] rounded-sm uppercase tracking-widest'>
              Details
            </button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default CockTails;
