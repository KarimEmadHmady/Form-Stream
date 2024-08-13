import '../src/Contact.css'
import Swal from 'sweetalert2';
import {form} from '../src/assets/image.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { background, image, header } from '../src/assets/image.js';



const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    formData.append("access_key", "069348b3-ea90-46ff-aba1-dad6760f67d2");
    
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
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

  return (
    <>
        <div className="container">
    <img src={header} className='header-image' alt="Header" />
    <div className="dev-image">
      <img src={image} alt="" className='image-div' />
    </div>
    <div className="dev-form">
    <section className='contact' style={{ backgroundImage: `url(${form})`, backgroundSize: '100% 124%', backgroundPosition: 'center', backgroundRepeat:'no-repeat' }}>
      <form onSubmit={onSubmit}>
        <h2>Get In Touch</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" className="field" placeholder='Enter Your Name' name='Name' required />
        </div>

        <div className="input-box">
          <label>Email Address</label>
          <input type="email" className="field" placeholder='Enter Your Email' name='Email' required />
        </div>

        <div className="input-box">
          <label>The Subject</label>
          <input type="text" className="field" placeholder='Enter Your Subject' name='Subject' />
        </div>

        <div className="input-box">
          <label>Your Message</label>
          <textarea className="field mess" placeholder='Enter Your Message' name='Message' required></textarea>
        </div>

        <button type='submit'>Send Message</button>
      </form>
    </section>
    </div>
    </div>
      <div className="footer">
        <img src={background} alt="" className='image-footer' />
        <div className="content">
          <h6>thanks for submit</h6>
          <a href="https://www.instagram.com/streamcreations.eg/"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.facebook.com/streamcreations.eg/"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.youtube.com/channel/UCt40GQHfzyFkRXm3M2KqP6g"><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="https://wa.me/message/NBBT6CP3HULPF1"><FontAwesomeIcon icon={faWhatsapp} /></a>
          <a href="https://www.linkedin.com/company/streamcreations/"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
    </>
  );
}

export default Contact;
