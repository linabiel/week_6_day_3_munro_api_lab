import React, { useState, useEffect } from 'react';
import MunroList from '../components/MunroList';
import MunroDetail from '../components/MunroDetail';
import MunroSelect from '../components/MunroSelect';
import './MunroContainer.css';

const MunroContainer = () => {
    const [munros, setMunros] = useState([]);
    const [selectedMunro, setSelectedMunro] = useState(null);

    useEffect(() => {
        getMunros();
    }, [])

    const getMunros = function () {
        fetch('https://munroapi.herokuapp.com/munros')
            .then(response => response.json())
            .then(munros => setMunros(munros))
    }

    const onMunroClick = function (munro) {
        setSelectedMunro(munro)
    }

    const onMunroSelected = function (munro) {
        setSelectedMunro(munro)
    }



    return (
        <div className="main-container">
            {/* <MunroList munros={munros} onMunroClick={onMunroClick} />
            {selectedMunro ? <MunroDetail munro={selectedMunro} /> : null} */}
            <MunroSelect munros={munros} onMunroSelected={onMunroSelected} />
        </div>
    )
}

export default MunroContainer;
