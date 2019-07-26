import React, { Component } from 'react';
import { connect } from "react-redux";

//scss
import '../scss/index.scss';

//components
import AddRecipeForm from '../components/AddRecipeForm';
import Recipes from '../components/Recipes';
import Message from './Message';

import { changeForm} from '../redux/actions';
import { PropTypes } from 'prop-types';


class App extends Component {

    constructor(props) {
        super(props)
        this.toggleForm = this.toggleForm.bind(this);
    }

    //Открыть или скрыть форму
    toggleForm = () => {
        const {dispatch} = this.props;
        dispatch(changeForm(this.props.isFormOpen));
    };


    render() {

        return (
            <div className="App">
               

                <div className="container">

                 <header>
                    <h1>Книга Рецептов</h1> 
                    <button className="btnRecipes" onClick={this.toggleForm}>Добавить Рецепт</button>
                </header>
                    <Message/>
                    <Recipes />

                   
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