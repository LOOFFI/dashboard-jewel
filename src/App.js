import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <main>
      <Header/>  

      <div className="App">
        <header className="App-header">
          COUCOU
          <div>I am developing the dashboard...</div>
          <Button>bouton</Button>
        </header>
      </div>
      </main>
    );
  }
}

export default App;
