import Study from './components/3-study/Study';
import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Skills from './components/5-skills/Skills';
import Main from './components/4-main/Main'
import Contact from './components/6-contact/Contact'
import Footer from './components/7-footer/Footer'
import { useEffect, useState } from 'react'

function App() {

  const [scrollVisible, setScrollVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setScrollVisible(true);
    } else {
      setScrollVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };




  return (



    <>
      <div className="container">
        <Header  />
        <Hero />
        <div className='divider' />
        <Study />
        <div className='divider' />
        <Skills />
        <div className='divider' />
        <Main />
        <div className='divider' />
        <Contact />
        <div className='divider' />
        <Footer />

        {scrollVisible && (
          <button className='scroll2top icon-cheveron-up' onClick={scrollToTop}></button>
        )}

      </div>

    </>
  )
}

export default App
