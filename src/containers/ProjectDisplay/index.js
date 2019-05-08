import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class ProjectDisplay extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render(){
    return (
      <div className="ProjectDisplay">
        <h1>Project Display</h1>
      </div>
    )
  }
}


export const mapStateToProps = (state) => ({

})

export const mapDispatchToProps = (dispatch) => ({

})

ProjectDisplay.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDisplay);
