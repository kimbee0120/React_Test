import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Form from'./components/Form';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component = {Home} />
          <Route exact path="/register" component = {Form} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
