import React from "react";
import { Menu } from "semantic-ui-react";

const Header = () => (
    <Menu>
        <Menu.Item name="browse">
            <h1>Книга рецептов</h1>
        </Menu.Item>
        <Menu.Item position="right">Полезные рецпеты</Menu.Item>
    </Menu>
);

export default Header;
