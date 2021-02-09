import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

//Components
import Map from './Components/Map';
import SearchBox from './Components/SearchBox';
import Points from './Components/Marker';
import Home from './Components/Home';

function App() {

  const [places, setPlaces] = useState();

  const handlePlaces = (place) => {
    if (places === undefined) {
      setPlaces([place]);
    }
    else {
      setPlaces([...places, place]);
    }
  };

  const Markers = () => {
    return (
      <div className='markers'>
        {places === undefined ? null : places.map(place => (
          <div key={place.id}>
            <h1>Address: {place.address}</h1>
            <h2>Lat: {place.lat}</h2>
            <h2>lng: {place.lng}</h2>
          </div>
        ))}
      </div>
    )
  };

  return (
    <div className="App">
      <Router>
        <div>
          <nav className='nav-bar'>
            <ul>
              <li>
                <Link className='link' to="/"><h1>Home</h1></Link>
              </li>
              <li>
                <Link className='link' to="/markers"><h1>Markers</h1></Link>
              </li>
              <li>
                <Link className='link' to="/addMarker"><h1>Add Marker</h1></Link>
              </li>
              <li>
                <Link className='link' to="/map"><h1>Map</h1></Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/addMarker">
              <SearchBox /*className="search"*/ places={places} onPlacesChange={handlePlaces} setPlaces={setPlaces} />
            </Route>
            <Route path="/map">
              <Map places={places} />
            </Route>
            <Route path="/markers">
              <Markers />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
