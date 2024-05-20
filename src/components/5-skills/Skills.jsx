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

    useEffect(() => {
        getSkills();
        getTools();
    }, []);

    // GET SKILLS FROM DB.JSON
    const getSkills = async () => {
        try {
            const res = await axios.get('http://localhost:3000/skills');
            setSkills(res.data);
        } catch (error) {
            console.error("Error fetching skills data:", error);
        }
    };

    // GET TOOLS FROM DB.JSON
    const getTools = async () => {
        try {
            const res = await axios.get('http://localhost:3000/tools');
            setTools(res.data);
        } catch (error) {
            console.error("Error fetching tools data:", error);
        }
    };

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
                    {skills.map((item, index) => (
                        <motion.div
                            ref={skillsInViewRef}
                            layout
                            initial="hidden"
                            animate={skillsInView ? "visible" : "hidden"}
                            variants={variants}
                            transition={{ type: "spring", damping: 8, stiffness: 50, delay: index * 0.1 }}
                            key={item.id}
                            className="slide"
                        >
                            <img src={item.skillSvg} alt={item.skillName} className="skill-icon" />
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
