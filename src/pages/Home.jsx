// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import CockTails from '../components/CockTails';
import Loading from '../components/Loading';
import LoadMore from '../components/LoadMore';
import NoData from '../components/NoData';
import SearchDrinks from '../components/SearchDrinks';
import { useGlobalContext } from '../context';

const Home = () => {
  const { cockTails, isLoading, filteredCockTails } = useGlobalContext();
  const [maxCockTails, setMaxCockTails] = useState(4);

  if (!cockTails || isLoading) {
    return (
      <section className='absolute w-full bg-gray-100 pt-[100px] h-full'>
        <div className='h-full flex flex-col justify-center items-center'>
          <Loading />
        </div>
      </section>
    );
  }

  return (
    <section className='absolute w-full bg-gray-100'>
      <div
        className='min-h-screen flex flex-col justify-center items-center bg-cover bg-center
        bg-no-repeat pb-[80px] pt-[100px]'
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/plates-with-chocolate-sticks-dark-background_23-2148340440.jpg')`,
        }}
      >
        <SearchDrinks />

        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
          {filteredCockTails.slice(0, maxCockTails).map((cockTail) => {
            console.log(cockTail);

            return (
              <div key={cockTail.idDrink} className='pt-10'>
                <CockTails {...cockTail} />
              </div>
            );
          })}
        </div>

        {/* if !drink search */}
        {filteredCockTails.length === 0 && <NoData />}

        <LoadMore
          cockTails={filteredCockTails}
          setMaxCockTails={setMaxCockTails}
          maxCockTails={maxCockTails}
        />
      </div>
    </section>
  );
};

export default Home;
