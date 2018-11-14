import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    isMenuOpen: false,
  };
  toggleMenu = () => {
    this.setState(({ isMenuOpen }) => ({ isMenuOpen: !isMenuOpen }));
  };

  //Чтобы сработка была именно на элементе aside
  onAsideClick = (event) => {
    if(!event.target.contains(this.aside)){
      this.toggleMenu();
    }
  }
  // handleAsideRef = (node) => {
  //   this.aside = node;
  //  document.addEventListener('click', this.onAsideClick);
  // }
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
