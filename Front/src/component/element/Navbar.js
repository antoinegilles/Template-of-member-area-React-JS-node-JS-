import React from 'react';
import { Link } from "react-router-dom";

export default class Navbarre extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
          <nav className="light-blue">
              <div className="nav-wrapper">
                  <a href="/" className="brand-logo">TakeCar</a>
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                      <li><Link to="/inscription">Inscription</Link></li>
                  </ul>
              </div>
          </nav> 
    );
  }
}
