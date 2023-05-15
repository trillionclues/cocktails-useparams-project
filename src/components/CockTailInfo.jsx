/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';

const CockTailInfo = () => {
  const { cockTails } = useGlobalContext();
  const { productId } = useParams();

  // match products with drinkId
  const drinks = cockTails.find((drink) => drink.idDrink === productId);
  const {
    strDrinkThumb,
    strDrink,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
  } = drinks;

  return (
    <section className='absolute w-full bg-gray-100 pt-0 h-full'>
      <div className='h-full flex flex-col justify-center items-center'>
        <article className=' flex flex-col md:flex-row  gap-4 md:gap-10'>
          <img
            src={strDrinkThumb}
            alt={strDrink}
            className='w-auto md:w-96 h-96 object-cover rounded-t-md rounded-md shadow-lg mt-[40rem] md:mt-0 mr-5 ml-5 md:ml-0 md:mr-0'
          />
          <div className='info flex flex-col items-start justify-center gap-6 p-8 bg-white rounded-b-md rounded-md shadow-lg pb-10'>
            <div className='flex flex-row gap-6 items-center'>
              <span className='rounded-sm bg-[#476a2e] py-1 px-3 text-white font-light tracking-widest'>
                Name:
              </span>
              <h2 className='font-semibold text-lg'>{strDrink}</h2>
            </div>
            <div className='flex flex-row gap-6 items-center'>
              <span className='rounded-sm bg-[#476a2e] py-1 px-3 text-white font-light tracking-widest'>
                Category:
              </span>
              <h2 className='font-semibold text-lg'>{strCategory}</h2>
            </div>
            <div className='flex flex-row gap-6 items-center'>
              <span className='rounded-sm bg-[#476a2e] py-1 px-3 text-white font-light tracking-widest'>
                Info:
              </span>
              <h2 className='font-semibold text-lg'>{strAlcoholic}</h2>
            </div>
            <div className='flex flex-row gap-6 items-center'>
              <span className='rounded-sm bg-[#476a2e] py-1 px-3 text-white font-light tracking-widest'>
                Glass:
              </span>
              <h2 className='font-semibold text-lg'>{strGlass}</h2>
            </div>
            <div className='flex flex-col md:flex-row gap-6 items-start'>
              <span className='rounded-sm bg-[#476a2e] py-1 px-3 text-white font-light tracking-widest'>
                Instructions:
              </span>
              <h2 className='font-semibold text-sm max-w-[300px] overflow-hidden'>
                {strInstructions}
              </h2>
            </div>
            <div className='flex flex-col md:flex-row gap-6 items-start md:items-center'>
              <span className='rounded-sm bg-[#476a2e] py-1 px-3 text-white font-light tracking-widest'>
                Ingredients:
              </span>
              <h2 className='font-semibold text-lg'>
                {strIngredient1}, {strIngredient2}, {strIngredient3}
              </h2>
            </div>
          </div>
        </article>
        <Link to='/'>
          <button className='border-none font-light hover:text-black px-3 py-2 text-base text-slate-200 bg-[#476a2e] hover:bg-[#ececec] rounded-sm uppercase tracking-widest mt-7 mb-[70px] md:mb-0'>
            Select New CockTail
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CockTailInfo;
