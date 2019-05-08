import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import { Loading } from '../../components/Loading';
import Header from '..//Header';
import PaletteDisplay from '../PaletteDisplay';
// import { ProjectDisplay } from '../ProjectDisplay';

import * as actions from '../../actions/index';

// import { fetchPalettes } from '../../utility/fetchPalettes';
import { generateColors } from '../../utility/generateColors';



export class App extends Component {
  constructor(){
    super();
    this.state = {
      colorPalette: [
        { color: '', locked: false },
        { color: '', locked: false },
        { color: '', locked: false },
        { color: '', locked: false },
        { color: '', locked: false }
      ]
    }
  }

  componentDidMount() {
    this.setPalette()
  }

  setPalette = () => {
    const { colorPalette } = this.state;
    const randomColors = generateColors(colorPalette)
    this.props.setPalette(randomColors)
    this.props.changeLoading(true)
  }

  render(){

    return (
      <div className="App">
        <Header />
        <PaletteDisplay />
      </div>
    )
  }
}


export const mapStateToProps = (state) => ({
  error: state.error,
  loading: state.loading,
  currentPalette: state.currentPalette
})

export const mapDispatchToProps = (dispatch) => ({
  setError: (data) => dispatch(actions.setError(data)),
  changeLoading: (data) => dispatch(actions.setLoading(data)),
  setPalette: (data) => dispatch(actions.setPalette(data)),
})

App.propTypes = {
  data: PropTypes.array,
}

export default connect(null, mapDispatchToProps)(App);
