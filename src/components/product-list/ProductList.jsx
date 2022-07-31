import React, { useState, useEffect } from 'react';
import Product from '../product/Product';
import './product-list.css'

const ProductList = () => {

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(test => setProductsData(test))
  }, [])

  const formatProductData = (data) => {

    return data.map((item, index) => {
      return <Product key={index} imageSrc={item.image} productDescription={item.category} productTitle={item.title} productPrice={item.price} />
    })

  }

  return (
    <div className='productList-container'>
      {productsData && formatProductData(productsData)}
    </div>
  )
}


export default ProductList;
