import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filterActions from 'redux/actions/filter';
import {Filter} from 'components';

const mapStateToProps = ({ filter }) => ({
  filterBy: filter.filterBy,
});

 const setFilter = filter => ({
  type: 'SET_FILTER',
  payload: filter,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(setFilter, dispatch),
});

console.log(mapStateToProps, 'mapStateToProps');
console.log(mapDispatchToProps, 'mapDispatchToProps');
console.log(filterActions, 'filterActions');

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter);
