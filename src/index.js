import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './scss/index.css';
import * as serviceWorker from './serviceWorker';
import './scss/App.css';

import Recipe from './components/Recipe';
import AddRecipeForm from './components/AddRecipeForm';
import { getRecipes } from './api/api';

class App extends Component {

    constructor(props) {
      super(props)
  
      /*При использовании схемы типа class App extends Component  
      нужно привязывать область видимости явно при React.createClass не нужно*/
      this.toggleMenu = this.toggleMenu.bind(this);
      this.toggleForm = this.toggleForm.bind(this);
      this.state = {
        isMenuOpen: false,
        isFormOpen: false,
        dataIngredient: []
      };
    }
  
    componentDidMount() {
  
      
      getRecipes()
        .then((result) => {
          this.setState({
            dataIngredient: result
          })
        })
        .catch((err) => {
          console.log(err);
        })
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
  
    ShowRecipes = (data) => {
  
      return data.map((item, i) =>
        <Recipe id={i} title={item.titleRecipe} ingredients={item.ingredients} />
      )
  
    }
  
    render() {
  
      return (
        <div className="App">
          <header>
            <button className="fa fa-bars menu-btn"
              onClick={this.toggleMenu} />
          </header>
          <aside ref={this.handleAsideRef} className={this.state.isMenuOpen ? 'isOpen' : ''}></aside>
          <main>Книга Рецептов</main>
  
          <div className="recipes">
            {this.ShowRecipes(this.state.dataIngredient)}
          </div>
  
          <button className="fas fa-hand-point-right" onClick={this.toggleForm}>Открыть Форму</button>
          <div className={this.state.isFormOpen ? 'AddRecipeFormIsOpen' : 'AddRecipeForm'}>
            <AddRecipeForm />
          </div>
        </div>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
