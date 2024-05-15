import { useEffect, useState } from 'react';
import './skills.css';
// import Slider from 'react-slick';
import axios from 'axios';

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


    return (
        <>
            <h1 className="skills-title">Skills</h1>
            <div className="slider-container">
                {skills.map((item) => (
                    <div key={item.id} className="slide">
                        <img src={item.skillSvg} alt={item.skillName} className="skill-icon" />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Skills;
