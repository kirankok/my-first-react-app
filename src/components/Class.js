import React, { Component } from 'react';
import Product from './product/Product';
import { connect } from 'react-redux';
import { fetchProducts } from '../redux/actions/productsActions'

class ProductList extends Component {


  componentDidMount() {
    this.props.fetchProducts(this.props.productId)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.productId !== prevProps.productId) {
      this.props.fetchProducts(this.props.productId)
    }
  }

  render() {
    const { isLoading, productsData } = this.props.data
    return (
      <>
        {isLoading && <h1>Loading......</h1>}
        {Object.keys(productsData).length > 0 && <Product {...productsData} />}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.products
  }
}

const mapDispatchToProps = {
  fetchProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);