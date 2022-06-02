import React from "react";
import AddProduct from "../components/AddProduct";
import ListProduct from "../components/ListProduct";

class ProductContainer extends React.Component {
  constructor() {
    super();
    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.state = {
      products: [],
    };
  }

  handleAddProduct(product) {
    const products = [...this.state.products];
    products.push(product);
    this.setState({ products });
  }

  render() {
    return (
      <>
        <h2>Product Container</h2>
        <AddProduct add={this.handleAddProduct} />
        <hr />
        <ListProduct products={this.state.products} />
      </>
    );
  }
}

export default ProductContainer;
