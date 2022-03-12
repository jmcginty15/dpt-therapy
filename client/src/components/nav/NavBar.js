import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';
import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import logo from '../../assets/DPT_therapy_v4-02.png';
import './NavBar.css';

// Navbar component
const NavBar = () => {
    const navigate = useNavigate();
    // const { app, forum, facebook, youtube, itunes } = useSelector(state => state.config);

    const facebook = 'https://www.facebook.com/RiataTherapySpecialists/';
    const linkedIn = 'https://www.linkedin.com/in/darin-deaton-5545581a/';

    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!open);

    const [backgroundColor, setBackgroundColor] = useState('#ffffff00');
    window.addEventListener('scroll', () => {
        const pos = window.scrollY;
        if (pos < 150) {
            let opacity = Math.round(pos / 150 * 255).toString(16);
            if (opacity.length < 2) opacity = `0${opacity}`;
            setBackgroundColor(`#ffffff${opacity}`);
        } else if (backgroundColor !== '#ffffff') setBackgroundColor('#ffffff');
    });

    return (
        <div className="NavBar">
            <Navbar id="Nav" style={{ backgroundColor: backgroundColor }} dark expand="md" fixed="top">
                <NavbarBrand href="/" id="brand-logo-container">
                    <img src={logo} height={75} />
                    {/* <NavLogo id="brand-logo" width={42} height={42} /> */}
                </NavbarBrand>
                <NavbarToggler onClick={toggleOpen} />
                <Collapse isOpen={open} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => navigate('/about', false)}><span className="NavBar-link">ABOUT</span></NavLink>
                        </NavItem>
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => navigate('/get-started', false)}><span className="NavBar-link">GET STARTED</span></NavLink>
                        </NavItem>
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => navigate('/services', false)}><span className="NavBar-link">SERVICES</span></NavLink>
                        </NavItem>
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => navigate('/testimonials', false)}><span className="NavBar-link">TESTIMONIALS</span></NavLink>
                        </NavItem>
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => navigate('/location', false)}><span className="NavBar-link">LOCATION</span></NavLink>
                        </NavItem>
                    </Nav>
                    <Button>Yeet</Button>
                </Collapse>
                <NavLink onClick={() => navigate(facebook, true)}><span className="NavBar-link-social"><i className="fa fa-facebook-square" aria-hidden="true" /></span></NavLink>
                <NavLink onClick={() => navigate(linkedIn, true)}><span className="NavBar-link-social"><i className="fa fa-linkedin-square" aria-hidden="true" /></span></NavLink>
            </Navbar>
        </div>
    )
}

export default NavBar;