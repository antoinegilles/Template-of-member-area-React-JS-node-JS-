import React, { Component } from 'react';
import './App.css';
import Navbarre from './component/element/Navbar';
import Inscription from './component/Inscription';
import LoginHome from './component/LoginHome';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './component/Home';

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
              <Route path="/loginhome" component={LoginHome} />
          </Router>
        </div>
      
      );
    }
  }

export default App;
