import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/index';
import { generateColors } from '../../utility/generateColors';

export class Header extends Component {

  handleGenerate = () => {
    const { currentPalette, setPalette } = this.props;
    const randomColors = generateColors(currentPalette)
    setPalette(randomColors);
  }

  render() {
    return (
      <div className="Header">
        <div>
          <h2>Palette Picker</h2>
        </div>
        <div>
          <button onClick={this.handleGenerate}>Generate</button>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  currentPalette: state.currentPalette
})

export const mapDispatchToProps = (dispatch) => ({
  setPalette: (data) => dispatch(actions.setPalette(data)),
})

Header.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
