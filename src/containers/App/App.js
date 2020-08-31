import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setRecipes } from "redux/actions/recipes";
import { App } from "components";
import orderBy from "lodash/orderBy";

const sortBy = (recipes, filterBy) => {
    switch (filterBy) {
        case "price_high":
            return orderBy(recipes, "price", "desc");
        case "price_low":
            return orderBy(recipes, "price", "asc");
        case "author":
            return orderBy(recipes, "author", "asc");
        default:
            return recipes;
    }
};

const filterRecipes = (recipes, searchQuery) => console.log(recipes);
recipes.filter(
    (o) =>
        o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
        o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
);

const searchRecipes = (recipes, filterBy, searchQuery) => {
    return sortBy(filterRecipes(recipes, searchQuery), filterBy);
};

const mapStateToProps = ({ recipes, filter }) => ({
    recipes:
        recipes.items &&
        searchRecipes(recipes.items, filter.filterBy, filter.searchQuery),
    isReady: recipes.isReady,
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ setRecipes: setRecipes }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
