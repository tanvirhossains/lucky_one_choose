import React from 'react';
import './Selection.css'

const Selection = ({ randomArray, random }) => {

    return (
        <div className='selection-container'>
            <h2>Selction option</h2>
            <p> one for you: {randomArray.name}</p>
            <button onClick={() => randomArray()} >choose any one</button>
        </div>
    );
};

export default Selection