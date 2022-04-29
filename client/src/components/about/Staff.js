import { useParams } from 'react-router-dom';
import { staff, pathify } from './About';
import './Staff.css';

const Staff = () => {
    const { staffId } = useParams();

    let staffMember = null;
    for (let member of staff) if (staffId === pathify(member.name).replace('/', '')) {
        staffMember = member;
        break;
    }

    return (
        <div className="Staff">
            <br />
            <br />
            <br />
            <br />
            <h1>About page for {staffMember.name}</h1>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Staff;
