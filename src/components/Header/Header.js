import React from "react";
import { Menu, Button } from "semantic-ui-react";

/*TODO: Пока не доделал кнопку "Добавить рецепт " - отключил ее на время */

const Header = () => (
    <Menu>
        <Menu.Item name="browse">
            <h1>Книга рецептов</h1>
        </Menu.Item>

        <Menu.Item name="add-receipt" position="right">
            <Button color="green" disabled>
                Добавить рецепт
            </Button>
        </Menu.Item>

        <Menu.Item position="right">
            <h1>Полезные рецепты</h1>
        </Menu.Item>
    </Menu>
);

export default Header;
