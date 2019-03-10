import React, { Component } from 'react';

import { connect } from "react-redux";
import { PropTypes } from 'prop-types';
import { changeMessage } from '../redux/actions';
import { displayMessage } from '../services';
import '../scss/index.scss';

class Message extends Component {

    
    toggleWindow = () => {
            const {dispatch} = this.props;
            dispatch(changeMessage(this.props.isMessageOpen));
       
    }

    render() {
        return (
            <div className={this.props.isMessageOpen ? 'modal' : 'modal_close'}>
              {this.props.isMessageOpen && displayMessage(this.props)}
              <button className="btnRecipes" onClick={this.toggleWindow}>Закрыть Окно</button>
            </div>

        )
    };
}

Message.propTypes = {

    isMessageOpen: PropTypes.bool,
    errors: PropTypes.object,
    isSuccess: PropTypes.bool,
    typeSuccess:PropTypes.string

}

const mapStateToProps = (state) => {
    return {
        isMessageOpen: state.isMessageOpen,
        errors: state.errors,
        isSuccess: state.isSuccess,
        typeSuccess:state.typeSuccess
    };
}

export default connect(mapStateToProps)(Message);
