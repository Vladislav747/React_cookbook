import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as booksActions from 'redux/actions/books';
import {App} from 'components';
import orderBy from 'lodash/orderBy';
import recipes from 'redux/reducers/recipes';

const sortBy = (books, filterBy) => {
  switch (filterBy) {
    case 'price_high':
      return orderBy(books, 'price', 'desc');
    case 'price_low':
      return orderBy(books, 'price', 'asc');
    case 'author':
      return orderBy(books, 'author', 'asc');
    default:
      return books;
  }
};

const filterBooks = (books, searchQuery) =>
  books.filter(
    o =>
      o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
  );

const searchBooks = (books, filterBy, searchQuery) => {
  return sortBy(filterBooks(books, searchQuery), filterBy);
};

const mapStateToProps = ({ recipes, filter }) => ({
  
  recipes: recipes.items && searchBooks(recipes.items, filter.filterBy, filter.searchQuery),
  isReady: recipes.isReady,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(booksActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
