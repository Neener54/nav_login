import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="o-navbar">
          <div className="c-navbar-top">
            <div className="o-site-container">
              <a className="c-navbar-logo" href="/">
                <img height="21px" src="https://dxkdvuv3hanyu.cloudfront.net/images/nav/logo-name-blue.svg" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <Login/>
        </div>
      </div>
    );
  }
}

export default App;
