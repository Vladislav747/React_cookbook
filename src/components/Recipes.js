
import React, { Component } from 'react';
import Recipe from './Recipe';

import '../scss/Recipes.css';

export default class Recipes extends Component {

    //Изначальный state
    constructor(props) {
        super(props);
    }

    render() {
        const ShowRecipes = 
            this.props.dataIngredient
            .map((item, i) => {
                return (
                    <Recipe id={i} title={item.titleRecipe} ingredients={item.ingredients} />
                );
            });
   

    return (<div className="recipes">{ShowRecipes}</div>);

     }
        
}

