import React from "react";
import { Input, Menu } from "semantic-ui-react";

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => (
    <Menu secondary>
        <Menu.Item
            active={filterBy === "all"}
            onClick={setFilter.bind(this, "all")}
        >
            По умолчанию
        </Menu.Item>
        <Menu.Item
            active={filterBy === "author"}
            onClick={setFilter.bind(this, "author")}
        >
            Автор
        </Menu.Item>
        <Menu.Item>
            <Input
                icon="search"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
                placeholder="Введите запрос..."
            />
        </Menu.Item>
    </Menu>
);

export default Filter;
