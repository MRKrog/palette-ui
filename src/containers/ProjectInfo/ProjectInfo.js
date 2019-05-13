import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PaletteInfo from '../PaletteInfo/PaletteInfo';
import { fetchAllProjects } from '../../thunks/fetchAllProjects';
import { fetchDelete } from '../../thunks/fetchDelete';
import * as actions from '../../actions/index';

export class ProjectInfo extends Component {

  handleDelete = async (id) => {
    const url = `http://localhost:3001/api/v1/projects/${id}`;
    await this.props.fetchDelete(url);
    this.props.fetchAllProjects();
  }

  render() {
    const { name, id, palettes } = this.props;
    return (
      <div className="ProjectInfo">
        <section className="Project-Info-Header">
          <h3>{name}</h3>
          <button className="DeleteBtn" onClick={() => this.handleDelete(id)}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </section>
        {
          palettes.length >= 1 ?
          palettes.map((palette, index) => {
            return <PaletteInfo key={palette.name} {...palette} id={palette.id}/>
          })
          :
          <p>Insert In Some Palettes</p>
        }
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchAllProjects: (data) => dispatch(fetchAllProjects(data)),
  fetchDelete: (data) => dispatch(fetchDelete(data)),
})

ProjectInfo.propTypes = {
  allProjects: PropTypes.array,
  fetchAllProjects: PropTypes.func,
  fetchDelete: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(ProjectInfo);
