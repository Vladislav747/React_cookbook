import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import { Recipe, Loader } from "components";

import { fetchDataIngredient } from "redux/actions/detailRecipe";

class Recipes extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchDataIngredient());
    }

    render() {
        const { dataIngredient } = this.props;
        // Empty and Loading States

        if (dataIngredient.length === 0) {
            return <Loader />;
        } else {
            return (
                <div className="recipes-wrapper">
                    <div className="recipes">
                        {this.props.dataIngredient.map((item, i) => {
                            return (
                                <Recipe
                                    key={item.idRecipe}
                                    id={item._id.$oid}
                                    title={item.titleRecipe}
                                    ingredients={item.ingredients}
                                />
                            );
                        })}
                    </div>
                </div>
            );
        }
    }
}

Recipes.propTypes = {
    dataIngredient: PropTypes.array,
    isLoading: PropTypes.bool,
};

const mapStateToProps = (state) => {
    console.log(state, "Recipes");
    return {
        dataIngredient: state.dataIngredient,
        isLoading: state.isLoading,
    };
};

export default connect(mapStateToProps)(Recipes);
