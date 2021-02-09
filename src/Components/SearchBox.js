import { useState } from 'react';
import PlacesAutomplete, {
    geocodeByAddress,
    getLatLng
} from 'react-places-autocomplete';

//components
import MarkerList from './MarkerList';

function Place(lat, lng, address, id) {
    this.lat = lat;
    this.lng = lng;
    this.address = address.split(',', 1);
    this.id = id;

}

const SearchBox = ({ places, onPlacesChange, setPlaces }) => {

    const [address, setAddress] = useState("");

    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        //console.log(results[0].formatted_address);
        //console.log(results[0].place_id);
        //console.log(latLng);
        setAddress(value);
        const place = new Place(latLng.lat, latLng.lng, results[0].formatted_address, results[0].place_id);
        console.log(place);
        onPlacesChange(place);
    };



    return (
        <div>
            <PlacesAutomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                    <input {...getInputProps({ placeholder: "Type address" })} />
                    <div>
                        {loading ? <div>...loading</div> : null}
                        {suggestions.map(suggestions => {
                            const style = {
                                backgroundColor: suggestions.active ? '#fae3d9' : '#fff',
                            }
                            return (
                                <div key={suggestions.id} {...getSuggestionItemProps(suggestions, { style })} >
                                    <span>{suggestions.description}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
            </PlacesAutomplete>
            
            <MarkerList places={places} setPlaces={setPlaces}/>

            {/*<div>
                {places === undefined ? null : places.map(place => (
                    <div key={place.id}>
                        <h1>Address: {place.address}</h1>
                    </div>
                ))}
            </div>*/}
        </div>
    );
}

export default SearchBox;