import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './Map.css';

// const defaultView = {
//     center: {
//         lat: 41.4883,
//         lng: -112.01243
//     },
//     zoom: 11
// };

const coordinates = { lat: 32.20149, lng: -98.2451 };

const Map = (props) =>
    <GoogleMap defaultCenter={coordinates} defaultZoom={13}>
        <Marker
            position={coordinates}
            title="DPT Therapy"
        />
    </GoogleMap>

export default withScriptjs(withGoogleMap(Map));