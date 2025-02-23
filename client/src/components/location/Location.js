import Map from "../map/Map";
import stephenville from "../../assets/stephenville.jpg";
import glenRose from "../../assets/glen-rose.jpg";
import lubbock from "../../assets/lubbock.jpg";
import comanche from "../../assets/comanche.jpg";
import coordinates from "../../assets/coordinates.json";
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
          latitude={coordinates.stephenville.latitude}
          longitude={coordinates.stephenville.longitude}
          zoom={coordinates.stephenville.zoom}
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
          <a className="Location-link" href="mailto:glenrose@dpttherapy.com">
            glenrose@dpttherapy.com
          </a>
        </div>
        <Map
          latitude={coordinates.glenrose.latitude}
          longitude={coordinates.glenrose.longitude}
          zoom={coordinates.glenrose.zoom}
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
          <a className="Location-link" href="mailto:lubbock@dpttherapy.com">
            lubbock@dpttherapy.com
          </a>
        </div>
        <Map
          latitude={coordinates.lubbock.latitude}
          longitude={coordinates.lubbock.longitude}
          zoom={coordinates.lubbock.zoom}
        />
      </div>
      <div
        className="Location-image Location-image-mid"
        style={{ backgroundImage: `url(${comanche})` }}
      >
        <div className="Location-image-overlay" />
      </div>
      <div className="Location-map-container">
        <div
          className="Location-text"
          style={{
            height: "fit-content",
            width: "100%",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <h5>DPT Therapy & Performance of Comanche</h5>
          <h5>Under construction!</h5>
          <h5>Coming fall-winter 2024</h5>
        </div>
      </div>
    </div>
  );
};

export default Location;
