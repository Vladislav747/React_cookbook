import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import { deleteDataIngredient } from "redux/actions";
import "./Recipe.scss";

class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.deleteRecipe = this.deleteRecipe.bind(this);
    }

    //Удалить рецепт
    deleteRecipe = () => {
        const { dispatch } = this.props;
        const { id } = this.props;
        dispatch(deleteDataIngredient(id));
    };

    render() {
        const { ingredients, title } = this.props;
        return (
            <div className="recipe">
                <div className="recipe-image">
                    <img
                        src="https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cucumber.jpg"
                        alt="Cucumber - 1 Kg"
                    ></img>
                </div>

                <div className="recipe-name">
                    <h2>{title}</h2>
                </div>
                <div className="recipe-description">
                    <p>
                        <span> Ingredients | {ingredients}</span>
                    </p>
                </div>
                <div className="recipe-action">
                    <button
                        className="btnDeleteRecipe"
                        type="button"
                        onClick={this.deleteRecipe}
                    >
                        УДАЛИТЬ РЕЦЕПТ
                    </button>
                </div>
            </div>
        );
    }
}

Recipe.propTypes = {
    ingredients: PropTypes.string,
    title: (props, propName) =>
        typeof props[propName] !== "string"
            ? new Error("A title must be a string")
            : props[propName].length > 40
            ? new Error(`title is over 20 characters`)
            : null,
};


// import React from 'react';
// import { Card, Image, Icon, Button } from 'semantic-ui-react';

// const BookCard = book => {
//   const { title, author, price, image, addToCart, addedCount } = book;
//   return (
//     <Card>
//       <div className="card-image">
//         <Image src={image} />
//       </div>
//       <Card.Content>
//         <Card.Header>{title}</Card.Header>
//         <Card.Meta>
//           <span className="date">{author}</span>
//         </Card.Meta>
//       </Card.Content>
//       <Card.Content extra>
//         <a>
//           <Icon name="rub" />
//           {price}
//         </a>
//       </Card.Content>
//       <Button onClick={addToCart.bind(this, book)}>
//         Добавить в корзину {addedCount > 0 && `(${addedCount})`}
//       </Button>
//     </Card>
//   );
// };

// export default BookCard;


export default connect()(Recipe);
