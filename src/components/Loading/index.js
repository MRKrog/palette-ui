import React from 'react';
import loadingImage from '../../media/logo.svg';

const Loading = () => {
  return (
    <div className="Loading">
      <img src={loadingImage} className="Loading-logo" alt="loading" />
    </div>
  )
}

export default Loading
