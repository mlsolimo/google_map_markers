import React, { useState } from 'react';
import {
    GoogleMap,
    InfoWindow,
    Marker,
    useLoadScript,
} from '@react-google-maps/api';


const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
};

const libraries = ["places"];

const center = {
        lat: -34.603683,
        lng: -58.381557,
    };

const Map = (places) => {
    /*Carga el mapa desde React
    --------------------------------------------------------------------
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    

    if (loadError)
        return "Error loading the map";

    if (!isLoaded)
        return "Loading map";
    */
    
    console.log("Desde Map");
    console.log(places);
    return (
        <div>
        {console.log("Desde Map")}
        {console.log(places.places)}
        {places.places === undefined ? 
                <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={{lat: -34.6036844, lng: -58.3815591}} /> 
            : 
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={12}
                center={{lat: -34.6036844, lng: -58.3815591}}>
                {places.places.map(place => (<Marker key={place.id} position={{lat: place.lat, lng: place.lng}}/>))}
            </GoogleMap>
        }
        </div>
    );
}

export default Map; 
