import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import Header from './Header'; // Import Header component

const SellerAdminPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  const saveProductsToLocalStorage = (updatedProducts) => {
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const addProduct = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    saveProductsToLocalStorage(updatedProducts);
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
    saveProductsToLocalStorage(updatedProducts);
  };

  return (
    <div className="seller-admin">
      <Header /> {/* Use Header component here */}
      <ProductForm onAdd={addProduct} />
      <ProductList products={products} onDelete={deleteProduct} />
    </div>
  );
};

export default SellerAdminPage;
