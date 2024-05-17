import './hero.css';
import { motion } from "framer-motion"


function Hero() {
  return (
    <>

      <section className='hero flex'>

        <div className='left-secton' >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className='title'>Ahmed El marrouni 👋
          </motion.h1>
          <p className='subtitle'>As a full stack developer, I&apos;m passionate about crafting seamless digital experiences. Specializing in web development, I bring a blend of front-end and back-end expertise to every project. With a collaborative mindset and a dedication to professional growth, I tackle challenges with resilience and determination, driving innovation in the evolving tech landscape.</p>

          <div className="allicons flex">

            <div>
              <a href='https://www.linkedin.com/in/ahmed-el-marrouni-0484a2272/' target='_blank' className='icon icon-linkedin'></a>
            </div>
            <div>
              <a href='https://github.com/Ahmed-elmarrouni' target='_blank' className='icon icon-github'></a>
            </div>
            <div>
              <a href='mailto:ahmedelmarrouni1@gmail.com' target='_blank' className='icon icon-envelope'></a>
            </div>


          </div>
        </div>

        <div className='right-section animation' >
          <img src='/public/noImage.png' className='img' alt='Ahmed'></img>
        </div>
      </section>

    </>
  )
}

export default Hero
