// src/pages/HomePage.jsx
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";
import { fetchProducts, createProduct, updateProduct, deleteProduct } from "../services/productService";

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            const productsData = await fetchProducts();
            setProducts(productsData);
        };
        getProducts();
    }, []);

    const handleCreateProduct = async (product) => {
        const newProduct = await createProduct(product);
        setProducts([...products, newProduct]);
        setShowForm(false);
    };

    const handleUpdateProduct = async (updatedProduct) => {
        const product = await updateProduct(editingProduct._id, updatedProduct);
        setProducts(products.map((p) => (p._id === product._id ? product : p)));
        setEditingProduct(null);
        setShowForm(false);
    };

    const handleDeleteProduct = async (id) => {
        await deleteProduct(id);
        setProducts(products.filter((p) => p._id !== id));
    };

    const handleEditClick = (product) => {
        setEditingProduct(product);
        setShowForm(true);
    };

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
        document.body.classList.toggle("dark-mode");
    };

    return (
        <div className="homepage">
            <button className="toggle-btn" onClick={toggleDarkMode}>
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <h1>Store</h1>
            {products.length === 0 && <p>No products yet, create one!</p>}
            <button onClick={() => setShowForm(true)}>Add Product</button>
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                        onEdit={handleEditClick}
                        onDelete={handleDeleteProduct}
                    />
                ))}
            </div>
            {showForm && (
                <ProductForm
                    initialData={editingProduct || {}}
                    onSubmit={editingProduct ? handleUpdateProduct : handleCreateProduct}
                />
            )}
        </div>
    );
};

export default HomePage;
