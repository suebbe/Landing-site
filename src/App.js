import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Background from './components/background/Background';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Background />
          <Header />
          <Main />
          <Footer />
      </div>
    );
  }
}

export default App;
