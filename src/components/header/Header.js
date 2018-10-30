import React, { Component } from 'react'


class Header extends Component {

  render() {
    return (
      <div className= "header-container">
        <div className="row mb-3">
          <div className="col s6 left-align">
            <div className="logo">
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s6 right-align bar">
            <div className="login slide-in  login-button">
              <a href="http://app.flexiblakontoret.nu" className="btn text-white">Logga in <i className="fas fa-sign-in-alt"></i></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
