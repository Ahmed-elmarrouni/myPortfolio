import './hero.css';
import Lottie from 'lottie-react';
import laptopanimation from "../../../public/animation/laptopanimation.json";
import { motion } from "framer-motion"


function Hero() {
  return (
    <>

      <section className='hero flex'>

        <div className='left-secton' >
          <div className='parent-avatar flex'>
            <motion.img
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1.1)" }}
              transition={{ damping: 8, duration: 2, type: "spring", stiffness: 100 }}
              src='./noImage.png' alt='my profile picture' className='avatar'></motion.img>
            <div className='myname' id='primaryName'>Ahmed El marrouni</div>
            <div className='myname icon-verified'></div>
            {/* <div className='icon-verified'></div> */}

          </div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className='title'>Building Digital Worlds: Ahmed El marrouni Portfolio</motion.h1>
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

            {/* <div className='icon icon-linkedin'></div>
            <div className='icon icon-github'></div>
            <div className='icon icon-envelope'></div> */}
          </div>
        </div>

        {/* <div className='right-secton animation'>
          <Lottie  style={{height: 700}} animationData={laptopanimation} />
        </div> */}

        <div className='right-section animation' >
          <Lottie animationData={laptopanimation} style={{ height: 400, width: 400 }} />
        </div>

      </section>

    </>
  )
}

export default Hero
