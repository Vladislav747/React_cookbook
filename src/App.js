import React, { Component } from 'react';
import './App.css';
import Recipe from './Recipe/Recipe';

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
  // document.addEventListener('click', this.onAsideClick);
  // }

  
  render() {
    const recipesOfRecipe = ["Chicken Soup", "Tomato Soup", "Chicken with Potato"];
    const ingredientsOfRecipe = [4,5,6,8];
    return (
      <div className="App">
      <header>
        <button className="fa fa-bars menu-btn" 
        onClick={this.toggleMenu}/>      
      </header>
      <aside ref={this.handleAsideRef} className={this.state.isMenuOpen ? 'isOpen' : ''}></aside>
      <main>Main</main>
      <Recipe title={recipesOfRecipe[0]} ingredients={ingredientsOfRecipe[0]} />
      </div>
    );
  }
}

export default App;
