
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
        // const { dispatch, dataIngredient} = this.props
        // dispatch(fetchDataIngredient())
      }


    render() {

        const recipesData =
            this.props.dataIngredient
                .map((item, i) => {
                    return (
                        <Recipe id={i} title={item.titleRecipe} ingredients={item.ingredients} />
                    );
                });

        // Empty and Loading States
        let view;
        if (recipesData.length <= 0) {
            view = <p>Loading</p>;
        } else {
            view = recipesData;
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












//Recipes как функция а не как класс
// const Recipes = () => {
//     store.dispatch(getDataIngredient());
//     // const { dataIngredient } = store.getState();
//     store.subscribe(() => console.log("Обновилось",store.getState()));

//     return (
//         <div className="recipes">
//             {this.props.dataIngredient
//                 .map((item, i) =>
//                     <Recipe id={i} title={item.titleRecipe} ingredients={item.ingredients} />
//                 )
//             }
//         </div>
//     )
// }