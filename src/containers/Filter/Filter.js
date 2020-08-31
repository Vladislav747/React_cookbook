import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as filterActions from "redux/actions/filter";
import { Filter } from "components";

const mapStateToProps = ({ filter }) => ({
    filterBy: filter.filterBy,
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(filterActions.setFilter, dispatch),
});

console.log(mapStateToProps, "mapStateToProps");
console.log(mapDispatchToProps, "mapDispatchToProps");
console.log(filterActions, "filterActions");

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
