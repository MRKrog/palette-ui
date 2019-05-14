import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAllProjects } from '../../thunks/fetchAllProjects';
import { fetchDelete } from '../../thunks/fetchDelete';
import * as actions from '../../actions/index';

export class PaletteInfo extends Component {

  handleDelete = async (id) => {
    const { fetchDelete, fetchAllProjects } = this.props;
    const url = `http://localhost:3001/api/v1/palettes/${id}`;
    await fetchDelete(url);
    fetchAllProjects();
  }

  handleGenerate = () => {
    const { color_1, color_2, color_3, color_4, color_5, setPalette } = this.props;
    let palette = [
      { color: color_1, locked: true },
      { color: color_2, locked: true },
      { color: color_3, locked: true },
      { color: color_4, locked: true },
      { color: color_5, locked: true }
    ]
    setPalette(palette);
  }

  render() {
    const { name, id, color_1, color_2, color_3, color_4, color_5 } = this.props;

    return (
      <div className='PaletteInfo'>
        <h4>{name}</h4>
        <ul>
          <li style={{backgroundColor: color_1}}>&nbsp;</li>
          <li style={{backgroundColor: color_2}}>&nbsp;</li>
          <li style={{backgroundColor: color_3}}>&nbsp;</li>
          <li style={{backgroundColor: color_4}}>&nbsp;</li>
          <li style={{backgroundColor: color_5}}>&nbsp;</li>
        </ul>
        <section className='PaletteInfo-View'>
          <button className='ShowBtn' onClick={this.handleGenerate}>
            <i className='fas fa-eye'></i>
          </button>
        </section>
        <section className='PaletteInfo-Delete'>
          <button className='DeleteBtn' onClick={() => this.handleDelete(id)}>
            <i className='fas fa-trash-alt'></i>
          </button>
        </section>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  setPalette: data => dispatch(actions.setPalette(data)),
  fetchAllProjects: data => dispatch(fetchAllProjects(data)),
  fetchDelete: data => dispatch(fetchDelete(data)),
});

PaletteInfo.propTypes = {
  setPalette: PropTypes.func,
  fetchAllProjects: PropTypes.func,
  fetchDelete: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(PaletteInfo);
