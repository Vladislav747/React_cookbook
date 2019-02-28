import React, { Component } from 'react';
import { connect } from "react-redux";
//css
import '../scss/index.scss';
import '../scss/App.css';
//components
import AddRecipeForm from '../components/AddRecipeForm';
import Recipes from '../components/Recipes';

import { changeIsFormOpen } from '../redux/actions';
import { PropTypes } from 'prop-types';

class App extends Component {

    constructor(props) {
        super(props)

        /*При использовании схемы типа class App extends Component  
        нужно привязывать область видимости явно при React.createClass не нужно*/
        this.toggleForm = this.toggleForm.bind(this);

    }

    //Открыть или скрыть форму
    toggleForm = () => {
        const {dispatch} = this.props
        dispatch(changeIsFormOpen(this.props.isFormOpen))
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
                    <div className={this.props.isFormOpen ? 'AddRecipeFormIsOpen' : 'AddRecipeForm'}>
                        <AddRecipeForm />
                    </div>
                </div>

            </div>
        );
    }
}

App.propTypes = {

    isFormOpen: PropTypes.bool
}

const mapStateToProps = (state) => {
    return {
        isFormOpen: state.isFormOpen
    };
}

export default connect(mapStateToProps)(App);