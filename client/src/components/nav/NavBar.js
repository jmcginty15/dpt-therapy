import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { ReactComponent as NavLogoWordsSingleRow } from '../../assets/logo-words-single-row.svg';
import { ReactComponent as NavLogoWordsDoubleRow } from '../../assets/logo-words-double-row.svg';
import { ReactComponent as NavLogoHat } from '../../assets/logo-hat.svg';
import _ from 'lodash';
import './NavBar.css';

const inRange = width => {
    if (width >= 1200 || width <= 991) return true;
    else return false;
}

// Navbar component
const NavBar = () => {
    const navigate = useNavigate();

    const [NavLogoWords, setNavLogoWords] = useState(inRange(window.innerWidth) ? NavLogoWordsSingleRow : NavLogoWordsDoubleRow);
    const [showLogoWords, setShowLogoWords] = useState(window.innerWidth >= 768);
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && !showLogoWords) setShowLogoWords(true);
        else if (window.innerWidth < 768 && showLogoWords) setShowLogoWords(false);

        const isInRange = inRange(window.innerWidth);
        if (isInRange && !_.isEqual(NavLogoWords, NavLogoWordsSingleRow)) setNavLogoWords(NavLogoWordsSingleRow);
        else if (!isInRange && !_.isEqual(NavLogoWords, NavLogoWordsDoubleRow)) setNavLogoWords(NavLogoWordsDoubleRow);
    });

    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!open);

    return (
        <div className="NavBar">
            <Navbar id="Nav" expand="lg" fixed="top">
                <NavbarBrand href="/" id="brand-logo-container">
                    <NavLogoHat height={75} />
                    {showLogoWords && <NavLogoWords id="brand-logo" height={75} />}
                </NavbarBrand>
                <NavbarToggler onClick={toggleOpen} />
                <Collapse isOpen={open} navbar>
                    <Nav className="ms-auto" navbar>
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
                            <NavLink onClick={() => navigate('/patient-experiences', false)}><span className="NavBar-link">PATIENT EXPERIENCES</span></NavLink>
                        </NavItem>
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => navigate('/location', false)}><span className="NavBar-link">LOCATION</span></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;