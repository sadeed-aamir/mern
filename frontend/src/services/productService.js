// src/services/productService.js
const API_URL = "/api/products"; // Adjust port if different

// Fetch all products
export const fetchProducts = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.data;
};

// Create a new product
export const createProduct = async (product) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
    });
    const data = await response.json();
    return data.data;
};

// Update a product
export const updateProduct = async (id, updatedProduct) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
    });
    const data = await response.json();
    return data.data;
};

// Delete a product
export const deleteProduct = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
