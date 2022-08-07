import React from 'react';
import './product.css';
import { Link } from 'react-router-dom'

const Product = ({ image, title: productTitle, category, price, id }) => {
  return (
    <Link to={`product/${id}`}>
      <div className='product-container'>
        <img src={image} height='300' width='300' />
        <div>
          <p className='product-title' title={productTitle}>{productTitle}</p>
          <p>{category}</p>
          <p className='product-price'>Rs: {price}</p>
        </div>
      </div>
    </Link>
  )
}

export default Product;