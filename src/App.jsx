import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
      <Switch>
        <Route exact path="/signup" component={Signup} />
      </Switch>
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
