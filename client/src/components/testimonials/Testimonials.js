import Carousel from 'react-bootstrap/Carousel';
import CustomerPhoto from './CustomerPhoto';
import { useState } from 'react';
import testimonialsPhoto from './images/therapy.jpg';
import chadYes from '../../assets/chad-yes.jpg';
import './Testimonials.css';

const testimonials = [
    {
        photo: chadYes,
        name: 'Bill McBillerson',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Feugiat nisl pretium fusce id velit. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Tincidunt eget nullam non nisi est sit. Nascetur ridiculus mus mauris vitae ultricies leo. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Ut sem viverra aliquet eget sit amet tellus cras. Vitae turpis massa sed elementum tempus egestas sed sed risus. Nulla malesuada pellentesque elit eget gravida cum. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Purus in massa tempor nec feugiat nisl pretium. Nibh praesent tristique magna sit amet purus gravida quis. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Vel risus commodo viverra maecenas accumsan lacus.',
        featured: true
    },
    {
        photo: chadYes,
        name: 'Bob McBobberson',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Feugiat nisl pretium fusce id velit. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Tincidunt eget nullam non nisi est sit. Nascetur ridiculus mus mauris vitae ultricies leo. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Ut sem viverra aliquet eget sit amet tellus cras. Vitae turpis massa sed elementum tempus egestas sed sed risus. Nulla malesuada pellentesque elit eget gravida cum. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Purus in massa tempor nec feugiat nisl pretium. Nibh praesent tristique magna sit amet purus gravida quis. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Vel risus commodo viverra maecenas accumsan lacus.',
        featured: true
    },
    {
        photo: chadYes,
        name: 'Steve McSteverson',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Feugiat nisl pretium fusce id velit. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Tincidunt eget nullam non nisi est sit. Nascetur ridiculus mus mauris vitae ultricies leo. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Ut sem viverra aliquet eget sit amet tellus cras. Vitae turpis massa sed elementum tempus egestas sed sed risus. Nulla malesuada pellentesque elit eget gravida cum. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Purus in massa tempor nec feugiat nisl pretium. Nibh praesent tristique magna sit amet purus gravida quis. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Vel risus commodo viverra maecenas accumsan lacus.',
        featured: true
    },
    {
        photo: chadYes,
        name: 'Chad McChadderson',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Feugiat nisl pretium fusce id velit. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Tincidunt eget nullam non nisi est sit. Nascetur ridiculus mus mauris vitae ultricies leo. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Ut sem viverra aliquet eget sit amet tellus cras. Vitae turpis massa sed elementum tempus egestas sed sed risus. Nulla malesuada pellentesque elit eget gravida cum. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Purus in massa tempor nec feugiat nisl pretium. Nibh praesent tristique magna sit amet purus gravida quis. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Vel risus commodo viverra maecenas accumsan lacus.',
        featured: false
    },
    {
        photo: chadYes,
        name: 'Joe McJosephson',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Feugiat nisl pretium fusce id velit. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Tincidunt eget nullam non nisi est sit. Nascetur ridiculus mus mauris vitae ultricies leo. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Ut sem viverra aliquet eget sit amet tellus cras. Vitae turpis massa sed elementum tempus egestas sed sed risus. Nulla malesuada pellentesque elit eget gravida cum. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Purus in massa tempor nec feugiat nisl pretium. Nibh praesent tristique magna sit amet purus gravida quis. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Vel risus commodo viverra maecenas accumsan lacus.',
        featured: false
    },
    {
        photo: chadYes,
        name: 'Boaty McBoatface',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Feugiat nisl pretium fusce id velit. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Tincidunt eget nullam non nisi est sit. Nascetur ridiculus mus mauris vitae ultricies leo. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Ut sem viverra aliquet eget sit amet tellus cras. Vitae turpis massa sed elementum tempus egestas sed sed risus. Nulla malesuada pellentesque elit eget gravida cum. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Purus in massa tempor nec feugiat nisl pretium. Nibh praesent tristique magna sit amet purus gravida quis. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Vel risus commodo viverra maecenas accumsan lacus.',
        featured: false
    },
    {
        photo: chadYes,
        name: 'Elvis Presley',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Feugiat nisl pretium fusce id velit. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Tincidunt eget nullam non nisi est sit. Nascetur ridiculus mus mauris vitae ultricies leo. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Ut sem viverra aliquet eget sit amet tellus cras. Vitae turpis massa sed elementum tempus egestas sed sed risus. Nulla malesuada pellentesque elit eget gravida cum. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Purus in massa tempor nec feugiat nisl pretium. Nibh praesent tristique magna sit amet purus gravida quis. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Vel risus commodo viverra maecenas accumsan lacus.',
        featured: false
    },
    {
        photo: chadYes,
        name: 'The Moon',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Feugiat nisl pretium fusce id velit. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Tincidunt eget nullam non nisi est sit. Nascetur ridiculus mus mauris vitae ultricies leo. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Ut sem viverra aliquet eget sit amet tellus cras. Vitae turpis massa sed elementum tempus egestas sed sed risus. Nulla malesuada pellentesque elit eget gravida cum. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Purus in massa tempor nec feugiat nisl pretium. Nibh praesent tristique magna sit amet purus gravida quis. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Vel risus commodo viverra maecenas accumsan lacus.',
        featured: false
    },
    {
        photo: chadYes,
        name: 'The Earth',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Feugiat nisl pretium fusce id velit. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Tincidunt eget nullam non nisi est sit. Nascetur ridiculus mus mauris vitae ultricies leo. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Ut sem viverra aliquet eget sit amet tellus cras. Vitae turpis massa sed elementum tempus egestas sed sed risus. Nulla malesuada pellentesque elit eget gravida cum. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Purus in massa tempor nec feugiat nisl pretium. Nibh praesent tristique magna sit amet purus gravida quis. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Vel risus commodo viverra maecenas accumsan lacus.',
        featured: false
    }
];

const Testimonials = () => {
    const [photoRight, setPhotoRight] = useState(window.innerWidth > 768);

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && !photoRight) setPhotoRight(true);
        else if (window.innerWidth <= 768 && photoRight) setPhotoRight(false);
    });

    return (
        <div className="Testimonials">
            <div className="Testimonials-content">
                {!photoRight && <div className="Testimonials-photo" style={{ backgroundImage: `url(${testimonialsPhoto})` }}>
                    <div className="Testimonials-image-overlay-left" />
                </div>}
                <Carousel className="Testimonials-carousel" pause="hover" controls={false}>
                    {testimonials.filter(testimonial => testimonial.featured).map((testimonial, i) => (
                        <Carousel.Item className="Testimonials-carousel-item" interval={3000} key={i}>
                            <div className="Testimonials-customer">
                                <CustomerPhoto photo={testimonial.photo} />
                                <div className="Testimonials-name">{testimonial.name.toUpperCase()}</div>
                            </div>
                            <div className="Testimonials-text">{testimonial.text}</div>
                        </Carousel.Item>
                    ))}
                </Carousel>
                {photoRight && <div className="Testimonials-photo" style={{ backgroundImage: `url(${testimonialsPhoto})` }}>
                    <div className="Testimonials-image-overlay-left" />
                </div>}
            </div>
            <div className="Testimonials-main">
                {testimonials.filter(testimonial => !testimonial.featured).map((testimonial, i) => (
                    <div key={i} className="Testimonial-card">
                        <div className="Testimonials-customer">
                            <CustomerPhoto photo={testimonial.photo} />
                            <div className="Testimonials-name">{testimonial.name.toUpperCase()}</div>
                        </div>
                        <div className="Testimonials-text">{testimonial.text}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials;
