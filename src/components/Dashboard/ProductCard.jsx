import React from 'react';
import './ProductCard.css';

const ProductCard = ({ item }) => {
    return (
        <div className="product-card">
            <img src={item.image} alt={item.title} className="product-image" />
            <div className="product-details">
                <h3 className="product-title">{item.title}</h3>
                <p className="product-price">${item.price}</p>
                <p className="product-category">{item.category}</p>
            </div>
        </div>
    );
};

export default ProductCard; 