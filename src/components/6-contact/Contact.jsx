import './contact.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Lottie from 'lottie-react';
import contact from "../../../public/animation/contact.json";

function Contact() {
  const [formStatus, setFormStatus] = useState('Send Message');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3en7llb', 'template_4renhmb', e.target, {
        publicKey: 'rHIOrNK_gaf0FWLgF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setFormStatus('Sent');
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          setFormStatus('Error');
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <>
      <section className='contact-me' id="contact">
        <h1 className='title'>
          <span className='icon-envelope'></span>
          Contact me
        </h1>
        <h3 className='subtitle'>Don&apos;t be shy! Hit me up! 👇</h3>
        <div className='flex'>
          <form onSubmit={sendEmail} className='' method='Post'>
            <div>
              <label htmlFor='fullName'>Full &nbsp; Name  &nbsp; &nbsp; &nbsp;:</label>
              <input required type="text" placeholder="Full Name" name="name" id='fullName' value={formData.name} onChange={handleInputChange} />
            </div>
            <br />
            <div>
              <label htmlFor='email'>Email Address :</label>
              <input required type="email" placeholder="Email Address" name="email" id='email' value={formData.email} onChange={handleInputChange} />
            </div>
            <div className='flex' style={{ marginTop: "24px" }}>
              <label htmlFor="message">Your Message :</label>
              <textarea required id='message' placeholder='Message' name="message" value={formData.message} onChange={handleInputChange}></textarea>
            </div>
            <button className='send' type="submit">
              {formStatus}
              <span className='icon-send' style={{ marginLeft: "35px" }}></span>
            </button>
          </form>


          <div className='animation'>
            <Lottie style={{ height: 500 }} animationData={contact} />

          </div>

        </div>
      </section>
    </>
  )
}

export default Contact;
