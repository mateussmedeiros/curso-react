import React from 'react'
import { withRouter } from 'react-router-dom'

import RegisterService from '../../app/registerService'

import Card from '../../components/Card'

const initialState = {
  name: '',
  sku: '',
  description: '',
  price: 0,
  provider: '',
  success: false,
  errors: [],
  edit: false
}

class RegisterProduct extends React.Component {
  state = initialState

  constructor() {
    super();
    this.service = new RegisterService();
  }

  onChange = (event) => {
    const value = event.target.value
    const inputName = event.target.name
    this.setState({ [inputName]: value })
  }

  onSubmit = (event) => {
    event.preventDefault();
    const product = {
      name: this.state.name,
      sku: this.state.sku,
      description: this.state.description,
      price: this.state.price,
      provider: this.state.provider
    }

    try {
      this.service.save(product);
      this.clearValues();
      this.setState({ success: true });
    } catch (error) {
      const errors = error.errors;
      this.setState({ errors: errors });
    }
  }

  clearValues = () => {
    this.setState(initialState)
  }

  componentDidMount() {
    const sku = this.props.match.params.sku;

    if (sku) {
      const result = this.service.search().filter(product => product.sku === sku);
      if (result.length === 1) {
        const selectedProduct = result[0];
        this.setState({ ...selectedProduct, edit: true });
      }
    }
  }

  render() {
    return (
      <Card header={`${this.state.edit ? 'Atualização' : 'Cadastro'} de Produtos`}>
        {this.state.success &&
          <div className="alert alert-dismissible alert-success">
            <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
            <strong>{this.state.edit ? 'Atualização realizada' : 'Cadastro realizado'} com sucesso!</strong>.
          </div>
        }

        {this.state.errors.length > 0 &&
          this.state.errors.map(msg => {
            return (
              <div className="alert alert-dismissible alert-danger">
                <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                <strong>Erro!</strong> {msg}.
              </div>
            )
          })
        }

        <form id="formRegister" onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Nome: *</label>
                <input type="text"
                  name="name"
                  value={this.state.name}
                  className="form-control"
                  onChange={this.onChange} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>SKU: *</label>
                <input type="text"
                  name="sku"
                  disabled={this.state.edit}
                  value={this.state.sku}
                  className="form-control"
                  onChange={this.onChange} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Descrição</label>
                <textarea
                  name="description"
                  value={this.state.description}
                  className="form-control"
                  onChange={this.onChange} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Preço: *</label>
                <input type="text"
                  name="price"
                  value={this.state.price}
                  className="form-control"
                  onChange={this.onChange} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Fornecedor: *</label>
                <input type="text"
                  name="provider"
                  value={this.state.provider}
                  className="form-control"
                  onChange={this.onChange} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-1">
              <button className="btn btn-success">
                {this.state.edit ? 'Atualizar' : 'Salvar'}
              </button>
            </div>
            <div className="col-md-1">
              <button onClick={this.clearValues} className="btn btn-primary">Limpar</button>
            </div>
          </div>
        </form>
      </Card>
    );
  }
}

export default withRouter(RegisterProduct);