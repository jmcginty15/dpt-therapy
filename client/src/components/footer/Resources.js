import { useState } from 'react';
import './Resources.css';
import panorama from '../home/images/panorama.jpg';
import treatmentRoom from '../home/images/treatment-room.jpg';

const Resources = () => {
    const [image, setImage] = useState(window.innerWidth >= 768 ? panorama : treatmentRoom);

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && image === treatmentRoom) setImage(panorama);
        else if (image === panorama) setImage(treatmentRoom);
    });

    return (
        <div className="Resources" style={{ backgroundImage: `url(${image})` }}>
            <div className="Resources-shade">
                <div className="Resources-container">
                    <h4 className="Resources-title">RESOURCES</h4>
                    <div className="Resources-grid">
                        <a className="Resources-link" href="https://www.tpta.org/" target="_blank" rel="noreferrer">Texas Physical Therapy Association</a>
                        <a className="Resources-link" href="http://www.apta.org/" target="_blank" rel="noreferrer">American Physical Therapy Association</a>
                        <a className="Resources-link" href="https://www.cms.gov/" target="_blank" rel="noreferrer">Center for Medicare Services</a>
                        <a className="Resources-link" href="https://www.womenshealthapta.org/" target="_blank" rel="noreferrer">Physical Therapy Association - Women's Care</a>
                        <a className="Resources-link" href="https://www.tdi.texas.gov/" target="_blank" rel="noreferrer">Texas Department of Insurance</a>
                        <a className="Resources-link" href="https://www.tpta.org/" target="_blank" rel="noreferrer">Nondiscrimination Disclosure Statement</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resources;
