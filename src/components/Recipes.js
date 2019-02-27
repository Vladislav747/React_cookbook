
import React, { Component } from 'react';
import Recipe from './Recipe';
import { connect } from "react-redux";

import '../scss/Recipes.css';
// import {store} from '../redux/store'; 

import { getDataRecipes } from '../redux/reducers';
import { getDataIngredient } from '../redux/actions';
import store from "../redux/store";
//Recipes как функция а не как класс
const Recipes = () => {
    store.dispatch(getDataIngredient());
    const { dataIngredient } = store.getState();


    return (
        <div className="recipes">
            {dataIngredient
                .map((item, i) =>
                    <Recipe id={i} title={item.titleRecipe} ingredients={item.ingredients} />
                )
            }
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         dataIngredient: getDataRecipes(state),
//     };
//   }

//   const mapDispatchToProps = dispatch => ({
//     getDataIngredient: () => dispatch(getDataIngredient)
//   });

//   export default connect(mapStateToProps,mapDispatchToProps)(Recipes);







// class Recipes extends Component {
//     constructor(props){
//         super(props);
//     }

//     render() {
//         const ShowRecipes = 
//             this.props.dataIngredient
//             .map((item, i) => {
//                 return (
//                     <Recipe id={i} title={item.titleRecipe} ingredients={item.ingredients} />
//                 );
//             });


//     return (<div className="recipes">{ShowRecipes}</div>);

//      }

// }

export default Recipes;