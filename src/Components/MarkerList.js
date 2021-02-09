import React from 'react';

//components
import Marker from './Marker';

const MarkerList = ({places, setPlaces}) => {

    return(
        <div>
            <ul>
                {places === undefined ? null : places.map(place =>(
                    <Marker key={place.id}
                    text={place.address}
                    place={place}
                    places={places}
                    setPlaces={setPlaces} />
                ))}
            </ul>
        </div>
           )


}

export default MarkerList;