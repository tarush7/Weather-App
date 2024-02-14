import React, { createContext, useState } from 'react';
import UseFetch from './useFetch';

// Create the context
export const WeatherContext = createContext();

// Create the provider component
export const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState('');
  const { loading, error, data, doFetch } = UseFetch();

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
    doFetch(`https://awesome-growth-31a919bca5.strapiapp.com/api/weather?location=${newLocation}`);
  };

  return (
    <WeatherContext.Provider value={{ location, loading, error, data, handleLocationChange }}>
      {children}
    </WeatherContext.Provider>
  );
};
