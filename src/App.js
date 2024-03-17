import { useState } from 'react';
import './App.css';
import Loader from './components/Loader';
import Tile from './components/Tile';


const properties = [
  {
    id: 89348995,
    name: 'Pan Pacific',
    city: 'Delhi NCR',
    pin: 432458,
    price: 1299.00,
    rating: 4.3,
    images: [
      'https://images.oyoroomscdn.com/uploads/hotel_image/109220/9c00113faf7d18f2.jpg',
    ]
  },
  {
    id: 89348995,
    name: 'Dwarka Lodging',
    city: 'Delhi NCR',
    pin: 432458,
    rating: 2.3,
    price: 1299.00,
    images: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/47/81/27/oyo-rooms-thane-station.jpg?w=700&h=-1&s=1',
    ]
  },
  {
    id: 89348995,
    name: 'Poonam Hotel',
    city: 'Delhi NCR',
    pin: 432458,
    rating: 4.2,
    price: 1299.00,
    images: [
      'https://images.oyoroomscdn.com/uploads/hotel_image/109247/634bfd33638fbbd5.jpg'
    ]
  },
  {
    id: 89348995,
    name: 'Gurunanak Rooms',
    city: 'Delhi NCR',
    pin: 432458,
    rating: 4.7,
    price: 1299.00,
    images: [
      'https://images.oyoroomscdn.com/uploads/hotel_image/218909/oestbeuvmlkb.jpg'
    ]
  },
  {
    id: 89348995,
    name: 'Dan Lobe Hotel',
    city: 'Delhi NCR',
    pin: 432458,
    rating: 4.4,
    price: 1299.00,
    images: [
      'https://images.oyoroomscdn.com/uploads/hotel_image/103428/small/cfb087e6673e4980.jpg'
    ]
  },
  {
    id: 89348995,
    name: 'Pershing Square Lodge',
    city: 'Delhi NCR',
    pin: 432458,
    rating: 3.7,
    price: 1299.00,
    images: [
      'https://images.oyoroomscdn.com/uploads/hotel_image/80947/4ed74d4a35bbaf82.jpg'
    ]
  },
  {
    id: 89348995,
    name: 'Pan Pacific',
    city: 'Delhi NCR',
    pin: 432458,
    price: 1299.00,
    rating: 4.3,
    images: [
      'https://images.oyoroomscdn.com/uploads/hotel_image/109220/9c00113faf7d18f2.jpg',
    ]
  },
  {
    id: 89348995,
    name: 'Dwarka Lodging',
    city: 'Delhi NCR',
    pin: 432458,
    rating: 2.3,
    price: 1299.00,
    images: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/47/81/27/oyo-rooms-thane-station.jpg?w=700&h=-1&s=1',
    ]
  },
  {
    id: 89348995,
    name: 'Poonam Hotel',
    city: 'Delhi NCR',
    pin: 432458,
    rating: 4.2,
    price: 1299.00,
    images: [
      'https://images.oyoroomscdn.com/uploads/hotel_image/109247/634bfd33638fbbd5.jpg'
    ]
  },
  {
    id: 89348995,
    name: 'Gurunanak Rooms',
    city: 'Delhi NCR',
    pin: 432458,
    rating: 4.7,
    price: 1299.00,
    images: [
      'https://images.oyoroomscdn.com/uploads/hotel_image/218909/oestbeuvmlkb.jpg'
    ]
  },
  {
    id: 89348995,
    name: 'Dan Lobe Hotel',
    city: 'Delhi NCR',
    pin: 432458,
    rating: 4.4,
    price: 1299.00,
    images: [
      'https://images.oyoroomscdn.com/uploads/hotel_image/103428/small/cfb087e6673e4980.jpg'
    ]
  },
  {
    id: 89348995,
    name: 'Pershing Square Lodge',
    city: 'Delhi NCR',
    pin: 432458,
    rating: 3.7,
    price: 1299.00,
    images: [
      'https://images.oyoroomscdn.com/uploads/hotel_image/80947/4ed74d4a35bbaf82.jpg'
    ]
  },
  {
    id: 89348995,
    name: 'Pan Pacific',
    city: 'Delhi NCR',
    pin: 432458,
    price: 1299.00,
    rating: 4.3,
    images: [
      'https://images.oyoroomscdn.com/uploads/hotel_image/109220/9c00113faf7d18f2.jpg',
    ]
  },
  {
    id: 89348995,
    name: 'Dwarka Lodging',
    city: 'Delhi NCR',
    pin: 432458,
    rating: 2.3,
    price: 1299.00,
    images: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/47/81/27/oyo-rooms-thane-station.jpg?w=700&h=-1&s=1',
    ]
  },
  {
    id: 89348995,
    name: 'Poonam Hotel',
    city: 'Delhi NCR',
    pin: 432458,
    rating: 4.2,
    price: 1299.00,
    images: [
      'https://images.oyoroomscdn.com/uploads/hotel_image/109247/634bfd33638fbbd5.jpg'
    ]
  },
  {
    id: 89348995,
    name: 'Gurunanak Rooms',
    city: 'Delhi NCR',
    pin: 432458,
    rating: 4.7,
    price: 1299.00,
    images: [
      'https://images.oyoroomscdn.com/uploads/hotel_image/218909/oestbeuvmlkb.jpg'
    ]
  },
  {
    id: 89348995,
    name: 'Dan Lobe Hotel',
    city: 'Delhi NCR',
    pin: 432458,
    rating: 4.4,
    price: 1299.00,
    images: [
      'https://images.oyoroomscdn.com/uploads/hotel_image/103428/small/cfb087e6673e4980.jpg'
    ]
  },
  {
    id: 89348995,
    name: 'Pershing Square Lodge',
    city: 'Delhi NCR',
    pin: 432458,
    rating: 3.7,
    price: 1299.00,
    images: [
      'https://images.oyoroomscdn.com/uploads/hotel_image/80947/4ed74d4a35bbaf82.jpg'
    ]
  },
]


const App = () => {

  const [mapUrl, setMapUrl] = useState();
  const [loading, setLoading] = useState(false);

  const handleMapUrl = (e) => {

    setLoading(true);

    let newLoc = e.target.value;

    if ('' + newLoc === '') {
      newLoc = 'Mumbai';
    }

    setMapUrl(encodeURI('https://www.google.com/maps/embed/v1/place?q=' + newLoc + '&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'));

    setTimeout(() => {
      setLoading(false)
    }, 2000);

  }

  return (
    <div className="App">

      <center>
        <input id="q-input" placeholder="Search..." onKeyUp={(e) => handleMapUrl(e)} />
      </center>

      <div className="main-wrapper">

        <div className="properties-view">
          
          <div style={{ padding: '10px' }} >
            {properties.length} properties found.
          </div>

          {loading ? <Loader /> : 
            <div className="listing-view">{properties.map(p => <Tile data={p} />)} </div>
          }
        </div>

        <div className="map-view">

          <iframe className="g-map-frame" style={{ width: '40vw', height: '90vh' }} frameborder="0" src={mapUrl}></iframe>

        </div>
      </div>

    </div>
  );
}

export default App;
