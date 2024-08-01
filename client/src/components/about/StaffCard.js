import { useNavigate } from "react-router";
import "./StaffCard.css";

const StaffCard = ({
  name,
  credentials,
  title,
  photo,
  degrees,
  bioParagraphs,
  areasOfInterest,
}) => {
  const navigate = useNavigate();

  return (
    <div className="StaffCard">
      <div
        className="StaffCard-photo"
        style={{ backgroundImage: `url(${photo})` }}
      />
      <div className="StaffCard-text">
        <h4 className="StaffCard-name">
          {name.toUpperCase()}
          {credentials && (
            <span>
              &ensp;<small>{credentials.toUpperCase()}</small>
            </span>
          )}
        </h4>
        <h6 className="StaffCard-title">{title}</h6>
        {degrees.length > 0 && (
          <p className="StaffCard-bio">
            {degrees.map((d, i) => (
              <span>
                {d}
                {i < degrees.length - 1 && <br />}
              </span>
            ))}
          </p>
        )}
        {bioParagraphs.map((paragraph, i) => (
          <p className="StaffCard-bio" key={i}>
            {paragraph}
          </p>
        ))}
        {areasOfInterest.length > 0 && (
          <p className="StaffCard-bio">
            <span style={{ fontWeight: "bold" }}>Areas of Interest</span>
            <br />
            {areasOfInterest.map((aoi, i) => (
              <span>
                {aoi}
                {i < areasOfInterest.length - 1 && <br />}
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
};

export default StaffCard;
