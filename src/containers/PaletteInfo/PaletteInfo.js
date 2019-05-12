import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchAllProjects } from '../../thunks/fetchAllProjects';
import { fetchOptions } from '../../utility/fetchOptions';
import { fetchData } from '../../utility/fetchData';

import * as actions from '../../actions/index';

export class PaletteInfo extends Component {

  handleDelete = async (id) => {
    const options = await fetchOptions('DELETE', {});
    await fetchData(`http://localhost:3001/api/v1/palettes/${id}`, options)
    this.props.fetchAllProjects();
  }

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
        <section className="PaletteInfo-Delete">
          <button className="DeleteBtn" onClick={() => this.handleDelete(id)}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </section>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  allProjects: state.allProjects,
})

export const mapDispatchToProps = (dispatch) => ({
  setPalette: (data) => dispatch(actions.setPalette(data)),
  fetchAllProjects: (data) => dispatch(fetchAllProjects(data)),
})

PaletteInfo.propTypes = {
  currentPalette: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(PaletteInfo);
