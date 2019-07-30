import React, { Component } from 'react';
import './App.css';
import Navbarre from './component/element/Navbar';
import Inscription from './component/Inscription';
import LoginHome from './component/LoginHome';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './component/Home';
import Connexion from './component/Connexion';
import Deconnexion from './component/service/Deconnexion'

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    render() {
      return (
        <div>
          <Router>
            <Navbarre></Navbarre>
              <Route exact path="/" component={Home} />
              <Route path="/inscription" component={Inscription} />
              <Route exact path="/connexion" component={Connexion} />
              <Route path="/loginhome" component={LoginHome} />
              <Route path="/deconnexion" component={Deconnexion} />
          </Router>
        </div>
      
      );
    }
  }

export default App;
