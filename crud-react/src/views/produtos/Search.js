import React from 'react'
import { withRouter } from 'react-router-dom'

import RegisterService from '../../app/registerService'

import Card from '../../components/Card'
import ProductsTable from './ProductsTable'

class SearchProduct extends React.Component {
  state = {
    products: []
  }

  constructor() {
    super();
    this.service = new RegisterService();
  }

  componentDidMount() {
    const products = this.service.search();
    this.setState({ products });
  }

  beforeEdit = (sku) => {
    this.props.history.push(`/register-products/${sku}`)
  }

  delete = (sku) => {
    const products = this.service.delete(sku);
    this.setState({ products });
  }

  render() {
    return (
      <Card header="Consulta de Produtos">
        <ProductsTable products={this.state.products} />

      </Card>
    )
  }
}

export default withRouter(SearchProduct)