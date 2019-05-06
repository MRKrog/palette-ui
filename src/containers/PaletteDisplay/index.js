import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class PaletteDisplay extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render(){
    return (
      <div className="PaletteDisplay">
        <h1>Palette Display</h1>
      </div>
    )
  }
}


export const mapStateToProps = (state) => ({

})

export const mapDispatchToProps = (dispatch) => ({

})

PaletteDisplay.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PaletteDisplay);
