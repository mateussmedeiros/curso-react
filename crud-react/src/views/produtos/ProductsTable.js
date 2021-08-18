import React from 'react'

export default (props) => (
  <table className="table table-hover">
    <thead>
      <tr>
        <th scope="col">Nome</th>
        <th scope="col">SKU</th>
        <th scope="col">Preço</th>
        <th scope="col">Fornecedor</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      {
        props.products.map((product, index) => {
          return (
            <tr key={index}>
              <th scope="row">{product.name}</th>
              <td>{product.sku}</td>
              <td>{product.price}</td>
              <td>{product.provider}</td>
              <td>
                <button onClick={() => props.editAction(product.sku)} className="btn btn-primary">Editar</button>
                <button onClick={() => props.deleteAction(product.sku)} className="btn btn-danger">Excluir</button>
              </td>
            </tr>
          )
        })
      }
    </tbody>
  </table>
)