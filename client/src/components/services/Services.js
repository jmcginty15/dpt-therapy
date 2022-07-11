import servicesPhoto from '../../assets/Re__Website_development_for_DPT/DrD-Explaining-Injury.jpg';
import ServicesUL from './ServicesUL';
import { useState } from 'react';
import orthopedic from './images/orthopedic.jpg';
import neurological from './images/neurological.jpg';
import sports from './images/sports.jpg';
import fitness from './images/fitness.jpg';
import modalities from './images/modalities.jpg';
import './Services.css';

const services = {
    orthopedic: [
        'Neck and back pain',
        'Joint pain - including both upper and lower extremities',
        'Pre and post surgical rehabilitation',
        'Personalized exercise therapy',
        'Work rehabilitation and conditioning',
        'Manual therapy',
        'Spinal manipulation',
        'Dry needling'
    ],
    neurological: [
        'Stroke rehabilitation',
        'Neuromuscular disorders',
        'Vestibular therapy',
        'Balance training and fall prevention',
        'Vertigo'
    ],
    sports: [
        'High school, collegiate, and professional athletes',
        'Rodeo athletes',
        'Pre and post surgical rehabilitation',
        'Return to sport training',
        'Sport-specific programming',
        'NormaTec - intermittent compression recovery',
        'Hypervolt theragun recovery'
    ],
    fitness: [
        'Strength training',
        'Cardiovascular endurance training',
        'Sport performance evaluation and training',
        'Individualized programs'
    ],
    modalities: [
        'Dry needling',
        'Mechanical traction',
        'Cold laser',
        'Ultrasound',
        'Neuromuscular electrical stimulation',
        'Massage gun',
        'Heat and ice therapy',
        'NormaTec recovery'
    ]
}

const Services = () => {
    const [photoRight, setPhotoRight] = useState(window.innerWidth > 768);

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && !photoRight) setPhotoRight(true);
        else if (window.innerWidth < 768 && photoRight) setPhotoRight(false);
    });

    return (
        <div className="Services">
            <div className="Services-content">
                <div className="Services-photo" style={{ backgroundImage: `url(${servicesPhoto})` }}>
                    <div className="Services-image-overlay-left" />
                </div>
                <div className="Services-text">
                    <h1 className="Services-title">PT SERVICES</h1>
                    <p className="Services-text-content">At our clinics, the goal is to "get you back to life!" Our Doctors of PT help you move beyond your current condition/injury so you can take your health, sports performance and fitness to a higher level. Our staff has a broad skill set of interventions/services that are state of the art, evidence based, and tailored to your specific needs.</p>
                </div>
            </div>
            <div className="Services-list-photo-right">
                {!photoRight && <div className="Services-body-image" style={{ backgroundImage: `url(${orthopedic})` }}>
                    <div className="Services-body-image-overlay-right" />
                </div>}
                <div className="Services-body-text">
                    <div className="Services-container">
                        <h1 className="Services-body-title">ORTHOPEDIC</h1>
                        <ServicesUL items={services.orthopedic} wide={photoRight} />
                    </div>
                </div>
                {photoRight && <div className="Services-body-image" style={{ backgroundImage: `url(${orthopedic})` }}>
                    <div className="Services-body-image-overlay-right" />
                </div>}
            </div>
            <div className="Services-list-photo-left">
                <div className="Services-body-image" style={{ backgroundImage: `url(${neurological})` }}>
                    <div className="Services-body-image-overlay-left" />
                </div>
                <div className="Services-body-text">
                    <div className="Services-container">
                        <h1 className="Services-body-title">NEUROLOGICAL</h1>
                        <ServicesUL items={services.neurological} wide={photoRight} />
                    </div>
                </div>
            </div>
            <div className="Services-list-photo-right">
                {!photoRight && <div className="Services-body-image" style={{ backgroundImage: `url(${sports})` }}>
                    <div className="Services-body-image-overlay-right" />
                </div>}
                <div className="Services-body-text">
                    <div className="Services-container">
                        <h1 className="Services-body-title">SPORTS</h1>
                        <ServicesUL items={services.sports} wide={photoRight} />
                    </div>
                </div>
                {photoRight && <div className="Services-body-image" style={{ backgroundImage: `url(${sports})` }}>
                    <div className="Services-body-image-overlay-right" />
                </div>}
            </div>
            <div className="Services-list-photo-left">
                <div className="Services-body-image" style={{ backgroundImage: `url(${fitness})` }}>
                    <div className="Services-body-image-overlay-left" />
                </div>
                <div className="Services-body-text">
                    <div className="Services-container">
                        <h1 className="Services-body-title">FITNESS/TRAINING</h1>
                        <ServicesUL items={services.fitness} wide={photoRight} />
                    </div>
                </div>
            </div>
            <div className="Services-list-photo-right">
                {!photoRight && <div className="Services-body-image" style={{ backgroundImage: `url(${modalities})` }}>
                    <div className="Services-body-image-overlay-right" />
                </div>}
                <div className="Services-body-text">
                    <div className="Services-container">
                        <h1 className="Services-body-title">MODALITIES</h1>
                        <ServicesUL items={services.modalities} wide={photoRight} />
                    </div>
                </div>
                {photoRight && <div className="Services-body-image" style={{ backgroundImage: `url(${modalities})` }}>
                    <div className="Services-body-image-overlay-right" />
                </div>}
            </div>
        </div>
    )
}

export default Services;
