import React from 'react';
import { PropTypes } from 'prop-types';
import '../scss/index.scss';
import { connect } from "react-redux";
import { deleteDataIngredient } from '../redux/actions';

class Recipe extends React.Component {

    constructor(props) {
        super(props)
        this.deleteRecipe = this.deleteRecipe.bind(this);
    }

    
 //Удалить рецепт
 deleteRecipe = () => {
    const {dispatch} = this.props;
    const {id}  = this.props;
    dispatch(deleteDataIngredient(id));
};


    render() {
        const { ingredients, title } = this.props;
        return (
            <div className="recipe">
            <div className="recipe-image">
            <img src="https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cucumber.jpg" alt="Cucumber - 1 Kg"></img>
            </div>
        
                <div className="recipe-name"><h2>{title}</h2></div>
                <div className="recipe-description">
                <p>
                    <span> Ingredients | {ingredients}</span>
                </p>
                </div>
                <div className="recipe-action">
                <button className="btnDeleteRecipe" type="button" onClick={this.deleteRecipe}>УДАЛИТЬ РЕЦЕПТ</button>
                </div>
            </div>
        )
    }
}

Recipe.propTypes = {
    ingredients: PropTypes.string,
    title: (props, propName) =>
        (typeof props[propName] !== 'string') ?
            new Error("A title must be a string") :
            (props[propName].length > 40) ?
                new Error(`title is over 20 characters`) :
                null
}




export default connect()(Recipe);