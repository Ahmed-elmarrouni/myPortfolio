import { useEffect, useState } from 'react';
import './header.css';


function Header() {

    const [showModal, setShowModal] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");

    useEffect(() => {
        if (theme === "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }

    }, [theme]);

    return (
        <>
            <header onClick={() => {
                localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark");
                setTheme(localStorage.getItem("currentMode"));

            }} className='flex'>


                <button onClick={() => { setShowModal(true) }} className='menu icon-menu flex'></button>
                <div />

                <nav>
                    <ul className='flex'>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#education">Education</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>


                <button className='mode flex'>
                    {theme === "dark" ? (<span className='icon-moon-o'></span>) : (<span className='icon-sun'></span>)}
                </button>

                {showModal && (
                    <div className="fixed">
                        <ul className='modal'>
                            <li>
                                <button className='icon-close-outline' onClick={() => { setShowModal(false) }}></button>
                            </li>

                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#education">Education</a>
                            </li>
                            <li>
                                <a href="#skills">Skills</a>
                            </li>
                            <li>
                                <a href="#projects">Projects</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                )}
            </header>
        </>
    )
}

export default Header
