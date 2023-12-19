import Map from "../map/Map";
import stephenville from "../../assets/stephenville.jpg";
import glenRose from "../../assets/glen-rose.jpg";
import lubbock from "../../assets/lubbock.jpg";
import "./Location.css";

const Location = () => {
  return (
    <div className="Location">
      <div
        className="Location-image"
        style={{ backgroundImage: `url(${stephenville})` }}
      >
        <div className="Location-image-overlay" />
      </div>
      <div className="Location-map-container">
        <div className="Location-text">
          <h5 className="">DPT Therapy & Performance of Stephenville</h5>
          2900 West Washington St / US 377 Suite 74A
          <br />
          Stephenville, TX 76401
          <br />
          Phone: (254) 431-5100
          <br />
          Fax: (254) 459-4862
          <br />
          <a
            className="Location-link"
            href="mailto:stephenville@dpttherapy.com"
          >
            stephenville@dpttherapy.com
          </a>
        </div>
        <Map
          coordinates={{ lat: 32.20100054545242, lng: -98.24578171940642 }}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDEA1M2iQkyyxOx4kNrVPnW4AP_2Z4Bc2M"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div className="Map" />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
      <div
        className="Location-image Location-image-mid"
        style={{ backgroundImage: `url(${glenRose})` }}
      >
        <div className="Location-image-overlay" />
      </div>
      <div className="Location-map-container">
        <div className="Location-text">
          <h5>DPT Therapy & Performance of Glen Rose</h5>
          1613 NE Big Bend Trail Suite B
          <br />
          Glen Rose, TX 76043
          <br />
          Phone: (254) 436-5766
          <br />
          <a
            className="Location-link"
            href="mailto:glenrose@dpttherapy.com"
          >
            glenrose@dpttherapy.com
          </a>
        </div>
        <Map
          coordinates={{ lat: 32.24869975775662, lng: -97.73704912183615 }}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDEA1M2iQkyyxOx4kNrVPnW4AP_2Z4Bc2M"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div className="Map" />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
      <div
        className="Location-image Location-image-mid"
        style={{ backgroundImage: `url(${lubbock})` }}
      >
        <div className="Location-image-overlay" />
      </div>
      <div className="Location-map-container">
        <div className="Location-text">
          <h5>DPT Therapy & Performance of Lubbock</h5>
          2811 South Loop 289 Suite 14
          <br />
          Lubbock, TX 79423
          <br />
          Phone: (806) 715-2177
          <br />
          <a
            className="Location-link"
            href="mailto:lubbock@dpttherapy.com"
          >
            lubbock@dpttherapy.com
          </a>
        </div>
        <Map
          coordinates={{ lat: 33.528601359520835, lng: -101.87790403284944 }}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDEA1M2iQkyyxOx4kNrVPnW4AP_2Z4Bc2M"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div className="Map" />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
};

export default Location;
