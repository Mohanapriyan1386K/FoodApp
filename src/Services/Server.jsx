import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
export const FoodContext = createContext();

// Create the provider
export const Server = ({ children }) => {
  const [foods, setFoods] = useState([]);

  const fetchFoods = () => {
    axios.get('http://localhost:3000/foods')
      .then(res => setFoods(res.data))
      .catch(err => console.error('Fetch Error:', err));
  };

  const addFood = (newFood) => {
    axios.post('http://localhost:3000/foods',newFood)
      .then(res => setFoods(prev => [...prev, res.data]))
      .catch(err => console.error('Post Error:', err));
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <FoodContext.Provider value={{ foods, addFood }}>
      {children}
    </FoodContext.Provider>
  );
};
