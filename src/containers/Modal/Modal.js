import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class Modal extends Component {

  handleClose = () => {
    const { modalDisplay } = this.props;
    this.props.setModal(modalDisplay)
  };

  render() {


    return (
      <div className="Modal">
        <div className="Modal-Content">
          <section className="Modal-Header">
            <button onClick={this.handleClose}>
              Close
            </button>
          </section>
          <section className="Modal-Body">
            <h1>Save Project</h1>
            <p>Palette To Save</p>
          </section>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  currentPalette: state.currentPalette,
  modalDisplay: state.modalDisplay,
})

export const mapDispatchToProps = (dispatch) => ({
  setModal: (data) => dispatch(actions.setModal(data)),
})

Modal.propTypes = {
  currentPalette: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
