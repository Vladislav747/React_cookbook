import React, { Component } from 'react';
//import '../SignupForm.css';
import { addRecipe, validateEmail } from '../api/api';


const handleErrors = (errors, field) =>

    errors
        .filter(e => e.field === field)
        .map(e => <p key={e.error} className="error">{e.error} </p>);


class AddRecipeForm extends Component {


    //Изначальный state
    constructor(props) {
        super(props);
        this.state = {
            errors: [],
            isSubmiting: false,
        };
    }

    //Изначальный state другим способом
    // state = {
    //     errors: [],
    // };



    onSubmit = event => {
        event.preventDefault();

            const data = {
            titleRecipe: event.target.titleRecipe.value,
            ingredients: event.target.ingredients.value,
        }

        console.log(data);
        const errors = [];

        if (!data.titleRecipe) errors.push({ field: 'email', error: 'Missing Title of Recipe' });
        if (!data.ingredients) errors.push({ field: 'password', error: 'Missing Ingredients of Recipe' });

        console.log(errors, "Массив ошибок до отправки на сервер");

        //Если что то есть в массиве ошибок то обновляем state
        if (errors.length) return this.setState({ errors });
        this.setState({ isSubmiting: true });
        addRecipe(data).then(
            //r -  ressolve - Сработает в качестве успеха , e-errors - это Promise
            r => {
                //При отправке запроса очищаем массив ошибок
                this.setState({ errors: [], isSubmiting: false });
                console.log("Сообщение отправлено");
            },
            e => {
                console.log(e.data);
                console.log("Сообщение не отправлено");
                //e.response.data.errors = ((e.response.data.errors).length() > 0) ? e.response.data.errors: [];
                // this.setState({ errors: e.response.data.errors, isSubmiting: false });
            }
        );

    }

    render() {
        return (
            <div>
                <p>Форма добавления рецепта</p>
                <form className="form" onSubmit={this.onSubmit}>
                    <label>
                        Title of Recipe:
                    <div>
                            <input type="text" name="titleRecipe" />
                            {/* Ошибоньки */}
                            {handleErrors(this.state.errors, 'titleRecipe')}

                        </div>
                    </label>
                    <label>
                        Ingredients of Recipe:
                    <div>
                            <input type="text" name="ingredients" />

                            {handleErrors(this.state.errors, 'ingredients')}

                        </div>
                    </label>
                    <button type="submit" disabled={this.state.isSubmiting}>Отправить</button>
                </form>
            </div>
        )
    };
}

export default AddRecipeForm;