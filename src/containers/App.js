import React, { Component } from 'react';
import { connect } from "react-redux";

//scss
import '../scss/index.scss';

//components
import {AddRecipeForm, Header, Recipes, Message} from '~/components';

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