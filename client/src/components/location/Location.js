import Map from '../map/Map';
import weightroom from '../home/images/weightroom.jpg';
import './Location.css';

const Location = () => {
    return (
        <div className="Location">
            <div className="Location-image" style={{ backgroundImage: `url(${weightroom})` }}>
                <div className="Location-image-overlay" />
            </div>
            <div>
                <Map
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDEA1M2iQkyyxOx4kNrVPnW4AP_2Z4Bc2M"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div className="Map" />}
                    mapElement={<div style={{ height: `100%` }} />} />
                <div className="Location-text">
                    2900 West Washington St / US 377<br />
                    Suite 74A<br />
                    Stephenville, TX 76401<br />
                    Phone: (254) 431-5100<br />
                    Fax: (254) 459-4862<br />
                    <a className="Footer-link-white" href="mailto:dpttherapyandperformance@gmail.com">dpttherapyandperformance@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default Location;
