import "../pages/jops.css";
import React, { useState, useEffect } from 'react';
import Swal from "sweetalert2";
import { form, background, image, header } from "../assets/image.js"; // Fix import path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const jops = () => {
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

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isVisible, setIsVisible] = useState(false);


  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
           <img src={header} className="header-image" alt="Header" />
        <div className="dev-image">
          <img src={image} alt="" className="image-div" />
        </div> 
      <div className="container">

        <div className="dev-form">

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
              <h2>Job Application</h2>

              <div className="input-box frist-input-box">
                <label>Position Applied for:</label>
                <input
                  type="text"
                  className="field"
                  placeholder="Enter the position"
                  name="Position"
                  required
                />
              </div>

              <h3>Personal Data</h3>

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
                <label>Address:</label>
                <input
                  type="text"
                  className="field"
                  placeholder="Enter Your Address"
                  name="Address"
                  required
                />
              </div>

              <div className="input-box">
                <label>City:</label>
                <input
                  type="text"
                  className="field"
                  placeholder="Enter Your City"
                  name="City"
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
                <label>Age:</label>
                <input
                  type="number"
                  className="field"
                  placeholder="Enter Your Age"
                  name="Age"
                  required
                />
              </div>

              <div className="input-box">
                <label>Your last position:</label>
                <input
                  type="text"
                  className="field"
                  placeholder="Enter Your Last Position"
                  name="LastPosition"
                />
              </div>

              <div className="input-box">
                <label>Your current/last salary:</label>
                <input
                  type="number"
                  className="field"
                  placeholder="Enter Your Current/Last Salary"
                  name="CurrentSalary"
                />
              </div>

              <div className="input-box">
                <label>English Level:</label>
                <input
                  type="text"
                  className="field"
                  placeholder="Enter Your English Level"
                  name="EnglishLevel"
                />
              </div>

              <div className="input-box">
                <label>Arabic Level:</label>
                <input
                  type="text"
                  className="field"
                  placeholder="Enter Your Arabic Level"
                  name="ArabicLevel"
                />
              </div>

              <div className="input-box">
                <label>Military Status:</label>
                <input
                  type="text"
                  className="field"
                  placeholder="Enter Your Military Status"
                  name="MilitaryStatus"
                />
              </div>

              <div className="input-box">
                <label>Marital Status:</label>
                <input
                  type="text"
                  className="field"
                  placeholder="Enter Your Marital Status"
                  name="MaritalStatus"
                />
              </div>

              <div className="input-box">
                <label>When you can be available?</label>
                <input
                  type="text"
                  className="field"
                  placeholder="Enter Availability"
                  name="Availability"
                />
              </div>

              <h3>Education</h3>

              <div className="input-box">
                <label>Completed (Bachelor-Master-PhD-other):</label>
                <input
                  type="text"
                  className="field"
                  placeholder="Enter Degree Completed"
                  name="Degree"
                  required
                />
              </div>

              <div className="input-box">
                <label>Name of Institution:</label>
                <input
                  type="text"
                  className="field"
                  placeholder="Enter Institution Name"
                  name="Institution"
                  required
                />
              </div>

              <div className="input-box">
                <label>Major/Field of Study:</label>
                <input
                  type="text"
                  className="field"
                  placeholder="Enter Your Major"
                  name="Major"
                  required
                />
              </div>

              <div className="input-box">
                <label>Graduation Year:</label>
                <input
                  type="number"
                  className="field"
                  placeholder="Enter Graduation Year"
                  name="GraduationYear"
                  required
                />
              </div>

              <h3>Recommendations</h3>

              <div className="input-box">
                <label>
                  Recommendations (Name - Phone Number - Job Title):
                </label>
                <textarea
                  className="field mess"
                  placeholder="Enter Recommendation Details"
                  name="Recommendations"
                ></textarea>
              </div>

              <h3>References</h3>

              <div className="input-box">
                <label>
                  References (At least two professional references):
                </label>
                <textarea
                  className="field mess"
                  placeholder="Enter References (Name - Contact Info)"
                  name="References"
                  required
                ></textarea>
              </div>


              <button type="submit">Submit Application</button>
            </form>
          </section> 
          
        </div>

      </div>
      <div className="footer footer-jops">
          <img src={background} alt="" className="image-footer" />
          <div className="content">
            <h6>Thanks For Your Cooperation</h6>
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

export default jops;
