import React from "react";
import { PropTypes } from "prop-types";
import { Card, Button, Image, Icon, Label } from "semantic-ui-react";

// import { deleteRecipe, addLike } from "redux/actions/detailRecipe";
import "./Recipe.css";

const Recipe = ({
    deleteRecipe,
    addLike,
    ingredients,
    title,
    author,
    image,
    likes,
    id,
}) => (
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
                    {ingredients.map((el, index) => (
                        <li key={index}>{el}</li>
                    ))}
                </ul>
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button
                className="btnDeleteRecipe"
                onClick={deleteRecipe.bind(this, id)}
                color="red"
            >
                УДАЛИТЬ РЕЦЕПТ
            </Button>
            <Button as="div" className="like-block" labelPosition="right">
                <Button color="orange" onClick={addLike.bind(this, id)}>
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

Recipe.propTypes = {
    ingredients: PropTypes.array,
    title: (props, propName) =>
        typeof props[propName] !== "string"
            ? new Error("A title must be a string")
            : props[propName].length > 40
            ? new Error(`title is over 40 characters`)
            : null,
};

export default Recipe;
