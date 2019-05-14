import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/index';
import { generateColors } from '../../utility/generateColors';
import { Tooltip } from '@material-ui/core';

export class Header extends Component {
  constructor() {
    super()
    this.state = {
      color: ''
    }
  }

  handleGenerate = () => {
    const { currentPalette, setPalette } = this.props;
    const randomColors = generateColors(currentPalette)
    setPalette(randomColors);
  }

  saveButton = () => {
    const { modal, setModal } = this.props;
    setModal(modal)
  }

  render() {
    return (
      <div className='Header'>
        <div>
          <h2>Palette Picker</h2>
        </div>
        <div className='btnContainer'>
          <Tooltip title='Save Palette To Project'>
            <button onClick={this.saveButton}><i className='fas fa-save'></i></button>
          </Tooltip>
          <Tooltip title='Generate Colors!'>
            <button onClick={this.handleGenerate}><i className='fas fa-plus'></i></button>
          </Tooltip>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  currentPalette: state.currentPalette,
  modal: state.modalDisplay,
});

export const mapDispatchToProps = dispatch => ({
  setPalette: data => dispatch(actions.setPalette(data)),
  setModal: data => dispatch(actions.setModal(data)),
});

Header.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
