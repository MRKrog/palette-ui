import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import { Loading } from '../../components/Loading';
import Header from '../Header/Header';
import PaletteDisplay from '../PaletteDisplay';
import Button from '@material-ui/core/Button';
import ProjectDisplay from '../ProjectDisplay';
import Modal from '../Modal/Modal';

import * as actions from '../../actions/index';

import { fetchPalettes } from '../../utility/fetchPalettes';
import { generateColors } from '../../utility/generateColors';



export class App extends Component {
  constructor(){
    super();
    this.state = {
      colorPalette: [
        { color: '#ffffff', locked: false },
        { color: '#ffffff', locked: true },
        { color: '#ffffff', locked: false },
        { color: '#ffffff', locked: false },
        { color: '#ffffff', locked: false }
      ],
      project: []
    }
  }

  componentDidMount() {
    this.setPalette();
    this.fetchTest();
  }

  fetchTest = async () => {
    // Test Backend Call Working
    const response = await fetchPalettes('http://localhost:3001/api/v1/projects/8')
    console.log(response);
    this.setState({ project: response })
    this.props.setLoading(false)
  }

  setPalette = () => {
    const { colorPalette } = this.state;
    const randomColors = generateColors(colorPalette)
    this.props.setPalette(randomColors)
  }

  render(){

    return (
      <div className="App">
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


export const mapStateToProps = (state) => ({
  error: state.error,
  loading: state.loading,
  currentPalette: state.currentPalette,
  modalDisplay: state.modalDisplay,
})

export const mapDispatchToProps = (dispatch) => ({
  setError: (data) => dispatch(actions.setError(data)),
  setLoading: (data) => dispatch(actions.setLoading(data)),
  setPalette: (data) => dispatch(actions.setPalette(data)),
  setModal: (data) => dispatch(actions.setModal(data)),
})

App.propTypes = {
  data: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
