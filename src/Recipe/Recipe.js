import React from 'react';
import { PropTypes } from 'prop-types';
export default class Recipe extends React.Component {

        
    render() {
        const { ingredients, title } = this.props;
        return (
            <div className="summary">
                <h1>{title}</h1>
                <p>
                    <span>{ingredients} Ingredients | </span>
                </p>
            </div>
        )
    }
}

Recipe.propTypes = {
    ingredients: PropTypes.number,
    title: (props, propName) =>
        (typeof props[propName] !== 'string') ?
            new Error("A title must be a string") :
            (props[propName].length > 20) ?
                new Error(`title is over 20 characters`) :
                null
}
Recipe.defaultProps = {
    ingredients: 0,
    title: "[recipe]"
}