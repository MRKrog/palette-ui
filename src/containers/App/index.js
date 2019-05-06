import React, { Component } from 'react';
import logo from '../../media/logo.svg';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, NavLink } from 'react-router-dom';

import { Loading } from '../../components/Loading';
import { PaletteDisplay } from '../../containers/PaletteDisplay';

import * as actions from '../../actions/index';

import { fetchPalettes } from '../../utility/fetchPalettes';

export class App extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    // this.props.setLoading(false)
    // try {
    //   const response = await fetch(`http://localhost:3001/api/v1/weather`)
    //   if(!response.ok) { throw new Error('Fetch Call Cannot Be Made')}
    //   const data = await response.json()
    //
    // } catch (error) {
    //   this.props.setError('Fetch Call Cannont')
    // }
  }


  render(){
    const { loading } = this.props;

    return (
      <div className="App">
        <div className="screen">
        {
          loading ?
          <Loading /> :
          <PaletteDisplay />
        }
        </div>
      </div>
    )
  }
}


export const mapStateToProps = (state) => ({
  error: state.error,
  loading: state.loading
})

export const mapDispatchToProps = (dispatch) => ({
  setError: (data) => dispatch(actions.setError(data)),
  setLoading: (data) => dispatch(actions.setLoading(data)),
})

App.propTypes = {
  data: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
