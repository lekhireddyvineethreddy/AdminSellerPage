import React, { useState } from 'react';

const ProductForm = ({ onAdd }) => {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('food');

  const handleAdd = () => {
    if (!productId.trim() || !productName.trim() || !productPrice.trim()) return; // Don't add incomplete product data
    const newProduct = {
      id: parseInt(productId.trim()),
      name: productName.trim(),
      price: parseFloat(productPrice),
      category: productCategory
    };
    onAdd(newProduct);
    setProductId('');
    setProductName('');
    setProductPrice('');
    setProductCategory('food'); // Reset category to 'food' after adding
  };

  return (
    <div className="product-form">
      <h2>Add Product</h2>
      <div className="form-control">
        <label htmlFor="productId">Product ID:</label>
        <input
          type="text"
          id="productId"
          value={productId}
          onChange={e => setProductId(e.target.value)}
          placeholder="Product ID"
        />
      </div>
      <div className="form-control">
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={e => setProductName(e.target.value)}
          placeholder="Product Name"
        />
      </div>
      <div className="form-control">
        <label htmlFor="productPrice">Selling Price:</label>
        <input
          type="text"
          id="productPrice"
          value={productPrice}
          onChange={e => setProductPrice(e.target.value)}
          placeholder="Selling Price"
        />
      </div>
      <div className="form-control">
        <label htmlFor="productCategory">Choose Category:</label>
        <select
          id="productCategory"
          value={productCategory}
          onChange={e => setProductCategory(e.target.value)}
        >
          <option value="food">Food</option>
          <option value="electronics">Electronics</option>
          <option value="clothes">Clothes</option>
        </select>
      </div>
      <button onClick={handleAdd} className="add-button">Add</button>
    </div>
  );
};

export default ProductForm;
