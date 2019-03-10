import React from 'react';
import { PropTypes } from 'prop-types';
import '../scss/Recipe.css';
import { connect } from "react-redux";
import { fetchDataIngredient, deleteDataIngredient } from '../redux/actions';

class Recipe extends React.Component {

    constructor(props) {
        super(props)
        this.deleteRecipe = this.deleteRecipe.bind(this);
    }

    
 //Открыть или скрыть форму
 deleteRecipe = () => {
    const {dispatch} = this.props;
    const {id}  = this.props;
    dispatch(deleteDataIngredient(id));
    dispatch(fetchDataIngredient());
};


    render() {
        const { ingredients, title } = this.props;
        return (
            <div className="recipe">
                <h1>{title}</h1>
                <p>
                    <span> Ingredients | {ingredients}</span>
                </p>
                <button className="btnDeleteRecipe" onClick={this.deleteRecipe}>Удалить Рецепт</button>
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