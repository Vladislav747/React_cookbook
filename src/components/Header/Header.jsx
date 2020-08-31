import React from "react";
import { Menu, Popup, List, Button, Image } from "semantic-ui-react";

import "./Header.scss";

const Header = () => (
    <Menu>
      <Menu.Item name="browse"><h1>Книга рецептов</h1></Menu.Item>
  
      <Menu.Menu position="right">
          Полезные рецпеты
      </Menu.Menu>
    </Menu>
  );

export default Header;