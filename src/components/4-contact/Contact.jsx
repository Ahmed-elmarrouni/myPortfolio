
import './contact.css';

function Contact() {
  return (
    <>

      <section className='contact-me'>
        <h1 className='title'>
          <span className='icon-envelope'></span>
          Contact me
        </h1>

        <p className='subtitle'>Contact me for more information </p>

        <div className='flex'>
          <form className=''>
            <div>
              <label htmlFor='email' >Email Address :</label>
              <input required type="email" placeholder="Email Address" id='email' />
            </div>

            <div className='flex' style={{ marginTop: "24px" }}>
              <label htmlFor="message" >Your Message :</label>
              <textarea required id='message' placeholder='message' ></textarea>
            </div>

            <button className='send'>
              Send 
              <span className='icon-send' style={{marginLeft:"35px"}}></span></button>
          </form>
          <div className='animation '>
            animation</div>
        </div>
      </section>

    </>
  )
}

export default Contact
