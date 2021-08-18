import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './views/Home'
import RegisterProduct from './views/produtos/Register'
import SearchProduct from './views/produtos/Search'

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register-products/:sku?" component={RegisterProduct} />
      <Route exact path="/search-products" component={SearchProduct} />
    </Switch>
  )
}