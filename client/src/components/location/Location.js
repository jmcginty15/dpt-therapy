import Map from "../map/Map";
import cardio from "../home/images/cardio.jpg";
import "./Location.css";

const Location = () => {
  return (
    <div className="Location">
      <div
        className="Location-image"
        style={{ backgroundImage: `url(${cardio})` }}
      >
        <div className="Location-image-overlay" />
      </div>
      <div>
        <Map
          coordinates={{ lat: 32.20149, lng: -98.2451 }}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDEA1M2iQkyyxOx4kNrVPnW4AP_2Z4Bc2M"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div className="Map" />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <div className="Location-text">
          2900 West Washington St / US 377
          <br />
          Suite 74A
          <br />
          Stephenville, TX 76401
          <br />
          Phone: (254) 431-5100
          <br />
          Fax: (254) 459-4862
          <br />
          <a
            className="Location-link"
            href="mailto:dpttherapyandperformance@gmail.com"
          >
            dpttherapyandperformance@gmail.com
          </a>
        </div>
        <Map
          coordinates={{ lat: 32.2367, lng: -97.7539 }}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDEA1M2iQkyyxOx4kNrVPnW4AP_2Z4Bc2M"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div className="Map" />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <div className="Location-text">
          <h4>New location coming soon to Glen Rose, TX!</h4>
        </div>
      </div>
    </div>
  );
};

export default Location;
