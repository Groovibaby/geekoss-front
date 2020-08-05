import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./components/contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Footer from "./components/Footer";
import AddOffer from "./components/AddOffer";
import UserAccount from "./components/UserAccount";
import OfferDetails from "./components/OfferDetails";
import LegalNotice from "./components/LegalNotice";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/offer-details/:id" component={OfferDetails} />
          <Route exact path="/legal-notice" component={LegalNotice} />
          <PrivateRoute exact path="/user-account" component={UserAccount} />
          <PrivateRoute exact path="/add-offer" component={AddOffer} />
        </Switch>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
