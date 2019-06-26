import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from './components/Navbar';
import Search from './pages/Search';
import Saved from './pages/Saved';
import NoMatch from './pages/NoMatch';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Search} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/saved' component={Saved} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </>
      </Router>
    );
  }
}

export default App;
