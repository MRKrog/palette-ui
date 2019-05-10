import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../actions/index';

export class PaletteInfo extends Component {

  render() {
    const { name, id, color_1, color_2, color_3, color_4, color_5 } = this.props;

    return (
      <div className="PaletteInfo">
        <h4>{name}</h4>
        <ul>
          <li style={{backgroundColor: color_1}}>&nbsp;</li>
          <li style={{backgroundColor: color_2}}>&nbsp;</li>
          <li style={{backgroundColor: color_3}}>&nbsp;</li>
          <li style={{backgroundColor: color_4}}>&nbsp;</li>
          <li style={{backgroundColor: color_5}}>&nbsp;</li>
        </ul>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  currentPalette: state.currentPalette,
  allProjects: state.allProjects,
})

export const mapDispatchToProps = (dispatch) => ({
  setPalette: (data) => dispatch(actions.setPalette(data)),
})

PaletteInfo.propTypes = {
  currentPalette: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(PaletteInfo);
