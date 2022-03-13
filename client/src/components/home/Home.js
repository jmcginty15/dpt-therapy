import Carousel from 'react-bootstrap/Carousel';
import Resources from '../footer/Resources';
import Footer from '../footer/Footer';
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
                        <Carousel.Item className="Home-carousel-item" interval={3000} key={banner.photo}>
                            <img className="Home-banner-image" src={banner.photo} />
                            <div className="Home-banner-shade" />
                            <Carousel.Caption bsPrefix="Home-banner-caption">
                                <h1 className="Home-banner-caption-text" style={{ color: banner.fontColor }}>{banner.caption}</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            <div className="Home-about">
                <h1 className="Home-title">DPT PHYSICAL THERAPY & PERFORMANCE</h1>
                <p className="Home-about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo. In pellentesque massa placerat duis ultricies lacus. Lectus nulla at volutpat diam ut venenatis tellus in. Risus in hendrerit gravida rutrum quisque non tellus. Feugiat in fermentum posuere urna nec tincidunt. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Tortor consequat id porta nibh. Sed nisi lacus sed viverra tellus in hac. Viverra mauris in aliquam sem fringilla ut. Egestas sed tempus urna et pharetra pharetra massa massa. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Commodo ullamcorper a lacus vestibulum sed arcu. Tempor nec feugiat nisl pretium fusce id. Et malesuada fames ac turpis. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus.</p>
                <button className="Home-button" type="button">LEARN MORE&ensp;<i className="fa fa-angle-right"/></button>
            </div>
            <Resources />
            <Footer />
        </div>
    )
}

export default Home;
