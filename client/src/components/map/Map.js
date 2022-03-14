import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './Map.css';

// const defaultView = {
//     center: {
//         lat: 41.4883,
//         lng: -112.01243
//     },
//     zoom: 11
// };


const Map = (props) =>
    <GoogleMap defaultCenter={{ lat: 32.2170021, lng: -98.208011 }} defaultZoom={13}>
        <Marker
            position={{ lat: 32.2170021, lng: -98.208011 }}
            title="DPT Therapy"
        />
    </GoogleMap>

export default withScriptjs(withGoogleMap(Map));