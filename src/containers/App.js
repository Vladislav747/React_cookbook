import React, { Component } from 'react';
import { connect } from "react-redux";

//scss
import '../scss/index.scss';

//components
import AddRecipeForm from '../components/AddRecipeForm';
import Recipes from '../components/Recipes';
import Message from '../components/Message';
import Header from '../components/Header';
// import { changeForm} from '../redux/actions';
// import { PropTypes } from 'prop-types';

// const mapStateToProps = state => {
//     console.log(state);
//     return {
//         isFormOpen: state.isFormOpen,
//         dataIngredient: state.dataIngredient,
//         isLoading: state.isLoading
//     };
// }

class App extends Component {

    constructor(props) {
        super(props)
        // this.toggleForm = this.toggleForm.bind(this);
    }

    
 

    // //Открыть или скрыть форму
    // toggleForm = () => {
    //     const {dispatch} = this.props;
    //     dispatch(changeForm(this.props.isFormOpen));
    // };
  
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