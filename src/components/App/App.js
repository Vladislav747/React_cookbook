import React, { Component } from "react";
import axios from 'axios';
import { Card, Container } from 'semantic-ui-react';

//scss
import "css/index.css";
import "./App.css";

//components
import {Header, Filter, Recipes} from "components";
import {Recipe} from "containers";

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { setRecipes } = this.props;
        console.log("checkmount");
        axios.get('/recipes.json').then(({ data }) => {
            console.log(data,'data');
            setRecipes(data);
           
        }).catch((e) => {throw new Error(e + 'Получение данных из json файла')});
      }

    render() {
        const { recipes, isReady } = this.props;
        return (
            <Container>
                <Header />
                <Filter />
                {/* <Recipes /> */}
                <Card.Group itemsPerRow={4}>
                    {!isReady
                        ? 'Загрузка...'
                        : recipes.map((book, i) => <Recipe key={i} {...book} />)}
                </Card.Group>
            </Container>
        );
    }
}

export default App;
