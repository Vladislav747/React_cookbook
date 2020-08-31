import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

//css
import "semantic-ui-css/semantic.min.css";
import store from "redux/store";

//components
import { App } from "containers";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
