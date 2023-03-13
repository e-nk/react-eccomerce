import React, { useState } from 'react';

function ProductCard(props) {
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedToWishlist, setAddedToWishlist] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    props.addToCart(props.product);
  };

  const handleAddToWishlist = () => {
    setAddedToWishlist(true);
    props.addToWishlist(props.product);
  };

  const { id, title, price, image, description } = props.product;

  return (
    <div className="col-sm-4">
      <div className="card mb-4">
        <img src={image} alt={title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <p className="card-price">${price}</p>
            <div className="btn-group">
              <button
                className="btn btn-sm btn-outline-primary"
                onClick={handleAddToCart}
                disabled={addedToCart}
              >
                {addedToCart ? 'Added to Cart' : 'Add to Cart'}
              </button>
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={handleAddToWishlist}
                disabled={addedToWishlist}
              >
                {addedToWishlist ? 'Added to Wishlist' : 'Add to Wishlist'}
              </button>
              <button className="btn btn-sm btn-outline-info">Product Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
