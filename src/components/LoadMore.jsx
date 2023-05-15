/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

// eslint-disable-next-line react/prop-types
const LoadMore = ({ cockTails, setMaxCockTails, maxCockTails }) => {
  return (
    <div className='pt-5'>
      {maxCockTails < cockTails.length && (
        <button
          className='border-none font-light hover:text-black px-4 py-2 text-base text-slate-200 bg-[#476a2e] hover:bg-[#ececec] rounded-sm uppercase tracking-widest'
          onClick={() => setMaxCockTails(maxCockTails + 4)}
        >
          Load More Drinks
        </button>
      )}
    </div>
  );
};

export default LoadMore;
