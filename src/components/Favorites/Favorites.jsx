import React from 'react';
import { useFavorite } from '../../context/FavoriteContext';
import ProductCard from '../Dashboard/ProductCard';
import './Favorites.css';

const Favorites = () => {
  const { favoriteItems } = useFavorite();

  return (
    <div className="favorites-container">
      <h2>Your Favorites</h2>
      {favoriteItems.length === 0 ? (
        <div className="empty-favorites">
          <i className="fas fa-heart"></i>
          <p>You haven't added any items to your favorites yet</p>
        </div>
      ) : (
        <div className="favorites-grid">
          {favoriteItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites; 