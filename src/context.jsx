/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AppContext = createContext();

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const AppProvider = ({ children }) => {
  const [cockTails, setCockTails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // fetch cockTails
  const fetchCockTail = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${url}${searchTerm}`);
      const data = await response.data;
      const { drinks } = data;
      setCockTails(drinks);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  // search for cockTails
  const searchCockTails = (searchDrinks) => {
    setSearchTerm(searchDrinks);
  };

  useEffect(() => {
    fetchCockTail();
  }, []);

  // filter based on search term
  const filteredCockTails = cockTails.filter((cockTail) => {
    const { strDrink, strGlass, strCategory } = cockTail;
    return (
      strDrink.toLowerCase().includes(searchTerm.toLowerCase()) ||
      strGlass.toLowerCase().includes(searchTerm.toLowerCase()) ||
      strCategory.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <AppContext.Provider
      value={{
        cockTails,
        setCockTails,
        searchTerm,
        setSearchTerm,
        searchCockTails,
        isLoading,
        filteredCockTails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
