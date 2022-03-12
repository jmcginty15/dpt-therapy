import Carousel from 'react-bootstrap/Carousel';
// import { Carousel, CarouselItem } from 'reactstrap';
import { useState } from 'react';
import bannerHorizontal1 from './images/banner-horizontal-1.jpg';
import bannerHorizontal2 from './images/banner-horizontal-2.jpg';
import bannerHorizontal3 from './images/banner-horizontal-3.jpg';
import bannerVertical1 from './images/banner-vertical-1.jpg';
import bannerVertical2 from './images/banner-vertical-2.jpg';
import bannerVertical3 from './images/banner-vertical-3.jpg';
// import machining from './images/overview.jpg';
// import gunsmithing from './images/gunsmithing.jpg';
// import taxidermy from './images/taxidermy.jpg';
// import ServiceCard from '../services/ServiceCard';
// import { ReactComponent as HomeLogo } from '../../assets/logos/Logo-Word-1.svg';
import './Home.css';

const horizontalBanners = [
    {
        photo: bannerHorizontal1,
        caption: 'GETTING YOU BACK',
        fontColor: 'black'
    },
    {
        photo: bannerHorizontal2,
        caption: 'DOING WHAT YOU LOVE',
        fontColor: 'white'
    },
    {
        photo: bannerHorizontal3,
        caption: 'GETTING BACK TO WORK',
        fontColor: 'var(--accent)'
    }
];

const verticalBanners = [
    {
        photo: bannerVertical1,
        caption: 'GETTING YOU BACK',
        fontColor: 'var(--accent)'
    },
    {
        photo: bannerVertical2,
        caption: 'DOING WHAT YOU LOVE',
        fontColor: 'white'
    },
    {
        photo: bannerVertical3,
        caption: 'GETTING BACK TO WORK',
        fontColor: 'black'
    }
]

const Home = () => {
    const [banners, setBanners] = useState(window.innerWidth >= 768 ? horizontalBanners : verticalBanners);

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && JSON.stringify(banners) === JSON.stringify(verticalBanners)) setBanners(horizontalBanners);
        else if (window.innerWidth < 768 && JSON.stringify(banners) === JSON.stringify(horizontalBanners)) setBanners(verticalBanners);
    });

    return (
        <div className="Home">
            <div className="Home-banner">
                <Carousel className="Home-carousel" pause={false} controls={false}>
                    {banners.map(banner => (
                        <Carousel.Item className="Home-carousel-item" interval={3000}>
                            <img className="Home-banner-image" src={banner.photo} />
                            <div className="Home-banner-shade" />
                            <Carousel.Caption bsPrefix="Home-banner-caption">
                                <h1 className="Home-banner-caption-text" style={{ color: banner.fontColor }}>{banner.caption}</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            <h1>Yeet</h1>
            <h1>Yeet</h1>
            <h1>Yeet</h1>
            <h1>Yeet</h1>
            <h1>Yeet</h1>
            <h1>Yeet</h1>
            <h1>Yeet</h1>
            <h1>Yeet</h1>
            <h1>Yeet</h1>
            <h1>Yeet</h1>
            <h1>Yeet</h1>
            <h1>Yeet</h1>
            <h1>Yeet</h1>
            <h1>Yeet</h1>
            <h1>Yeet</h1>
            <h1>Yeet</h1>
            <h1>Yeet</h1>
            <h1>Yeet</h1>
        </div>
    )
}

export default Home;
