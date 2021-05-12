import React from 'react';
import ListItem from './ListItem';

const MunroList = ({munros, onMunroClick}) => {

    const munrosItems = munros.map((munro, index) => {
      return <ListItem munro={munro} key={index} onMunroClick={onMunroClick} />
    })

  return (
    <div>
    <ul>
      {munrosItems}
    </ul>
  </div>
  )
}

export default MunroList;