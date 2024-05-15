import { useEffect, useState } from 'react';
import './skills.css';
import axios from 'axios';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Skills() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const res = await axios.get('http://localhost:3000/skills');
            setSkills(res.data);
        } catch (error) {
            console.error("Error fetching skills data:", error);
        }
    };

    // Define different animation variants
    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
    };

    // FOR MOTION SKILLS CARDS
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <>
            <h1 className="skills-title">⚒️ Languages-Frameworks-Tools ⚒️</h1>
            <div className="slider-container">
                {skills.map((item, index) => (
                    <motion.div
                        ref={ref}
                        layout
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={variants}
                        transition={{ type: "spring", damping: 8, stiffness: 50, delay: index * 0.1 }} // Adjust delay as needed
                        key={item.id}
                        className="slide"
                    >
                        <img src={item.skillSvg} alt={item.skillName} className="skill-icon" />
                    </motion.div>
                ))}
            </div>
        </>
    );
}

export default Skills;
