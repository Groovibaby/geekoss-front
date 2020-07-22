import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';
import AddOffer from './components/AddOffer';
import UserAccount from './components/UserAccount';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/add-offer" component={AddOffer} />
        <Route exact path="/user-account" component={UserAccount} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
