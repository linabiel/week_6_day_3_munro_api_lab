import React from "react";
import ListItem from './ListItem';

const MunroSelect = ({munros, onMunroSelected }) => {

    const handleChange = function(event) {
        const chosenMunro = munros[event.target.value];
        onMunroSelected(chosenMunro);
    }

    const munrosItems = munros.map((munro, index) => {
        return <ListItem munro={munro} key={index} onChange={onMunroSelected} />;
    })

    const newLocal = <option value={munros.index}> {munros}</option>;
    return (
        <div>
            <select name="munro" id="munro" value={munros.index} onChange={handleChange}> 
                {munrosItems}
            </select>
        </div>
    )

}
// 
export default MunroSelect;
