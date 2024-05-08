import './hero.css';


function Hero() {
  return (
    <>

      <section className='hero flex'>

        <div className='left-secton' >
          <div className='parent-avatar flex'>
            <img src='./Ahmed.jpg' alt='my profile picture' className='avatar'></img>
            <div className='myname'>Ahmed El marrouni</div>
            <div className='myname icon-verified'></div>
            {/* <div className='icon-verified'></div> */}

          </div>

          <h1 className='title'>Building Digital Worlds: Ahmed El marrouni Portfolio</h1>
          <p className='subtitle'>As a full stack developer, I&apos;m passionate about crafting seamless digital experiences. Specializing in web development, I bring a blend of front-end and back-end expertise to every project. With a collaborative mindset and a dedication to professional growth, I tackle challenges with resilience and determination, driving innovation in the evolving tech landscape.</p>

          <div className="allicons flex">
            <div className='icon icon-linkedin'></div>
            <div className='icon icon-github'></div>
            <div className='icon icon-envelope'></div>
          </div>
        </div>

        <div className='right-secton animation border'>
          animation
        </div>
      </section>

    </>
  )
}

export default Hero
