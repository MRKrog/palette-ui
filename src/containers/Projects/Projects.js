import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import * as actions from '../../actions';
import { fetchAllProjects } from '../../thunks/fetchAllProjects';
import { fetchOptions } from '../../utility/fetchOptions';
import { fetchData } from '../../utility/fetchData';

export class Projects extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  handleSendProject = async event => {
    console.log('in handlesend');
    event.preventDefault();
    const { fetchAllProjects } = this.props;
    const options = await fetchOptions('POST', this.state);
    await fetchData(process.env.REACT_APP_BACKEND_URL + '/api/v1/projects', options);
    fetchAllProjects();
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { allProjects } = this.props;

    return (
      <div className='Projects'>
        <div className='Create-Project-Container'>
          <h2>Project Information</h2>
          <section className='Create-Info'>
            <form className='Form-Send' onSubmit={this.handleSendProject}>
              <input type='text' onChange={this.handleChange}
                                 value={this.state.name}
                                 name='name'
                                 placeholder='Create A New Project'
                                 required
              />
              <button>Save Project</button>
            </form>
          </section>
        </div>
        <div className='Current-Projects'>
          {
            allProjects.length &&
            allProjects.map(project => {
              return <ProjectInfo key={project.name} {...project} palettes={project.palettes} id={project.id}/>
            })
          }
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  allProjects: state.allProjects,
});

export const mapDispatchToProps = dispatch => ({
  setPalette: data => dispatch(actions.setPalette(data)),
  fetchAllProjects: data => dispatch(fetchAllProjects(data)),
});

Projects.propTypes = {
  allProjects: PropTypes.array,
  setPalette: PropTypes.func,
  fetchAllProjects: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
