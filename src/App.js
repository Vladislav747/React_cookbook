import React, { Component } from 'react';
import './App.css';
import Recipe from './Recipe/Recipe';
import AddRecipeForm from './AddRecipeForm/AddRecipeForm';

class App extends Component {

  constructor(props) {
    super(props)

    //При использовании схемы типа class App extends Component  
    // нужно привязывать область видимости явно при React.createClass не нужно
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }
  state = {
    isMenuOpen: false,
    isFormOpen: false
  };

  //Открыть скрыть меню
  toggleMenu = () => {
    this.setState(({ isMenuOpen }) => ({ isMenuOpen: !isMenuOpen }));
  };

  //Открыть скрыть форму
  toggleForm = () => {
    this.setState(({ isFormOpen }) => ({ isFormOpen: !isFormOpen }));
  };

  //Чтобы сработка была именно на элементе aside
  onAsideClick = (event) => {
    if (!event.target.contains(this.aside)) {
      this.toggleMenu();
    }
  }
  // handleAsideRef = (node) => {
  //   this.aside = node;
  // document.addEventListener('click', this.onAsideClick);
  // }


  render() {
    const recipesOfRecipe = ["Chicken Soup", "Tomato Soup", "Chicken with Potato"];
    const ingredientsOfRecipe = ["chicken, water, potato", 5, 6, 8];
    return (
      <div className="App">
        <header>
          <button className="fa fa-bars menu-btn"
            onClick={this.toggleMenu} />
        </header>
        <aside ref={this.handleAsideRef} className={this.state.isMenuOpen ? 'isOpen' : ''}></aside>
        <main>Книга Рецептов</main>
        <Recipe title={recipesOfRecipe[0]} ingredients={ingredientsOfRecipe[0]} />
        <button className="fas fa-hand-point-right" onClick={this.toggleForm}>Открыть Форму</button>
        <div className={this.state.isFormOpen ? 'AddRecipeFormIsOpen' : 'AddRecipeForm'}>
          <AddRecipeForm />
        </div>
      </div>
    );
  }
}

export default App;
