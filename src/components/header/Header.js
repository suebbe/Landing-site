import React, { Component } from 'react'


class Header extends Component {

/*  state = {
    size: "big",
  }

  componentDidMount = () => {
     () => {
      window.addEventListener('scroll', this.getWindowHeight);
     }
  }

  componentWillUnmount = () => {
    () => {
      window.removeEventListener('scroll', this.getWindowHeight);
    }
  }

  getWindowHeight = () => {

    const distanceY = window.pageYOffset ||
      document.documentElement.scrollTop
    const shrinkOn = "200px";

    //Now In the condition change the state to smaller so if the condition is true it will change to smaller otherwise to default state
    if (distanceY > shrinkOn) {
      this.setState({
        scrolled: "small"
      })
    }
  }

*/

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
            <div className="login  login-button">
              <a href="http://app.flexiblakontoret.nu" className="btn bg-white text-flexibla-green">Logga in <i className="fas fa-sign-in-alt"></i></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
