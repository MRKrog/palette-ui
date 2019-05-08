import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import { Loading } from '../../components/Loading';
import Color from '../Color'

export class PaletteDisplay extends Component {

  render(){
    const { currentPalette } = this.props;

    return (
      <div className="PaletteDisplay">
        {
          currentPalette.length &&
          currentPalette.map((color, index) => {
            return <Color key={color.color} {...color} id={index}/>
          })
        }
      </div>
    )
  }
}


export const mapStateToProps = (state) => ({
  currentPalette: state.currentPalette
})

export const mapDispatchToProps = (dispatch) => ({

})

PaletteDisplay.propTypes = {
  currentPalette: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(PaletteDisplay);
