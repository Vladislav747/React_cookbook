import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    addLikeAction,
    deleteRecipeAction,
} from "../../redux/actions/recipes.js";
import { Recipe } from "../../components";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(
        { addLike: addLikeAction, deleteRecipe: deleteRecipeAction },
        dispatch
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
