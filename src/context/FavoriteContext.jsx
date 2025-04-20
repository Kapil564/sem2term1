import React, { createContext, useState, useContext } from 'react';

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  const toggleFavorite = (product) => {
    setFavoriteItems((prevItems) => {
      const isFavorite = prevItems.some((item) => item.id === product.id);
      
      if (isFavorite) {
        return prevItems.filter((item) => item.id !== product.id);
      }
      
      return [...prevItems, product];
    });
  };

  const isFavorite = (productId) => {
    return favoriteItems.some((item) => item.id === productId);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favoriteItems,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error('useFavorite must be used within a FavoriteProvider');
  }
  return context;
}; 