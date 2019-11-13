import React, { Component } from 'react';
import { connect } from "react-redux";

//scss
import '../scss/index.scss';

//components
import AddRecipeForm from '../components/AddRecipeForm';
import Recipes from '../components/Recipes';
import Message from '../components/Message';
import Header from '../components/Header';

class App extends Component {

    constructor(props) {
        super(props)
        // this.toggleForm = this.toggleForm.bind(this);
    }

    render() {
        return (
            <div className="App">
               <div className="container">
                <Header/>
                <Message/>
                <Recipes/>
                
                <div className={this.props.isFormOpen ? 'AddRecipeFormIsOpen' : 'AddRecipeForm'}>
                    <AddRecipeForm />
                </div>
                              
                </div>
            </div>
        );
    }
}


export default App;