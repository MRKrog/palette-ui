import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../actions/index';

import lockIcon from '../../media/icons/lock-alt-solid.svg';
import unlockIcon from '../../media/icons/unlock-alt-solid.svg';

export class Color extends Component {

  handleLock = () => {
    this.props.setLock(['1'])
  }

  render(){
    let { color } = this.props
    let lockStatus = 2 < 1 ? lockIcon : unlockIcon

    return (
      <div className="Color" style={{backgroundColor: this.props.color}}>
        <div className="LockBtn">
          <button onClick={() => this.handleLock()}>
            <img src={lockStatus} className="Lock" alt={color} />
          </button>
        </div>
        <div className="ColorCode">
          <h3>{color}</h3>
        </div>
      </div>
    )
  }
}


export const mapStateToProps = (state) => ({

})

export const mapDispatchToProps = (dispatch) => ({
  setLock: (data) => dispatch(actions.setLock(data)),
})

Color.propTypes = {
  setLock: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Color);
