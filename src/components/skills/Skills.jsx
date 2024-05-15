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

    // const settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     initialSlide: 0,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 initialSlide: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // };

    return (
        <>
            <h1 className="skills-title">Skills</h1>
            <div className="slider-container">
                {/* <Slider {...settings}> */}
                    {skills.map((item) => (
                        <div key={item.id} className="slide">
                            <img src={item.skillSvg} alt={item.skillName} className="skill-icon" />
                        </div>
                    ))}
                {/* </Slider> */}
            </div>
        </>
    );
}

export default Skills;
