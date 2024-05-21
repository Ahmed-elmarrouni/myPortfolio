import { useEffect, useState, useRef } from 'react';
import './skills.css';
import axios from 'axios';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Skills() {
    const [skills, setSkills] = useState([]);
    const [tools, setTools] = useState([]);
    const skillsRef = useRef();
    const toolsRef = useRef();


    // GET SKILLS FROM MONGODB
    useEffect(() => {
        axios.get("http://localhost:3000/getSkills")
            .then(skills => setSkills(skills.data))
            .catch(err => console.log(err))
    }, []);

    // GET TOOLS FROM MONGODB
    useEffect(() => {
        axios.get("http://localhost:3000/getTools")
            .then(tools => setTools(tools.data))
            .catch(err => console.log(err))
    }, []);


    // Define different animation variants
    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
    };

    // FOR MOTION SKILLS AND TOOLS CARDS
    const { ref: skillsInViewRef, inView: skillsInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: toolsInViewRef, inView: toolsInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <>
            <div id="skills">
                <h1 className="skills-title">⚒️ Languages-Frameworks-Tools ⚒️</h1>

                {/* SKILLS */}
                <div className="slider-container" ref={skillsRef}>
                    {skills.map((skill, index) => (
                        <motion.div
                            ref={skillsInViewRef}
                            layout
                            initial="hidden"
                            animate={skillsInView ? "visible" : "hidden"}
                            variants={variants}
                            transition={{ type: "spring", damping: 8, stiffness: 50, delay: index * 0.1 }}

                            key={skill.id}
                            className="slide"
                        >
                            <img src={skill.skillSvg} alt={skill.skillName} className="skill-icon" />
                        </motion.div>
                    ))}
                </div>

                {/* TOOLS */}
                <div className="slider-container" ref={toolsRef}>
                    {tools.map((tool, index) => (
                        <motion.div
                            ref={toolsInViewRef}
                            layout
                            initial="hidden"
                            animate={toolsInView ? "visible" : "hidden"}
                            variants={variants}
                            transition={{ type: "spring", damping: 8, stiffness: 50, delay: index * 0.1 }}
                            key={tool.id}
                            className="slide"
                        >
                            <img src={tool.skillSvg} alt={tool.skillName} className="skill-icon" />
                        </motion.div>
                    ))}
                </div>

            </div>
        </>
    );
}

export default Skills;
