import React, { Component } from 'react';
import { connect } from "react-redux";
//css
import '../scss/index.scss';
import '../scss/App.css';
//components
import AddRecipeForm from '../components/AddRecipeForm';
import Recipes from '../components/Recipes';

import { changeForm} from '../redux/actions';
import { PropTypes } from 'prop-types';
import Message from './Message';

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
                <header>
                    <h1>Книга Рецептов</h1>
                </header>

                <div className="container">
                    {/* {n.show()} */}
                    <Message/>
                    <Recipes />

                    <button className="btnRecipes" onClick={this.toggleForm}>Лобавить Рецепт</button>
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