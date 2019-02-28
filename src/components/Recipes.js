
import React, { Component } from 'react';
import Recipe from './Recipe';
import { connect } from "react-redux";

import '../scss/Recipes.css';

import { getDataIngredient, fetchDataIngredient } from '../redux/actions';

class Recipes extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch, dataIngredient} = this.props
        dispatch(fetchDataIngredient())
      }


    render() {

   
            

        // Empty and Loading States
        let view;
        if (this.props.dataIngredient.length <= 0) {
            view = <p>Loading</p>;
        } else {
            view = this.props.dataIngredient
            .map((item, i) => {
                return (
                    <Recipe id={i} title={item.titleRecipe} ingredients={item.ingredients} />
                );
            });;
        };

        return (<div className="recipes">{view}</div>);

    }

}

const mapStateToProps = (state) => {
    return {
        dataIngredient: state.dataIngredient
    };
}

export default connect(mapStateToProps)(Recipes);