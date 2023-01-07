import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

function MyMap() {
  const [position, setPosition] = useState([51.505, -0.09]);
  const [zoom, setZoom] = useState(13);

  return (
    <Map center={position} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
}




