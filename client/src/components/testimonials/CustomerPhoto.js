import './CustomerPhoto.css';

const CustomerPhoto = ({ photo }) => {
    return (
        <div className="CustomerPhoto" style={{ backgroundImage: `url(${photo})` }} />
    )
}

export default CustomerPhoto;
