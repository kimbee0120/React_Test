import React, {Fragment, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  const[basket, setBasket] =  useState(0);
  const addToBasket = () => {
    setBasket(basket + 1);
  }
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar basketNumber = {basket} />
        <Switch>
          <Route exact path="/" render={() => <Home myFunc={addToBasket}/>}/>
          <Route path="/about" component={About}/>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
