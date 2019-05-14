import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import PaletteDisplay from '../PaletteDisplay';
import ProjectDisplay from '../ProjectDisplay';
import Modal from '../Modal/Modal';

import * as actions from '../../actions/index';

import { fetchAllProjects } from '../../thunks/fetchAllProjects';
import { generateColors } from '../../utility/generateColors';

export class App extends Component {
  constructor(){
    super();
    this.state = {
      colorPalette: [
        { color: '', locked: '' },
        { color: '', locked: '' },
        { color: '', locked: '' },
        { color: '', locked: '' },
        { color: '', locked: '' }
      ]
    }
  }

  componentDidMount() {
    this.generatePalette();
    this.props.fetchAllProjects()
  }

  generatePalette = () => {
    const { setPalette } = this.props;
    const { colorPalette } = this.state;
    const randomColors = generateColors(colorPalette);
    setPalette(randomColors);
  }

  render(){
    return (
      <div className='App'>
        <Header />
        <PaletteDisplay />
        <ProjectDisplay />
        {
          this.props.modalDisplay &&
          <Modal />
        }
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  modalDisplay: state.modalDisplay,
});

export const mapDispatchToProps = dispatch => ({
  setPalette: data => dispatch(actions.setPalette(data)),
  fetchAllProjects: data => dispatch(fetchAllProjects(data)),
});

App.propTypes = {
  modalDisplay: PropTypes.bool,
  setPalette: PropTypes.func,
  fetchAllProjects: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
