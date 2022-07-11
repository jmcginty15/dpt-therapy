import './Disclosure.css';

const Disclosure = () => {
    return (
        <div className="Disclosure">
            <h1 className="Disclosure-title">NONDISCRIMINATION DISCLOSURE STATEMENT</h1>
            <h4 className="Disclosure-subtitle">Discrimination is against the law.</h4>
            <p>DPT Physical Therapy & Performance, PLLC complies with applicable Federal civil rights laws and does not discriminate on the basis of race, color, national origin, age, disability, or sex. DPT Physical Therapy & Performace, PLLC does not exclude people or treat them differently because of race, color, national origin, age, disability, or sex.</p>
            <h5 className="Disclosure-subtitle">DPT Physcical Therapy & Performance, PLLC:</h5>
            <h6 className="Disclosure-subtitle">Provides free aids and services to people with disabilities to communicate effectively with us, such as:</h6>
            <ul>
                <li>Qualified sign language interpreters</li>
                <li>Written information in other formats <em>(large print, audio, accessible electronic formats, other formats)</em></li>
            </ul>
            <h6 className="Disclosure-subtitle">Provides free language services to people whose primary language is not English, such as:</h6>
            <ul>
                <li>Qualified interpreters</li>
                <li>Information written in other languages</li>
            </ul>
            <h6 className="Disclosure-subtitle">If you need these services, contact Trey Taylor, Civil Rights Coordinator.</h6>
            <p>If you believe that DPT Physical Therapy & Performance, PLLC has failed to provide these services or discriminated in another way on the basis of race, color, national origin, age, disability, or sex, you can file a grievance with:</p>
            <p className="Disclosure-address">
                Trey Taylor, Civil Rights Coordinator<br />
                2900 West Washington St / US 377<br />
                Suite 74A<br />
                Stephenville, TX 76401<br />
                Phone: (254) 431-5100<br />
                Fax: (254) 459-4862<br />
                <a className="Disclosure-link" href="mailto:dpttherapyandperformance@gmail.com">dpttherapyandperformance@gmail.com</a>
            </p>
            <p>You can file a grievance in person or by mail, fax, or email. If you need help filing a grievance, Trey Taylor, Civil Rights Coordinator, is available to help you.</p>
            <p>You can also file a civil rights complaint with the U.S. Department of Health and Human Services, Office for Civil Rights, electronically through the Office for Civil Rights Complaint Portal, or by mail or phone at:</p>
            <p className="Disclosure-address">
                U.S. Department of Health and Human Services<br />
                200 Independence Avenue, SW<br />
                Room 509F, HHH Building<br />
                Washington, D.C. 20201<br />
                Phone: 1-800-368-1019<br />
                TDD: 800-537-7697<br />
            </p>
            <p>Complaint forms are available at <a className="Disclosure-link" href="http://www.hhs.gov/ocr/office/file/index.html" target="_blank" rel="noreferrer">http://www.hhs.gov/ocr/office/file/index.html</a></p>
            <p>Language Assistance, free of charge, is available to you at 1-866-260-2723 or at <a className="Disclosure-link" href="https://www.hhs.gov/civil-rights/for-individuals/language-assistance/index.html" target="_blank" rel="noreferrer">https://www.hhs.gov/civil-rights/for-individuals/language-assistance/index.html</a></p>
        </div>
    )
}

export default Disclosure;
