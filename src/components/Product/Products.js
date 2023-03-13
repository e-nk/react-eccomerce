import React, { useState, useEffect } from 'react';
import ProductCard from './ProductGrid';
import Cart from '../Cart/Cart';

function Products() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (product) => {
    const newCartItems = [...cartItems, product];
    setCartItems(newCartItems);
  };

  const addToWishlist = (product) => {
    const newWishlistItems = [...wishlistItems, product];
    setWishlistItems(newWishlistItems);
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
          />
        ))}
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default Products;
