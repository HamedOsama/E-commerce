import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Product from './pages/Product';
import Products from './pages/Products';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/products/:category">
        <Products />
      </Route>
      <Route path="/product/:id">
        <Product />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/contact-us">
        <ContactUs />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
