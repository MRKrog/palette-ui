import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ProjectInfo from '../ProjectInfo/ProjectInfo';

import * as actions from '../../actions/index';

export class Projects extends Component {
  constructor() {
    super()
    this.state = {
      newProject: ''
    }
  }

  render() {
    const { allProjects } = this.props;

    return (
      <div className="Projects">

        <div className="Create-Project-Container">
          <h2>Create A New Project</h2>
          <form>
            <input type="text" name="newProject" />
            <button>Save Project</button>
          </form>
        </div>
        <div className="Current-Projects">
          {
            allProjects.length &&
            allProjects.map((project, index) => {
              return <ProjectInfo key={project.name} {...project} palettes={project.palettes} id={project.id}/>
            })
          }
        </div>

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

Projects.propTypes = {
  currentPalette: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
