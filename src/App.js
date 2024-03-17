import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Listing from './components/Listing';
import Loader from './components/Loader';
import Tile from './components/Tile';
import { properties } from './Constants';


const App = () => {

  const [mapUrl, setMapUrl] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMapUrl();
  }, [])

  return (
    <div className="App">

      <Header setLoading={setLoading} setMapUrl={setMapUrl} />

      <div className="main-wrapper">

        <Listing loading={loading} properties={properties} />

        <div className="map-view">

          <iframe className="g-map-frame" style={{ width: 'calc(40vw - 0px)', height: 'calc(100vh - 105px)' }} frameborder="0" src={mapUrl}></iframe>

        </div>
      </div>

    </div>
  );
}

export default App;
