// Button.test.js

import Recipe from "../components/App/App";
import React from "react";
import ReactDOM from "react-dom";

import { create, update } from "react-test-renderer";

it("renders without crashing", () => {
    let tree = create(<Recipe />);

    expect(tree.toJSON()).toMatchSnapshot();
});
