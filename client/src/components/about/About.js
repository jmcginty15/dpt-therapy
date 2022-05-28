import StaffCard from './StaffCard';
import aboutPhoto from '../../assets/Re__Website_development_for_DPT/DrD-Explaining-Injury.jpg';
import chadYes from '../../assets/chad-yes.jpg';
import './About.css';

export const staff = [
    {
        name: 'Chad McChadderson',
        title: 'Doctor of Being a Chad',
        photo: chadYes
    },
    {
        name: 'Bill McBillerson',
        title: 'Doctor of Being a Bill',
        photo: chadYes
    },
    {
        name: 'Bob McBobberson',
        title: 'Doctor of Being a Bob',
        photo: chadYes
    },
    {
        name: 'Steve McSteverson',
        title: 'Doctor of Being a Steve',
        photo: chadYes
    },
    {
        name: 'Joe McJosephson',
        title: 'Doctor of Being a Joe',
        photo: chadYes
    },
    {
        name: 'Boaty McBoatface',
        title: 'Doctor of Being a Boat',
        photo: chadYes
    },
    {
        name: 'Elvis Presley',
        title: 'Still Alive',
        photo: chadYes
    },
    {
        name: 'Jeffrey Epstein',
        title: "Didn't Kill Himself",
        photo: chadYes
    },
    {
        name: 'The Moon',
        title: 'Still Has Not Been Visited',
        photo: chadYes
    },
    {
        name: 'The Earth',
        title: 'Is Hollow',
        photo: chadYes
    },
];

export const pathify = (name) => `/${name.toLowerCase().replace(' ', '-')}`;

const About = () => {
    return (
        <div className="About">
            <div className="About-content">
                <div className="About-photo" style={{ backgroundImage: `url(${aboutPhoto})` }}>
                    <div className="About-image-overlay-left" />
                </div>
                <div className="About-text">
                    <h1 className="About-title">ABOUT DPT</h1>
                    <p className="About-text-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo. In pellentesque massa placerat duis ultricies lacus. Lectus nulla at volutpat diam ut venenatis tellus in.</p>
                    <h3 className="About-subtitle">OUR CORE VALUES:</h3>
                    <ul className="About-ul About-text-content">
                        <li className="About-li">Compassion — All people deserve to receive care in a loving and accepting environment.</li>
                        <li className="About-li">Excellence — All interventions are based on the value of the patient, experience of the staff, and research/technology.</li>
                        <li className="About-li">Integriy — All interventions are provided in an honest and "always do the right thing" setting.</li>
                        <li className="About-li">Diligence — All interactions are built on hard work and a strong work ethic.</li>
                    </ul>
                </div>
            </div>
            <div className="About-staff">
                <h1 className="About-title">MEET OUR STAFF</h1>
                <div className="About-staff-grid">
                    {staff.map(member => <StaffCard name={member.name} title={member.title} photo={member.photo} bioLink={pathify(member.name)} />)}
                </div>
            </div>
        </div>
    )
}

export default About;
