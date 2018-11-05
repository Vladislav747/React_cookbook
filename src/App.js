import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    isMenuOpen: false,
  };
  toggleMenu = () => {
    this.setState(({ isMenuOpen }) => ({ isMenuOpen: !isMenuOpen }));
  };
  render() {
    return (
      <div className="App">
      <header>
        <button className="fa fa-bars menu-btn" 
        onClick={this.toggleMenu}/>      
      </header>
      <aside ref={this.handleAsideRef} className={this.state.isMenuOpen ? 'isOpen' : ''}></aside>
      <main>Main</main>
      </div>
    );
  }
}

export default App;
