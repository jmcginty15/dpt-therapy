import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import "./Map.css";

// const defaultView = {
//     center: {
//         lat: 41.4883,
//         lng: -112.01243
//     },
//     zoom: 11
// };

const Map = (props) => (
  <GoogleMap defaultCenter={props.coordinates} defaultZoom={13}>
    {props.coordinates.lat === 32.20149 && (
      <Marker position={props.coordinates} title="DPT Therapy" />
    )}
  </GoogleMap>
);

export default withScriptjs(withGoogleMap(Map));
