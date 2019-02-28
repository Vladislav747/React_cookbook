import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//css
import './scss/index.scss';
import './scss/App.css';
//components
import AddRecipeForm from './components/AddRecipeForm';
import Recipes from './components/Recipes';

import { Provider } from "react-redux";
import store from "./redux/store";
import { getRecipes } from './services/mLab';


class App extends Component {

    constructor(props) {
        super(props)

        /*При использовании схемы типа class App extends Component  
        нужно привязывать область видимости явно при React.createClass не нужно*/
        this.toggleForm = this.toggleForm.bind(this);
        
    }

    

    //Открыть скрыть форму
    toggleForm = () => {
        this.setState(({ isFormOpen }) => ({ isFormOpen: !isFormOpen }));
    };

    render() {
        
        return (
            <div className="App">
                <header>
                    <h1>Книга Рецептов</h1>
                </header>

                <div className="container">
                    <Recipes />

                    <button className="fas fa-hand-point-right" onClick={this.toggleForm}>Открыть Форму</button>
                {/* <div className={this.state.isFormOpen ? 'AddRecipeFormIsOpen' : 'AddRecipeForm'}>
                    <AddRecipeForm />
                </div> */}
                </div>

                
            </div>
        );
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));