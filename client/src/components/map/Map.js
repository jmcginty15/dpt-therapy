import { Map as Mapbox, Marker } from "react-map-gl";
import "./Map.css";

const Map = (props) => (
  <div className="Map">
    <Mapbox
      mapboxAccessToken={
        "pk.eyJ1Ijoiam1jZ2ludHkxNSIsImEiOiJjbHh5eWNpYjcwNXY4MmtvdXd3N2UzMjY4In0.1XmxFHn9Sxq1n6I8yVBBSw"
      }
      initialViewState={props}
      style={{ width: "100%", height: "100%", zIndex: 0 }}
      mapStyle="mapbox://styles/mapbox/outdoors-v12"
    >
      <Marker
        latitude={props.latitude}
        longitude={props.longitude}
        color="red"
      />
    </Mapbox>
  </div>
);

export default Map;
