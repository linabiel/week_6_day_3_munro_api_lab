import React from 'react';

const MunroSelector = ({munros, onMunroSelected}) => {

    const handleChange = function(event) {
        const chosenMunro = munros[event.target.value];
        onMunroSelected(chosenMunro);
    }
    
    const munroOptions = munros.map((munro, index) => {
      return <option value={index} key={index}>{munro.name}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Munro</option>
            {munroOptions}
        </select>
    )
}

export default MunroSelector;