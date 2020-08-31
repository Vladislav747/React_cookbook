import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setFilter, setSearchQuery } from "redux/actions/filter";
import { Filter } from "components";

const mapStateToProps = ({ filter }) => ({
    filterBy: filter.filterBy,
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(
        { setFilter: setFilter, setSearchQuery: setSearchQuery },
        dispatch
    ),
});

console.log(mapStateToProps, "mapStateToProps");
console.log(mapDispatchToProps, "mapDispatchToProps");
console.log(setFilter, "filterActions");

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
