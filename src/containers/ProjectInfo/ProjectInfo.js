import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PaletteInfo from '../PaletteInfo/PaletteInfo';

import * as actions from '../../actions/index';

export class ProjectInfo extends Component {

  render() {
    const { name, id, palettes } = this.props;

    return (
      <div className="ProjectInfo">
        <h2>{name}</h2>
        {
          palettes.length &&
          palettes.map((palette, index) => {
            return <PaletteInfo key={palette.name} {...palette} id={palette.id}/>
          })
        }
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

ProjectInfo.propTypes = {
  currentPalette: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectInfo);
