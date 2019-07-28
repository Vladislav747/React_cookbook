import React, { Component } from 'react';
import { connect } from "react-redux";

//scss
import '../scss/index.scss';

//components

import { PropTypes } from 'prop-types';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";





class Header extends Component {

    constructor(props) {
        super(props)
        this.toggleForm = this.toggleForm.bind(this);
    }

    //Открыть или скрыть форму
    toggleForm = () => {
        const {dispatch} = this.props;
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