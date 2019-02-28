import React, { Component } from 'react';

import { connect } from "react-redux";
import { PropTypes } from 'prop-types';
import { fetchDataIngredient,addDataIngredient } from '../redux/actions';

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
       
        const {dispatch} = this.props;
        dispatch(addDataIngredient(data));
        dispatch(fetchDataIngredient());
        
    }

    
    render() {
        return (
            <div >
                <p>Форма добавления рецепта</p>
                <form className="form" onSubmit={this.onSubmit}>
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
                    <button type="submit" disabled={this.props.isSubmiting}>Отправить</button>
                </form>
                {this.props.isSuccess && <Success/>}
            </div>
           
        )
    };
}

const Success = () => (
    <div className='modal'>
          Сообщение отправлено. Спасибо!
      </div>)

AddRecipeForm.propTypes = {

    errors: PropTypes.array,
    isSubmitting: PropTypes.bool,
    isSuccess: PropTypes.bool
}

const mapStateToProps = (state) => {
    return {
        errors: state.errors,
        isSubmitting: state.isSubmitting,
        isSuccess: state.isSuccess
    };
}

export default connect(mapStateToProps)(AddRecipeForm);

