import { useNavigate } from 'react-router';
import './StaffCard.css';

const StaffCard = ({ name, title, photo, bioLink = null }) => {
    const navigate = useNavigate();
    const classes = `StaffCard-name${bioLink ? ' StaffCard-link' : ''}`;

    return (
        <div className="StaffCard">
            <div className="StaffCard-photo" style={{ backgroundImage: `url(${photo})` }}>
                <div className="StaffCard-photo-overlay" />
            </div>
            <div className="StaffCard-text">
                <h4 className={classes} onClick={() => navigate(`/about${bioLink}`, false)}>{name.toUpperCase()}</h4>
                <p className="StaffCard-title">{title}</p>
            </div>
        </div>
    )
}

export default StaffCard;
