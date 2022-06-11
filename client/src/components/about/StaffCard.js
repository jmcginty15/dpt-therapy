import { useNavigate } from 'react-router';
import './StaffCard.css';

const StaffCard = ({ name, credentials, title, photo, bioParagraphs }) => {
    const navigate = useNavigate();

    return (
        <div className="StaffCard">
            <div className="StaffCard-photo" style={{ backgroundImage: `url(${photo})` }} />
            <div className="StaffCard-text">
                <h4 className="StaffCard-name">
                    {name.toUpperCase()}
                    {credentials && <span>&ensp;<small>{credentials.toUpperCase()}</small></span>}
                </h4>
                <h6 className="StaffCard-title">{title}</h6>
                {bioParagraphs.map((paragraph, i) => <p className="StaffCard-bio" key={i}>{paragraph}</p>)}
            </div>
        </div>
    )
}

export default StaffCard;
