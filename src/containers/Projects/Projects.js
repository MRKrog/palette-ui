import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/index';
import { generateColors } from '../../utility/generateColors';

export class Projects extends Component {

  render() {
    return (
      <div className="Projects">
        <div>
          <h2>Palette Picker</h2>
        </div>
        <div>
          <button>Generate</button>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  currentPalette: state.currentPalette
})

export const mapDispatchToProps = (dispatch) => ({
  setPalette: (data) => dispatch(actions.setPalette(data)),
})

Projects.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
