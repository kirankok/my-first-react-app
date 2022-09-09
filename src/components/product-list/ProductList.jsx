import React, { useState, useEffect } from 'react';
import Product from '../product/Product';
import './product-list.css'

const ProductList = ({ productId }) => {

  const [products, setState] = useState(data);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(test => setState(test))
  }, [productId])

  return (
    <div className='productList-container'>
      {Object.keys(products).length > 0 && <Product {...products} />}
    </div>
  )
}

export default ProductList;
