// src/components/ProductCard.js
import React from "react";

const ProductCard = ({ product, onEdit, onDelete }) => {
    console.log("Product image URL:", product.image); // Check the URL in the console

    return (
        <div className="product-card">
            {product.image ? (
                <img src={product.image} alt={product.name} className="product-image" />
            ) : (
                <p>No image available</p>
            )}
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <div className="product-actions">
                <button onClick={() => onEdit(product)}>Edit</button>
                <button onClick={() => onDelete(product._id)}>Delete</button>
            </div>
        </div>
    );
};

export default ProductCard;
