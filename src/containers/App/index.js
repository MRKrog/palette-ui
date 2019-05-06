import React, { Component } from 'react';
import logo from '../../media/logo.svg';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, NavLink } from 'react-router-dom';

import { Loading } from '../../components/Loading';

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

  getData = async () => {
    console.log('in get method');
  }


  render(){

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
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
