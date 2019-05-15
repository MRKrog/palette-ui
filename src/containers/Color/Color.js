import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../actions';

import lockIcon from '../../media/icons/lock-alt-solid.svg';
import unlockIcon from '../../media/icons/unlock-alt-solid.svg';

export class Color extends Component {

  handleLock = id => {
    const { setLock } = this.props;
    setLock(id);
  }

  render(){
    let { color, id, locked } = this.props;
    let lockStatus = locked ? lockIcon : unlockIcon;

    return (
      <div className='Color' style={{ backgroundColor: this.props.color }}>
        <div className='LockBtn'>
          <button className='handleLockClick' onClick={() => this.handleLock(id)}>
            <img src={lockStatus} className='Lock' alt={color} />
          </button>
        </div>
        <div className='ColorCode'>
          <h3>{color}</h3>
        </div>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  setLock: data => dispatch(actions.setLock(data)),
});

Color.propTypes = {
  setLock: PropTypes.func
}

export default connect(null, mapDispatchToProps)(Color);
