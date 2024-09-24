import "../src/Contact.css";
import React, { useState, useEffect } from 'react';
import Swal from "sweetalert2";
import { form } from "../src/assets/image.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { background, image, header } from "../src/assets/image.js";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success",
        iconColor: "gold",
        confirmButtonColor: "gold",
      });
      event.target.reset();
    }
  };

  const [isVisible, setIsVisible] = useState(false);

  // دالة لعرض الزر عند التمرير لأسفل
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // دالة للتمرير إلى أعلى الصفحة
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // التمرير يكون سلسًا
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      <img src={header} className="header-image" alt="Header" />

      <div className="container">

        <div className="dev-form">
        <div className="content-about">
        <div className="dev-image">
          <img src={image} alt="" className="image-div" />
        </div> 
        <div className="contentAndDisc">
          <br />
          <h3>Digital Marketing Solutions</h3>
          <br />
          <p>With Stream Creations you could get the best digital marketing 
            plan for your project to get into the market with your full power</p>
             <br />
             <h2>Boost your Success</h2>
        </div>
        </div>
        <section
            className="contact"
            style={{
              backgroundImage: `url(${form})`,
              backgroundSize: "110% 124%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "fit-content" ,
            }}
          >
 <form onSubmit={onSubmit}>
  <h2>Contact Us</h2>

  <div className="input-box">
    <label>Full Name:</label>
    <input
      type="text"
      className="field"
      placeholder="Enter Your Full Name"
      name="FullName"
      required
    />
  </div>

  <div className="input-box">
    <label>Email Address:</label>
    <input
      type="email"
      className="field"
      placeholder="Enter Your Email"
      name="Email"
      required
    />
  </div>

  <div className="input-box">
    <label>Phone Number:</label>
    <input
      type="tel"
      className="field"
      placeholder="Enter Your Phone Number"
      name="PhoneNumber"
    />
  </div>

  <div className="input-box">
    <label>Message:</label>
    <textarea
      className="field mess"
      placeholder="Enter Your Message"
      name="Message"
      required
    ></textarea>
  </div>

  <button type="submit">Send Message</button>
</form>

          </section> 
          
        </div>

      </div>
      <div className="footer footer-contact">
          <img src={background} alt="" className="image-footer" />
          <div className="content">
            <h6>Get in Touch</h6>
            <a href="https://www.instagram.com/streamcreations.eg/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/streamcreations.eg/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.youtube.com/channel/UCt40GQHfzyFkRXm3M2KqP6g">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://wa.me/message/NBBT6CP3HULPF1">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="https://www.linkedin.com/company/streamcreations/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
      </div> 
        
       <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-button">
          ↑ 
        </button>
      )}
    </div> 

    </>
  );
};

export default Contact;
