import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {

  const { productId } = useParams();

  const [productDetails, setProductDetails] = useState();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(info => setProductDetails(info))

  }, [])

  return (
    <div>
      <p>{productDetails?.title}</p>
      <img src={productDetails?.image} width='300' height='300' />
    </div>
  )
}

export default ProductDetails