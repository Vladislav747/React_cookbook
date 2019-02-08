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
    if (!event.target.contains(this.aside)) {
      this.toggleMenu();
    }
  }

  Recipe = ({ name, ingredients, steps }) =>
    <section id="baked-salmon">
      <h1>{name}</h1>
      <ul className="ingredients">
        {ingredients.map((ingredient, i) =>
          <li key={i}>{ingredient.name}</li>
        )}
      </ul>
      <section className="instructions">
        <h2>Cooking Instructions</h2>
        {steps.map((step, i) =>
          <p key={i}>{step}</p>
        )}
      </section>
    </section>

  // handleAsideRef = (node) => {
  //   this.aside = node;
  //   document.addEventListener('click', this.onAsideClick);
  // }
  render() {
    return (
      <div className="App">
        <header>
          <button className="fa fa-bars menu-btn"
            onClick={this.toggleMenu} />
        </header>
        <aside ref={this.handleAsideRef} className={this.state.isMenuOpen ? 'isOpen' : ''}></aside>
        <main>Main</main>
        {this.Recipe()}
      </div>
    );
  }
}

export default App;
