import './study.css';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Study() {

    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 }, 
    };

    useInView({
        triggerOnce: true,
        threshold: 0.5, 
    });

    const { ref: toolsInViewRef, inView: toolsInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });




    return (
        <>
            <h1 className='education'>Education</h1>
            <div className="vertical-line">
                <div className="circle top"></div>
                <motion.div
                    ref={toolsInViewRef}
                    layout
                    initial="hidden"
                    animate={toolsInView ? "visible" : "hidden"}
                    variants={variants}
                    transition={{ type: "spring", damping: 10, stiffness: 100, delay: 0.2 }}
                    className="left">
                    <h1 className='title'>Specialized Technician in Full-Stack Development</h1>
                    <h3 className='subtitle'>ISTA Tetouan Park - Tetouan, Morocco</h3>
                    <p className='date'>2022 - 2024</p>
                </motion.div>
                <div className="circle middle"></div>


                <motion.div
                    ref={toolsInViewRef}
                    layout
                    initial="hidden"
                    animate={toolsInView ? "visible" : "hidden"}
                    variants={variants}
                    transition={{ type: "spring", damping: 10, stiffness: 100, delay: 0.2 }}

                    className="right">
                    <h1 className='title'>High School Diploma in Mechanical Technology Science, STM</h1>
                    <h3 className='subtitle'>Imam Al Ghazali Technical High School - Tetouan, Morocco</h3>
                    <p className='date'>2022</p>
                </motion.div>
            </div>
        </>
    );
}

export default Study;
