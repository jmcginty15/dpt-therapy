import Map from '../map/Map';
import stephenville from '../home/images/stephenville.jpg';
import './Location.css';

const Location = () => {
    return (
        <div className="Location">
            <div className="Location-image" style={{ backgroundImage: `url(${stephenville})` }}>
                <div className="Location-image-overlay" />
            </div>
            <div>
                <Map
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDEA1M2iQkyyxOx4kNrVPnW4AP_2Z4Bc2M"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div className="Map" />}
                    mapElement={<div style={{ height: `100%` }} />} />
                <div className="Location-text">
                    1234 Somewhere St<br />
                    Stephenville, TX 12345<br />
                    (254) 123-4567<br />
                    dpttherapy@gmail.com
                </div>
            </div>
        </div>
    )
}

export default Location;
