import Carousel from "react-bootstrap/Carousel";
import CustomerPhoto from "./CustomerPhoto";
import { useState } from "react";
import testimonialsPhoto from "./images/therapy.jpg";
import merlinda from "../../assets/merlinda.jpg";
import male from "../../assets/male.jpg";
import female from "../../assets/female.jpg";
import "./Testimonials.css";

const testimonials = [
  {
    photo: female,
    name: "Jill",
    text: "I highly recommend DPT Physical Therapy. Trey is extremely professional and knowledgeable, and he helped me considerably. DPT is an asset to Stephenville and the surrounding communities!",
    featured: false,
  },
  {
    photo: female,
    name: "Penny",
    text: "I highly recommend DPT Physical Therapy! Their personalized support is truly amazing! From scheduling to therapy, they make sure to prioritize my needs. I was fearful the pain and swelling would not improve with my shoulder, but Trey has helped me achieve continued progress! Best of the best for sure!",
    featured: false,
  },
  {
    photo: female,
    name: "Mary",
    text: "Dr. Taylor and Dr. Deaton are awesome! They listen to you and work with you to make sure you get the results you need! Go see them for all your PT needs!",
    featured: true,
  },
  {
    photo: merlinda,
    name: "Merlinda",
    text: "Well I want to shout a big THANK YOU to a great team DPT PHYSICAL THERAPY. They have worked my butt off and got me where I needed to be. A little mishap (on my part) set me back a little. With their expertise I will continue on my own.\nWhat a great facility to work with!! Good luck guys and continued success. ♡",
    featured: true,
  },
  {
    photo: female,
    name: "Gigi",
    text: "I have just finished a successful PT program at DPT. The staff are knowledgeable, professional, patient and attentive. I went to DPT for treatment for pain in my left hip. After they established a workable program and effort at home on my part, I've been able to return to normal activities and the area has been strengthened by program exercise. I would HIGHLY recommend DPT. THANK YOU Trey, Cheyenne and Kristy!",
    featured: false,
  },
  {
    photo: male,
    name: "Ernest",
    text: "Trey and his staff make you feel like a family member. Their concern and knowledge make treatment a pleasant experience.",
    featured: true,
  },
  {
    photo: female,
    name: "Brenda",
    text: "Attention people!!!\nDPT PHYSICAL THERAPY. This is the place to go to. If you have pain, neck, back, they can fix it. My neck feels so much better. Thank you so much Trey Taylor, my physical therapist. I love going to DPT, COME TRY IT OUT...",
    featured: false,
  },
  {
    photo: female,
    name: "Jamie",
    text: "This place is the BEST!!! My daughter was about 8 weeks post op ACL surgery and was not progressing the way her surgeon was liking. Her surgeon provided a strict protocol to be followed. Trey had no issue taking her on and getting to work with her. The amount of progress she has made in the last few weeks is just AMAZING!!! The front office lady is phenomenal, I called with my concerns and was very pleasantly taken care of with the utmost respect and my daughter was in the next day which was even better because at the other place we were going it was always a bother to them. Not here, they are in it for the right reason! Helping and healing and personable. Highly recommend Trey and his entire staff, still home town feel and amazing amazing results, my daughter can now walk and without pain. Thank you so much to the entire staff!",
    featured: false,
  },
];

const Testimonials = () => {
  const [photoRight, setPhotoRight] = useState(window.innerWidth > 768);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && !photoRight) setPhotoRight(true);
    else if (window.innerWidth <= 768 && photoRight) setPhotoRight(false);
  });

  return (
    <div className="Testimonials">
      <div className="Testimonials-content">
        {!photoRight && (
          <div
            className="Testimonials-photo"
            style={{ backgroundImage: `url(${testimonialsPhoto})` }}
          >
            <div className="Testimonials-image-overlay-left" />
          </div>
        )}
        <Carousel
          className="Testimonials-carousel"
          pause="hover"
          controls={false}
        >
          {testimonials
            .filter((testimonial) => testimonial.featured)
            .map((testimonial, i) => (
              <Carousel.Item
                className="Testimonials-carousel-item"
                interval={5000}
                key={i}
              >
                <div className="Testimonials-customer">
                  <CustomerPhoto photo={testimonial.photo} />
                  <div className="Testimonials-name">
                    {testimonial.name.toUpperCase()}
                  </div>
                </div>
                <div className="Testimonials-text">{testimonial.text}</div>
              </Carousel.Item>
            ))}
        </Carousel>
        {/* <div className="Testimonials-placeholder">
                    <h1 className="Testimonials-title">COMING SOON!</h1>
                    <p>If you're a past or current patient of ours and would like your story to be featured here in the future, you can email us at <a className="Testimonials-link" href="mailto:info@dpttherapy.com">info@dpttherapy.com</a>.</p>
                </div> */}
        {photoRight && (
          <div
            className="Testimonials-photo"
            style={{ backgroundImage: `url(${testimonialsPhoto})` }}
          >
            <div className="Testimonials-image-overlay-left" />
          </div>
        )}
      </div>
      <div className="Testimonials-main">
        {testimonials
          .filter((testimonial) => !testimonial.featured)
          .map((testimonial, i) => (
            <div key={i} className="Testimonial-card">
              <div className="Testimonials-customer">
                <CustomerPhoto photo={testimonial.photo} />
                <div className="Testimonials-name">
                  {testimonial.name.toUpperCase()}
                </div>
              </div>
              <div className="Testimonials-text">{testimonial.text}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Testimonials;
