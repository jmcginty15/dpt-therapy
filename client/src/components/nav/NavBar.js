import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import logo from '../../assets/DPT_therapy_v4-03.png';
import { ReactComponent as NavLogoHorizontal } from '../../assets/svg-logo.svg';
import { ReactComponent as NavLogoVertical } from '../../assets/vertical-logo.svg';
import _ from 'lodash';
import './NavBar.css';

// Navbar component
const NavBar = () => {
    const navigate = useNavigate();
    const [NavLogo, setNavLogo] = useState(window.innerWidth >= 768 ? NavLogoHorizontal : NavLogoVertical);

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && !_.isEqual(NavLogo, NavLogoHorizontal)) setNavLogo(NavLogoHorizontal);
        else if (!_.isEqual(NavLogo, NavLogoVertical)) setNavLogo(NavLogoVertical);
    });

    const payPortal = 'https://quickclick.com/r/1ukuh';

    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!open);
    useEffect(() => {
        if (open) {
            if (backgroundColor !== '#ffffff') setBackgroundColor('#ffffff');
            if (textColor !== 'var(--accent)') setTextColor('var(--accent)');
        } else setNavBarColor();
    }, [open]);

    const [backgroundColor, setBackgroundColor] = useState('#ffffff00');
    const [textColor, setTextColor] = useState('white');

    const setNavBarColor = () => {
        const pos = window.scrollY;
        let newBackground = '#ffffff';
        let newText = 'var(--accent)';

        if (open) {
            newBackground = '#ffffff';
            newText = 'var(--accent)';
        } else if (pos < 150) {
            let opacity = Math.round(pos / 150 * 255).toString(16);
            if (opacity.length < 2) opacity = `0${opacity}`;
            newBackground = `#ffffff${opacity}`;

            if (pos === 0) newText = 'white';
            else newText = 'var(--accent)';
        }

        if (backgroundColor !== newBackground) setBackgroundColor(newBackground);
        if (textColor !== newText) setTextColor(newText);
    }

    window.addEventListener('scroll', setNavBarColor);

    return (
        <div className="NavBar">
            <Navbar id="Nav" style={{ backgroundColor: backgroundColor }} light={backgroundColor === '#ffffff'} dark={backgroundColor !== '#ffffff'} expand="md" fixed="top">
                <NavbarBrand href="/" id="brand-logo-container">
                    <img src={logo} height={75} />
                    {/* <NavLogo id="brand-logo" width={150} height={150} style={{ color: textColor }} /> */}
                </NavbarBrand>
                <NavbarToggler onClick={toggleOpen} />
                <Collapse isOpen={open} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => navigate('/about', false)} style={{ color: textColor }}><span className="NavBar-link">ABOUT</span></NavLink>
                        </NavItem>
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => navigate('/get-started', false)} style={{ color: textColor }}><span className="NavBar-link">GET STARTED</span></NavLink>
                        </NavItem>
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => navigate('/services', false)} style={{ color: textColor }}><span className="NavBar-link">SERVICES</span></NavLink>
                        </NavItem>
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => navigate('/testimonials', false)} style={{ color: textColor }}><span className="NavBar-link">TESTIMONIALS</span></NavLink>
                        </NavItem>
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => navigate('/location', false)} style={{ color: textColor }}><span className="NavBar-link">LOCATION</span></NavLink>
                        </NavItem>
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => window.open(payPortal, '_blank')}><span className="NavBar-link-button"><i className="fa fa-credit-card" /> PAY ACCOUNT</span></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;