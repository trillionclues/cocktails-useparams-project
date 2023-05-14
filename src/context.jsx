/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AppContext = createContext();

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const AppProvider = ({ children }) => {
  const [cockTail, setCockTail] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // console.log(cockTail)

  // fetch cockTails
  const fetchCockTail = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${url}${searchTerm}`);
      const data = await response.data;
      const { drinks } = data;
      setCockTail(drinks);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  // search for cockTails
  const searchCockTails = (searchTerm) => {
    setSearchTerm(searchTerm);
    fetchCockTail();
  };

  useEffect(() => {
    fetchCockTail();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        cockTail,
        setCockTail,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
