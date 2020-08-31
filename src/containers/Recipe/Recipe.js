import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import * as  from 'redux/actions/cart';
import { Recipe } from "components";

const mapStateToProps = ({ cart }, { id }) => ({
    addedCount: cart.items.reduce(
        (count, book) => count + (book.id === id ? 1 : 0),
        0
    ),
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
