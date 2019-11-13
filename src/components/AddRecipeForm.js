import React, { Component } from 'react';

import { connect } from "react-redux";
import { PropTypes } from 'prop-types';
import { addDataIngredient } from '../redux/actions';
import '../scss/index.scss';

class AddRecipeForm extends Component {

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
            <div className="AddRecipeFormContainer form">
                <div className="form__inner">
                    <form className="formIngredient" onSubmit={this.onSubmit}>
                        <h2>Форма добавления рецепта</h2>
                        
                        <div class="form__row">
                            <label>Название рецепта</label>
                            <input type="text" class="inputtext" name="titleRecipe" />
                        </div>
                    
                       
                        <div class="form__row">
                            <label>Ингредиенты рецепта:</label>
                            <textarea type="text" rows="5" class="inputtext" name="ingredients"></textarea>
                        </div>
                        
                        <button className="btnSubmit" type="submit" disabled={this.props.isSubmiting}>Отправить</button>
                    </form>
                </div>  
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

