import React from 'react';
import './ListItem.css';

const ListItem = ({ munro, onMunroSelected }) => {

	const handleClick = function () {
		onMunroSelected(munro);
	}

	return (
		<>
			<option  value = { munro.index } onChange={handleClick}> { munro.name }</option>
		</>
	)

	// <li onClick={handleClick}>{munro.name}</li>
}


export default ListItem;
