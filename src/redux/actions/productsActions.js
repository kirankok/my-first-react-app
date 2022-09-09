import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE } from './constants'
import axios from 'axios'

export const getProducts = () => {
  return {
    type: GET_PRODUCTS
  }
}

export const getProductsSuccess = (data) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: data
  }
}

export const getProductsFailure = (error) => {
  return {
    type: GET_PRODUCTS_FAILURE,
    payload: error
  }
}

export const fetchProducts = (productId) => {
  return (dispatch) => {
    dispatch(getProducts());
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(
        res => dispatch(getProductsSuccess(res.data)),
        err => dispatch(getProductsFailure(err))
      );
  };
};
