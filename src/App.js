import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/Navbars';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Details from './components/Details';
import ProductList from './components/ProductList';
import Modal from './components/Modal';
import {BrowserRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter basename='/MStore/'>
        <Navbars/>
        <Route render={({location}) => (
                  <Switch location={location}>
                    <Route path="/details" component={Details}/>
                    <Route path="/cart" component={Cart}/>
                    <Route exact path="/" component={ProductList}/>
                    <Route path="/default" component={Default}/>
                  </Switch>
        )} /> 
        <Modal/>
        </BrowserRouter>
    );
  }
}

export default App;
