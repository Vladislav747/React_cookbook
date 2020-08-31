import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Card, Button, Image, Icon, Label } from "semantic-ui-react";

import { deleteDataIngredient, addLike } from "redux/actions/detailRecipe";
import "./Recipe.css";

class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.deleteRecipe = this.deleteRecipe.bind(this);
        this.addLike = this.addLike.bind(this);
    }

    //Удалить рецепт
    deleteRecipe = () => {
        const { dispatch, id } = this.props;
        dispatch(deleteDataIngredient(id));
    };

    //Удалить рецепт
    addLike = () => {
        const { dispatch, id } = this.props;
        dispatch(addLike(id));
    };

    render() {
        const { ingredients, title, author, image, likes } = this.props;
        return (
            <Card>
                <Image src={image} wrapped ui={false} alt="Фото рецепта" />
                <Card.Content>
                    <Card.Header>
                        <h2>{title}</h2>
                    </Card.Header>
                    <Card.Meta>
                        <span className="date">{author}</span>
                    </Card.Meta>
                    <Card.Description>
                        <h5>Ингредиенты</h5>
                        <ul>
                            {ingredients.map((el) => (
                                <li>{el}</li>
                            ))}
                        </ul>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button
                        className="btnDeleteRecipe"
                        onClick={this.deleteRecipe}
                        color="red"
                    >
                        УДАЛИТЬ РЕЦЕПТ
                    </Button>
                    <Button
                        as="div"
                        className="like-block"
                        labelPosition="right"
                    >
                        <Button color="orange">
                            <Icon name="heart" />
                            Like
                        </Button>
                        <Label as="a" basic color="orange" pointing="left">
                            {likes}
                        </Label>
                    </Button>
                </Card.Content>
            </Card>
        );
    }
}

Recipe.propTypes = {
    ingredients: PropTypes.array,
    title: (props, propName) =>
        typeof props[propName] !== "string"
            ? new Error("A title must be a string")
            : props[propName].length > 40
            ? new Error(`title is over 40 characters`)
            : null,
};

export default connect()(Recipe);
