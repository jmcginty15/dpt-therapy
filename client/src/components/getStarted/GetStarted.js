import { useState } from 'react';
import getStartedPhoto from '../../assets/Re__Website_development_for_DPT/IMG_0795.jpg';
import './GetStarted.css';

const GetStarted = () => {
    const [photoRight, setPhotoRight] = useState(window.innerWidth > 768);
    const newPatientPacket = 'https://riatatherapy.com/wp-content/uploads/2022/02/New-Patient-Paperwork-2022-Take-2.pdf';

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && !photoRight) setPhotoRight(true);
        else if (window.innerWidth <= 768 && photoRight) setPhotoRight(false);
    });

    return (
        <div className="GetStarted">
            <div className="GetStarted-content">
                {!photoRight && <div className="GetStarted-photo" style={{ backgroundImage: `url(${getStartedPhoto})` }}>
                    <div className="GetStarted-image-overlay-left" />
                </div>}
                <div className="GetStarted-text">
                    <h1 className="GetStarted-title">GET STARTED</h1>
                    <h3 className="GetStarted-subtitle">Things you should know before your first therapy visit:</h3>
                    <p className="GetStarted-text-content">Physical Therapists have "limited direct access" in the state of Texas. We can evaluate, but not treat without a referral from a physician, so we recommend that you obtain a prescription for therapy from another provider before starting therapy so that we can get to work on your first visit. A prescription for therapy need only have:</p>
                    <ul className="GetStarted-ul GetStarted-text-content">
                        <li className="GetStarted-li">A diagnosis</li>
                        <li className="GetStarted-li">"Evaluate and Treat"</li>
                        <li className="GetStarted-li">The physician's signature and a date <i>(providers who may refer to PT include MDs, DOs, Physician's Assistants, Nurse Practitioners, Chiropractors—except in the case of Medicare as the insurer, Dentists, and Podiatrists</i></li>
                    </ul>
                </div>
                {photoRight && <div className="GetStarted-photo" style={{ backgroundImage: `url(${getStartedPhoto})` }}>
                    <div className="GetStarted-image-overlay-left" />
                </div>}
            </div>
            <div className="GetStarted-info">
                <div className="GetStarted-info-content">
                    <h2 className="GetStarted-subtitle">THE DAY OF YOUR FIRST VISIT:</h2>
                    <p className="GetStarted-text-content">Our doctors of physical therapy and other staff are here to serve you. If you have any questions about your appointments, insurance, treatment, or anything else, please feel free to contact our staff at any time.</p>
                    <button className="GetStarted-button GetStarted-button-about" type="button" onClick={() => window.open(newPatientPacket, '_blank')}>NEW PATIENT PACKET&ensp;<i className="fa fa-angle-right" /></button>
                </div>
                <div className="GetStarted-info-content">
                    <ul className="GetStarted-text-content">
                        <li className="GetStarted-li">Print your <a className="GetStarted-link" href={newPatientPacket} target="_blank" rel="noreferrer">new patient paperwork</a> ahead of time to limit your time in the office before your interaction with your doctor of physical therapy. Our staff will email you the forms if you provide us an address.</li>
                        <li className="GetStarted-li">Bring your insurance card and a form of picture identification to your visit. We will check your insurance benefits for you prior to your visit. We are able to accept cash, check, credit cards, and HSA <i>(healthcare savings account or flexible spending account)</i> cards for your deductible or copay. In addition, we are happy to discuss payment plans or our reasonable tiered self-pay rates.</li>
                        <li className="GetStarted-li">Wear or bring comfortable clothing (that exposes the injured area if possible). Our facilities have areas where you may change if needed.</li>
                        <li className="GetStarted-li">When you are issued a home exercise program, our staff will print a copy for your reference. Some patients prefer a more interactive version of the home exercise program, so feel free to bring your smartphone and we will video instructions for you.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default GetStarted;
