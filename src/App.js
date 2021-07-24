import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shop.component";
import Header from "./components/header/Header";
import RegistrationPage from "./pages/registrationpage/RegistrationPage";
import { auth, createUserProfileDocument } from "./firebase/firebase";

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={RegistrationPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
