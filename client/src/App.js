import React, { Component } from "react";
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Search from './pages/Search';
import Saved from './pages/Saved';
import Nav from './components/Nav';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import "./App.css";

class App extends Component {

  render() {
    return (
      <Router>
        <Nav />
        <Header />
        <Wrapper>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Wrapper>
      </Router>
    )
  }

};

export default App;
