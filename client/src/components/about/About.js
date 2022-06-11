import StaffCard from './StaffCard';
import aboutPhoto from '../../assets/Re__Website_development_for_DPT/DrD-Explaining-Injury.jpg';
import christyMcminn from '../../assets/christy-mcminn.jpg';
import cheyenneStroope from '../../assets/cheyenne-stroope.jpg';
import treyTaylor from '../../assets/trey-taylor.jpg';
import dptGroup from '../../assets/dpt-group.jpg';
import './About.css';

export const staff = [
    {
        name: 'Trey Taylor',
        credentials: 'PT, DPT, Cert. DN.',
        title: 'Vice President',
        photo: treyTaylor,
        bioParagraphs: [
            "Trey is our Vice President and a founding partner of DPT Physical Therapy & Performance. Born and raised in Stephenville, he graduated from Stephenville High School in 2008. Trey attended Tarleton State University where he received a Bachelor of Science in Kinesiology in 2012. He also attended the University of North Texas Health Science Center where he earned a Doctorate of Physical Therapy degree in 2015. Trey has several years of experience in various orthopedic settings, and is committed to helping his patients reach their maximum potential. Trey's professional interests include sports rehab, orthopedic manual therapy, dry needling, pain management, vestibular and balance therapy including vertigo treatments, as well as strength and conditioning.",
            "Trey resides in Stephenville with his wife, Shelby Taylor, and their three kids Dru, Peyton and Jase."
        ]
    },
    {
        name: 'Cheyenne Stroope',
        credentials: null,
        title: 'Physical Therapy Technician/Exercise Scientist',
        photo: cheyenneStroope,
        bioParagraphs: [
            "Cheyenne was born and raised in Brownwood, Texas where she played numerous sports and participated in many FFA activities throughout high school. After the completion of high school she attended Tarleton State University receiving her Bachelor's degree in Kinesiology with a focus in Exercise and Allied Health Professions in December of 2021 with Honors.",
            "Cheyenne is currently pursuing her Master's degree in Kinesiology at Tarleton State University with a focus in Exercise Science and a plan to attend Physical Therapy School in the near future."
        ]
    },
    {
        name: 'Christy McMinn',
        credentials: null,
        title: 'Front Office Coordinator',
        photo: christyMcminn,
        bioParagraphs: ["Christy was born in Fairfax, Virginia. She was raised in a military family, which meant she moved a lot when she was young. Her family eventually moved to Texas. She attended Remington College, becoming a Medical Assistant in 2002. In 2015, she graduated from the College of Health Care Professions with her Associate of Applied Science Degree in Healthcare Management. She has several years of medical office experience and will work hard to ensure all your concerns are addressed and needs are met. She resides in Stephenville, Texas with her husband, children, and grandson."]
    }
];

export const pathify = (name) => `/${name.toLowerCase().replace(' ', '-')}`;

const About = () => {
    return (
        <div className="About">
            <div className="About-content">
                <div className="About-photo" style={{ backgroundImage: `url(${dptGroup})` }}>
                    <div className="About-image-overlay-left" />
                </div>
                <div className="About-text">
                    <h1 className="About-title">ABOUT DPT</h1>
                    <p className="About-text-content">Welcome to DPT Physical Therapy & Performance, a rehabilitation group! Let our Doctors of Physical Therapy design a specialized treatment plan tailored to your personal care. Our staff is dedicated to patient focused service, where we don't just meet, but strive to exceed your expectations. The success of our patients is how we measure the success of our group! Let our Doctors of PT "get you back to LIFE!"</p>
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
                    {staff.map((member, i) => <StaffCard key={i} name={member.name} credentials={member.credentials} title={member.title} photo={member.photo} bioParagraphs={member.bioParagraphs} />)}
                </div>
            </div>
        </div>
    )
}

export default About;
