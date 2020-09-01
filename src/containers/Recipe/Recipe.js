import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addLike, deleteRecipe } from "../../redux/actions/recipes.js";
import { Recipe } from "../../components";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(
        { addLike: addLike, deleteRecipe: deleteRecipe },
        dispatch
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
