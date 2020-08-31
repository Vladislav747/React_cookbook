import React, { Component } from "react";
import axios from "axios";
import { Card, Container } from "semantic-ui-react";

//scss
import "css/index.css";
import "./App.css";

//components
import { Header, Loader } from "components";
import { Recipe, Filter } from "containers";

class App extends Component {
    componentWillMount() {
        const { setRecipes } = this.props;
        axios
            .get("/recipes.json")
            .then(({ data }) => {
                console.log(data, "data");
                setRecipes(data);
            })
            .catch((e) => {
                throw new Error(e + "Получение данных из json файла");
            });
    }

    render() {
        const { recipes, isReady } = this.props;
        return (
            <Container>
                <Header />
                <Filter />
                {/* <Recipes /> */}
                <Card.Group itemsPerRow={4}>
                    {!isReady ? (
                        <Loader />
                    ) : (
                        recipes.map((recipe, i) => (
                            <Recipe key={i} {...recipe} />
                        ))
                    )}
                </Card.Group>
            </Container>
        );
    }
}

export default App;
