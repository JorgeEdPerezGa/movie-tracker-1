import React, { Component } from 'react';
import './App.css';
import CardList from '../Containers/CardList/CardList';
import NavBar from '../Containers/NavBar/NavBar';
import { Route } from 'react-router-dom';
import Login from '../Containers/Login/Login.js';
import Register from '../Containers/Register/Register.js';
import Favorites from '../Containers/Favorites/Favorites';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Route path='/' component={NavBar} key='NavBar'/>
        <Route exact path='/' component={CardList} key='CardList'/>
        <Route exact path='/login' component={Login} key='login' />
        <Route exact path='/register' component={Register} key='register' />
        <Route exact path='/favorites' component={Favorites} key='favorites' />
      </div>
    );
  }
}

export default App;
