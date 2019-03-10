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
            <div className="AddRecipeFormContainer" >
               
                <form className="formIngredient" onSubmit={this.onSubmit}> 
                <p>Форма добавления рецепта</p>
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

