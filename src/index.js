import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

//css
import "./scss/index.scss";
import store from "./redux/store";

//components
import App from "../src/containers/App";
import { AddRecipeForm } from "./components";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route component={App} />>
            <Route path="/addrecipeform" component={AddRecipeForm} />
        </Router>
    </Provider>,
    document.getElementById("root")
);
