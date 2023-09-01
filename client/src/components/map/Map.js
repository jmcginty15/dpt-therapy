import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import "./Map.css";

const Map = (props) => (
  <GoogleMap defaultCenter={props.coordinates} defaultZoom={13}>
    <Marker position={props.coordinates} title="DPT Therapy" />
  </GoogleMap>
);

export default withScriptjs(withGoogleMap(Map));
