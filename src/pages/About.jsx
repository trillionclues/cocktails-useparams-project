// eslint-disable-next-line no-unused-vars
import React from 'react';

const About = () => {
  return (
    <div className='absolute w-full h-full flex flex-col justify-center items-center bg-gray-100 md:px-[300px] px-0 tracking-wide'>
      <div className='h-full flex flex-col justify-center items-center'>
        <h1 className='font-bold text-5xl mb-10'>
          &#x1F468;&#x200D;&#x1F373; About Us
        </h1>
        <p className='px-[30px] text-start'>
          Welcome to myFoodByHida, your ultimate destination for delicious and
          nutritious recipes! We are passionate about food and dedicated to
          helping you create wonderful culinary experiences in your own kitchen.
          <p className='pt-2'>
            {' '}
            At myFoodByHida, we believe that food is not just sustenance but a
            delightful journey of flavors and creativity. Our mission is to
            inspire and empower home cooks of all skill levels to explore their
            culinary talents, discover new recipes, and enjoy the pleasures of
            cooking.
          </p>
        </p>
      </div>
    </div>
  );
};

export default About;
