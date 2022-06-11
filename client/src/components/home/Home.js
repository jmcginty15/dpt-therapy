import Carousel from 'react-bootstrap/Carousel';
import Map from '../map/Map';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import bannerHorizontal1 from './images/banner-horizontal-1.jpg';
import bannerHorizontal2 from './images/banner-horizontal-2.jpg';
import bannerHorizontal3 from './images/banner-horizontal-3.jpg';
import bannerHorizontal4 from './images/banner-horizontal-4.jpg';
import bannerVertical1 from './images/banner-vertical-1.jpg';
import bannerVertical2 from './images/banner-vertical-2.jpg';
import bannerVertical3 from './images/banner-vertical-3.jpg';
import bannerVertical4 from './images/banner-vertical-4.jpg';
import bicycle from './images/bicycle.jpg';
import family from './images/family.jpg';
import football from './images/football.jpg';
import cardio from './images/cardio.jpg';
import './Home.css';

const horizontalBanners = [
    {
        photo: bannerHorizontal1,
        caption: 'GETTING YOU BACK',
        fontColor: 'black'
    },
    {
        photo: bannerHorizontal3,
        caption: 'BACK TO WORK',
        fontColor: 'white'
    },
    {
        photo: bannerHorizontal4,
        caption: 'BACK TO LIFE',
        fontColor: 'white'
    },
    {
        photo: bannerHorizontal2,
        caption: 'BACK TO SPORTS',
        fontColor: 'white'
    }
];

const verticalBanners = [
    {
        photo: bannerVertical1,
        caption: 'GETTING YOU BACK',
        fontColor: 'white'
    },
    {
        photo: bannerVertical3,
        caption: 'BACK TO WORK',
        fontColor: 'white'
    },
    {
        photo: bannerVertical4,
        caption: 'BACK TO LIFE',
        fontColor: 'black'
    },
    {
        photo: bannerVertical2,
        caption: 'BACK TO SPORTS',
        fontColor: 'white'
    },
]

const Home = () => {
    const navigate = useNavigate();

    const [banners, setBanners] = useState(window.innerWidth >= 768 ? horizontalBanners : verticalBanners);
    const [photoRight, setPhotoRight] = useState(window.innerWidth > 768);

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            if (JSON.stringify(banners) === JSON.stringify(verticalBanners)) setBanners(horizontalBanners);
            if (!photoRight) setPhotoRight(true);
        } else {
            if (JSON.stringify(banners) === JSON.stringify(horizontalBanners)) setBanners(verticalBanners);
            if (photoRight) setPhotoRight(false);
        }
    });

    return (
        <div className="Home">
            <div className="Home-banner">
                {photoRight && <div className="Home-about">
                    <div>
                        <p className="Home-about-text">Welcome to DPT Physical Therapy & Performance, a rehabilitation group! Let our Doctors of Physical Therapy design a specialized treatment plan tailored to your personal care. Our staff is dedicated to patient focused service, where we don't just meet, but strive to exceed your expectations. The success of our patients is how we measure the success of our group! Let our Doctors of PT "get you back to LIFE!"</p>
                        <button className="Home-button Home-button-about" onClick={() => navigate('/about')}>LEARN MORE&ensp;<i className="fa fa-angle-right" /></button>
                    </div>
                </div>}
                <Carousel className="Home-carousel" pause={false} controls={false}>
                    {banners.map(banner => (
                        <Carousel.Item className="Home-carousel-item" interval={3000} key={banner.photo}>
                            <img className="Home-banner-image" src={banner.photo} />
                            <div className="Home-banner-shade" />
                            <Carousel.Caption bsPrefix="Home-banner-caption">
                                <h1 className="Home-banner-caption-text" style={{ color: banner.fontColor }}>{banner.caption}</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
                {!photoRight && <div className="Home-about">
                    <div>
                        <p className="Home-about-text">Welcome to DPT Therapy & Performance, a rehabilitation group! Let our Doctors of Physical Therapy design a specialized treatment plan tailored to your personal care. Our staff is dedicated to patient focused service, where we don't just meet, but strive to exceed your expectations. The success of our patients is how we measure the success of our group! Let our Doctors of PT "get you back to LIFE!"</p>
                        <button className="Home-button Home-button-about" onClick={() => navigate('/about')}>LEARN MORE&ensp;<i className="fa fa-angle-right" /></button>
                    </div>
                </div>}
            </div>
            <div className="Home-get-started">
                <div className="Home-image" style={{ backgroundImage: `url(${bicycle})` }}>
                    <div className="Home-image-overlay-left" />
                </div>
                <div className="Home-get-started-text">
                    <div className="Home-container">
                        <h1 className="Home-title">GET STARTED</h1>
                        <p className="Home-about-text">Take the next step to getting started and "Getting Back to Life".</p>
                        <button className="Home-button Home-button-get-started" onClick={() => navigate('/get-started')}>LEARN HOW TO GET STARTED&ensp;<i className="fa fa-angle-right" /></button>
                    </div>
                </div>
            </div>
            <div className="Home-services">
                {!photoRight && <div className="Home-image" style={{ backgroundImage: `url(${family})` }}>
                    <div className="Home-image-overlay-right" />
                </div>}
                <div className="Home-services-text">
                    <div className="Home-container">
                        <h1 className="Home-title">SERVICES</h1>
                        <p className="Home-about-text">At our clinics, the goal is to "get you back to life!" Our Doctors of PT help you move beyond your current condition/injury so you can take your health, sports performance and fitness to a higher level. Our staff has a broad skill set of interventions/services that are state of the art, evidence based, and tailored to your specific needs.</p>
                        <button className="Home-button Home-button-about" onClick={() => navigate('/services')}>LEARN MORE ABOUT OUR SERVICES&ensp;<i className="fa fa-angle-right" /></button>
                    </div>
                </div>
                {photoRight && <div className="Home-image" style={{ backgroundImage: `url(${family})` }}>
                    <div className="Home-image-overlay-right" />
                </div>}
            </div>
            <div className="Home-testimonials">
                <div className="Home-image" style={{ backgroundImage: `url(${football})` }}>
                    <div className="Home-image-overlay-left" />
                </div>
                <div className="Home-get-started-text">
                    <div className="Home-container">
                        <h1 className="Home-title">PATIENT EXPERIENCES</h1>
                        <p className="Home-about-text">Find out what our patients are saying about their experiences at DPT Physical Therapy & Performance!</p>
                        <button className="Home-button Home-button-get-started" onClick={() => navigate('/patient-experiences')}>HEAR FROM SOME OF OUR SATISFIED PATIENTS&ensp;<i className="fa fa-angle-right" /></button>
                    </div>
                </div>
            </div>
            <div className="Home-location">
                {!photoRight && <div className="Home-image" style={{ backgroundImage: `url(${cardio})` }}>
                    <div className="Home-image-overlay-right" />
                </div>}
                <Map
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDEA1M2iQkyyxOx4kNrVPnW4AP_2Z4Bc2M"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div className="Map" />}
                    mapElement={<div style={{ height: `100%` }} />} />
                {photoRight && <div className="Home-image" style={{ backgroundImage: `url(${cardio})` }}>
                    <div className="Home-image-overlay-right" />
                </div>}
            </div>
        </div>
    )
}

export default Home;
