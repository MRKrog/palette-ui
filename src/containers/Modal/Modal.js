import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  handleClose = () => {
    const { modalDisplay } = this.props;
    this.props.setModal(modalDisplay)
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('in submit');
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { currentPalette } = this.props;

    return (
      <div className="Modal">
        <div className="Modal-Content">
          <section className="Modal-Header">
            <button onClick={this.handleClose}>
              <i className="fas fa-window-close"></i>
            </button>
          </section>
          <section className="Modal-Body">
            <h2>Save Palette To Project</h2>
            <form onSubmit={() => this.handleSubmit()}>
              <input type="text" onChange={this.handleChange}
                                 value={this.state.name}
                                 name="name"
                                 placeholder="Palette To Save"
                     />
              <button>Save Palette</button>
            </form>
            <section className="Modal-Palette">
              {
                currentPalette.length &&
                currentPalette.map(palette => (
                  <div className="Modal-Color" style={{backgroundColor: palette.color}}>
                    &nbsp;
                  </div>
                ))
              }
            </section>
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
