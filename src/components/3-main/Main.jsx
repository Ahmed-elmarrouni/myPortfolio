import { useState, useEffect } from 'react';
import axios from 'axios';
import './main.css';

function Main() {
    const [currentActive, setCurrentActive] = useState("All");
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    function getData() {
        axios.get('http://localhost:3000/projects')
            .then((res) => {
                setProjects(res.data);
                setFilteredProjects(res.data);
            })
            .catch((error) => {
                console.error("Error fetching projects data:", error);
            });
    }

    const handleCategoryChange = (category) => {
        setCurrentActive(category);
        if (category === "All") {
            setFilteredProjects(projects);
        } else {
            const filtered = projects.filter(project => project.category === category);
            setFilteredProjects(filtered);
        }

    };





    return (
        <main className='flex'>
            <section className='flex left-section'>
                <button onClick={() => handleCategoryChange("All")} className={currentActive === "All" ? 'active' : null}>All projects</button>
                <button onClick={() => handleCategoryChange("htmlcss")} className={currentActive === "htmlcss" ? 'active' : null}>HTML & CSS</button>
                <button onClick={() => handleCategoryChange("javascript")} className={currentActive === "javascript" ? 'active' : null}>JavaScript</button>
                <button onClick={() => handleCategoryChange("react")} className={currentActive === "react" ? 'active' : null}>ReactJs</button>
                <button onClick={() => handleCategoryChange("laravel")} className={currentActive === "laravel" ? 'active' : null}>Laravel</button>
                <button onClick={() => handleCategoryChange("python")} className={currentActive === "python" ? 'active' : null}>Python</button>
            </section>

            <section className='right-section flex'>
                {filteredProjects && filteredProjects.map((project) => (
                    <article key={project.id} className='card'>
                        <img src={project.imgpath} width={266} height={200} alt="projectImg" />

                        <div className='box' style={{ width: "266px" }}>
                            <h1 className='title'>{project.projectTitle}</h1>
                            <p className='subtitle'>As a full stack developer, Im passionate about crafting seamless digital experiences. Specializing in web development, I bring a blend of front-end and back-end expertise to every project.</p>

                            <div className='flex icons'>
                                <div className='icon-github'></div>
                                <a href="#" className='more'>Learn more</a>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}

export default Main;
