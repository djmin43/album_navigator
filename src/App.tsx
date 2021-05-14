import Album from './comps/album/Album'
import Authentication from './comps/auth/Authentication'
import Navbar from './comps/Navbar'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";import './App.css';
import Header from './comps/Header'
import Footer from './comps/Footer'
import Home from './comps/Home'

function App() {
  return (
    <Router>
        <Header />
        <Navbar />
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/auth">
            <Authentication />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/album">
            <Album />
          </Route>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
