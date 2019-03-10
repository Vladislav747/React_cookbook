import React, { Component } from 'react';

import { connect } from "react-redux";
import { PropTypes } from 'prop-types';
import { fetchDataIngredient, addDataIngredient } from '../redux/actions';
import '../scss/AddRecipeForm.scss';

class AddRecipeForm extends Component {

    //Изначальный state
    constructor(props) {
        super(props);
    }

    onSubmit = event => {
        event.preventDefault();

        const data = {
            titleRecipe: event.target.titleRecipe.value,
            ingredients: event.target.ingredients.value,
        }

        const { dispatch } = this.props;
        dispatch(addDataIngredient(data));
    }

    render() {
        return (
            <div className="AddRecipeFormContainer" >
                <p>Форма добавления рецепта</p>
                <form className="formIngredient" onSubmit={this.onSubmit}>
                    <label>
                        Title of Recipe:
                    <div>
                            <input type="text" name="titleRecipe" />

                        </div>
                    </label>
                    <label>
                        Ingredients of Recipe:
                    <div>
                            <input type="text" name="ingredients" />

                        </div>
                    </label>
                    <button className="btnSubmit" type="submit" disabled={this.props.isSubmiting}>Отправить</button>
                </form>

            </div>

        )
    };
}

AddRecipeForm.propTypes = {
 
    isSubmitting: PropTypes.bool,
    isSuccess: PropTypes.bool
}

const mapStateToProps = (state) => {
    return {
        isSubmitting: state.isSubmitting,
        isSuccess: state.isSuccess
    };
}

export default connect(mapStateToProps)(AddRecipeForm);

