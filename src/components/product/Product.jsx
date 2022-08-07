import React from 'react';
import './product.css';
import { Link } from 'react-router-dom'

const Product = ({ imageSrc, productTitle, productDescription, productPrice, productId }) => {
  return (
    <Link to={`product/${productId}`}>
      <div className='product-container'>
        <img src={imageSrc} height='300' width='300' />
        <div>
          <p className='product-title' title={productTitle}>{productTitle}</p>
          <p>{productDescription}</p>
          <p className='product-price'>Rs: {productPrice}</p>
        </div>
      </div>
    </Link>
  )
}

export default Product;