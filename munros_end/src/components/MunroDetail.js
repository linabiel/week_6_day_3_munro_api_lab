import React from 'react';
import MunroContainer from '../containers/MunroContainer';

const MunroDetail = ({selectedMunro}) => {
  return (
      
      <div>
          <h3>{selectedMunro.name}</h3>
          <p>{selectedMunro.height}</p>
          <p>{selectedMunro.region}</p>
          <p>{selectedMunro.meaning}</p>
      </div>
  )
}

export default MunroDetail;