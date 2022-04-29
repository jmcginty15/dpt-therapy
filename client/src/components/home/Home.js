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
import stephenville from './images/stephenville.jpg';
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
        fontColor: 'black'
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
                    <h1 className="Home-title">DPT PHYSICAL THERAPY & PERFORMANCE</h1>
                    <p className="Home-about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo. In pellentesque massa placerat duis ultricies lacus. Lectus nulla at volutpat diam ut venenatis tellus in. Risus in hendrerit gravida rutrum quisque non tellus. Feugiat in fermentum posuere urna nec tincidunt. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Tortor consequat id porta nibh. Sed nisi lacus sed viverra tellus in hac. Viverra mauris in aliquam sem fringilla ut. Egestas sed tempus urna et pharetra pharetra massa massa. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Commodo ullamcorper a lacus vestibulum sed arcu. Tempor nec feugiat nisl pretium fusce id. Et malesuada fames ac turpis. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus.</p>
                    <button className="Home-button Home-button-about" type="button">LEARN MORE&ensp;<i className="fa fa-angle-right" /></button>
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
                    <h1 className="Home-title">DPT PHYSICAL THERAPY & PERFORMANCE</h1>
                    <p className="Home-about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo. In pellentesque massa placerat duis ultricies lacus. Lectus nulla at volutpat diam ut venenatis tellus in. Risus in hendrerit gravida rutrum quisque non tellus. Feugiat in fermentum posuere urna nec tincidunt. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Tortor consequat id porta nibh. Sed nisi lacus sed viverra tellus in hac. Viverra mauris in aliquam sem fringilla ut. Egestas sed tempus urna et pharetra pharetra massa massa. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Commodo ullamcorper a lacus vestibulum sed arcu. Tempor nec feugiat nisl pretium fusce id. Et malesuada fames ac turpis. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus.</p>
                    <button className="Home-button Home-button-about" type="button">LEARN MORE&ensp;<i className="fa fa-angle-right" /></button>
                </div>}
            </div>
            <div className="Home-get-started">
                <div className="Home-image" style={{ backgroundImage: `url(${bicycle})` }}>
                    <div className="Home-image-overlay-left" />
                </div>
                <div className="Home-get-started-text">
                    <h1 className="Home-title">GET STARTED</h1>
                    <p className="Home-about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo. In pellentesque massa placerat duis ultricies lacus. Lectus nulla at volutpat diam ut venenatis tellus in. Risus in hendrerit gravida rutrum quisque non tellus. Feugiat in fermentum posuere urna nec tincidunt. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Tortor consequat id porta nibh. Sed nisi lacus sed viverra tellus in hac. Viverra mauris in aliquam sem fringilla ut. Egestas sed tempus urna et pharetra pharetra massa massa. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Commodo ullamcorper a lacus vestibulum sed arcu. Tempor nec feugiat nisl pretium fusce id. Et malesuada fames ac turpis. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus.</p>
                    <button className="Home-button Home-button-get-started" onClick={() => navigate('/get-started')}>LEARN HOW TO GET STARTED&ensp;<i className="fa fa-angle-right" /></button>
                </div>
            </div>
            <div className="Home-services">
                {!photoRight && <div className="Home-image" style={{ backgroundImage: `url(${family})` }}>
                    <div className="Home-image-overlay-right" />
                </div>}
                <div className="Home-services-text">
                    <h1 className="Home-title">SERVICES</h1>
                    <p className="Home-about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo. In pellentesque massa placerat duis ultricies lacus. Lectus nulla at volutpat diam ut venenatis tellus in. Risus in hendrerit gravida rutrum quisque non tellus. Feugiat in fermentum posuere urna nec tincidunt. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Tortor consequat id porta nibh. Sed nisi lacus sed viverra tellus in hac. Viverra mauris in aliquam sem fringilla ut. Egestas sed tempus urna et pharetra pharetra massa massa. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Commodo ullamcorper a lacus vestibulum sed arcu. Tempor nec feugiat nisl pretium fusce id. Et malesuada fames ac turpis. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus.</p>
                    <button className="Home-button Home-button-about" onClick={() => navigate('/services')}>LEARN MORE ABOUT OUR SERVICES&ensp;<i className="fa fa-angle-right" /></button>
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
                    <h1 className="Home-title">TESTIMONIALS</h1>
                    <p className="Home-about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo. In pellentesque massa placerat duis ultricies lacus. Lectus nulla at volutpat diam ut venenatis tellus in. Risus in hendrerit gravida rutrum quisque non tellus. Feugiat in fermentum posuere urna nec tincidunt. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Tortor consequat id porta nibh. Sed nisi lacus sed viverra tellus in hac. Viverra mauris in aliquam sem fringilla ut. Egestas sed tempus urna et pharetra pharetra massa massa. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Commodo ullamcorper a lacus vestibulum sed arcu. Tempor nec feugiat nisl pretium fusce id. Et malesuada fames ac turpis. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus.</p>
                    <button className="Home-button Home-button-get-started" onClick={() => navigate('/testimonials')}>HEAR FROM SOME OF OUR SATISFIED CUSTOMERS&ensp;<i className="fa fa-angle-right" /></button>
                </div>
            </div>
            <div className="Home-location">
                {!photoRight && <div className="Home-image" style={{ backgroundImage: `url(${stephenville})` }}>
                    <div className="Home-image-overlay-right" />
                </div>}
                <Map
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDEA1M2iQkyyxOx4kNrVPnW4AP_2Z4Bc2M"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div className="Map" />}
                    mapElement={<div style={{ height: `100%` }} />} />
                {photoRight && <div className="Home-image" style={{ backgroundImage: `url(${stephenville})` }}>
                    <div className="Home-image-overlay-right" />
                </div>}
            </div>
        </div>
    )
}

export default Home;
