import StaffCard from './StaffCard';
import BackToTop from '../BackToTop';
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
                    <p className="About-text-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo. In pellentesque massa placerat duis ultricies lacus. Lectus nulla at volutpat diam ut venenatis tellus in. Risus in hendrerit gravida rutrum quisque non tellus. Feugiat in fermentum posuere urna nec tincidunt. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Tortor consequat id porta nibh. Sed nisi lacus sed viverra tellus in hac. Viverra mauris in aliquam sem fringilla ut. Egestas sed tempus urna et pharetra pharetra massa massa. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Commodo ullamcorper a lacus vestibulum sed arcu. Tempor nec feugiat nisl pretium fusce id. Et malesuada fames ac turpis. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus.</p>
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
