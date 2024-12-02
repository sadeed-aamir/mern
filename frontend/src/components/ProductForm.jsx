// src/components/ProductForm.js
import React, { useState } from "react";

const ProductForm = ({ initialData = {}, onSubmit }) => {
    const [product, setProduct] = useState({
        name: initialData.name || "",
        price: initialData.price || "",
        image: initialData.image || "",
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await onSubmit(product);
            console.log("Product saved successfully");
        } catch (error) {
            console.error("Error in form submission:", error.message);
            alert("Error saving product. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="product-form">
            <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product Name" required />
            <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
            <input type="text" name="image" value={product.image} onChange={handleChange} placeholder="Image URL" required />
            <button type="submit">Save</button>
        </form>
    );
};

export default ProductForm;
