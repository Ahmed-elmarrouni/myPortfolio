import './hero.css';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Hero() {

  // Define different animation variants
  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: { opacity: 0, scale: 0.8, y: 50 },
  };

  // FOR MOTION the image
  const { ref: skillsInViewRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className='hero flex' id="home">
      <div className='left-section'>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className='title'>
          Ahmed El marrouni 👋
        </motion.h1>
        <p className='subtitle'>
          As a full stack developer, I&apos;m passionate about crafting seamless digital experiences. Specializing in web development, I bring a blend of front-end and back-end expertise to every project. With a collaborative mindset and a dedication to professional growth, I tackle challenges with resilience and determination, driving innovation in the evolving tech landscape.
        </p>


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

        <div className='CvBtn'>
          <a
            className="animated-button"
            href="https://drive.google.com/file/d/17WDYot5t--mvU_hgtetBoB4s0k6rrYOS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            role="button"          >
            <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
            <span className="text">Download CV</span>
            <span className="circleBtn"></span>
            <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
          </a>

        </div>

      </div>

      <motion.div
        ref={skillsInViewRef}
        initial="hidden"
        animate={skillsInView ? "visible" : "hidden"}
        variants={variants}
        transition={{ type: "spring", damping: 15, stiffness: 100, duration: 0.8 }}
        className='right-section animation'>
        <img src='/public/noImage.png' className='img' alt='Ahmed'></img>
      </motion.div>
    </section>
  );
}

export default Hero;
