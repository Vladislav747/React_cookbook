import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    setFilterAction,
    setSearchQueryAction,
} from "../../redux/actions/filter";
import { Filter } from "../../components";

const mapStateToProps = ({ filter }) => ({
    filterBy: filter.filterBy,
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(
        { setFilter: setFilterAction, setSearchQuery: setSearchQueryAction },
        dispatch
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
