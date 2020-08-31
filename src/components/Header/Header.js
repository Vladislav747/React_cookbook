import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { PropTypes } from "prop-types";

import "scss/index.scss";
import "./Header.scss";

import { changeForm } from "redux/actions";

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleForm = this.toggleForm.bind(this);
    }

    //Открыть или скрыть форму
    toggleForm = () => {
        const { dispatch } = this.props;
        dispatch(changeForm(this.props.isFormOpen));
    };

    render() {
        return (
            <header>
                <h1>Книга Рецептов</h1>

                <Link to="/addrecipeform">
                    <button className="btnRecipes">Добавить Рецепт</button>
                </Link>
            </header>
        );
    }
}

export default connect()(Header);
