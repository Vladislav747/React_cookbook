import React, { Component } from 'react';
import Recipe from './Recipe';
import { connect } from "react-redux";
import { PropTypes } from 'prop-types';
import '../scss/Recipes.css';

import { fetchDataIngredient } from '../redux/actions';

class Recipes extends Component {


    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchDataIngredient());
    }

    render() {

        // Empty and Loading States
        let view;
        if (this.props.dataIngredient.length <= 0 && this.props.isLoading) {
            view = <p>Loading</p>;
        } else {
            view = this.props.dataIngredient
                .map((item, i) => {
                    return (
                        <Recipe key={item.idRecipe} id={item._id.$oid} title={item.titleRecipe} ingredients={item.ingredients} />
                    );
                });;
        };
        
        return (<div className="recipes">{view}</div>);

    }

}

Recipes.propTypes = {

    dataIngredient: PropTypes.array,
    isLoading: PropTypes.bool
}

const mapStateToProps = (state) => {
    return {
        dataIngredient: state.dataIngredient,
        isLoading: state.isLoading
    };
}

export default connect(mapStateToProps)(Recipes);