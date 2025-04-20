import React from 'react';
import { useCart } from '../../context/CartContext';
import { useFavorite } from '../../context/FavoriteContext';
import './ProductCard.css';

const ProductCard = ({ item }) => {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorite();
  
  const isInCart = cartItems.some(cartItem => cartItem.id === item.id);
  const isFav = isFavorite(item.id);

  const handleCartAction = () => {
    if (isInCart) {
      removeFromCart(item.id);
    } else {
      addToCart(item);
    }
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    toggleFavorite(item);
  };

  return (
    <div className="product-card">
      <div 
        className="favorite-button" 
        onClick={handleFavoriteClick}
        title={isFav ? "Remove from favorites" : "Add to favorites"}
      >
        <i className={`fas fa-heart ${isFav ? 'favorite-active' : ''}`}></i>
      </div>
      <img src={item.image} alt={item.name} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{item.title}</h3>
        <p className="product-price">₹{item.price}</p>
        <p className="product-category">{item.category[0]}</p>
        <button 
          className={`product-addtocart ${isInCart ? 'remove-from-cart' : ''}`}
          onClick={handleCartAction}
        >
          {isInCart ? 'Remove' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 