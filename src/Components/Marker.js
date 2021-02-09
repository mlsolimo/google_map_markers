import React, { useState } from 'react';

import './Points.css';



const Marker = ({ place, places, text, setPlaces }) => {

    const deleteHandler = () => {
        setPlaces(places.filter(elem => elem.id !== place.id))
    };

    return (
        <div>
            <li>{text}</li>
            <button onClick={deleteHandler}>
                {/*<i className="fas fa-check"></i>*/}Delete
            </button>
        </div>
    );
};

export default Marker;