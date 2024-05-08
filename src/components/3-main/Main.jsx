import './main.css';


function Main() {
    return (
        <>
            <main className='flex'>
                <section className='flex left-section'>
                    <button className='active'>All projects</button>
                    <button>HTML & CSS</button>
                    <button>JavaScript</button>
                    <button>ReactJs</button>
                    <button>Laravel</button>
                    <button>Python</button>
                </section>

                <section className='right-section flex'>
                    {["aa", "bb", "cc", "dd", 'ee'].map((item) => {
                        return (
                            <article key={item} className='card'>
                                <img src="./noImage.png" width={266} height={200} alt="projectImg" />

                                <div className='box' style={{ width: "266px" }}>
                                    <h1 className='title'>Project Title</h1>
                                    <p className='subtitle'>As a full stack developer, Im passionate about crafting seamless digital experiences. Specializing in web development, I bring a blend of front-end and back-end expertise to every project.</p>

                                    <div className='flex icons'>
                                        <div className='icon-github'></div>
                                        <a href="#" className='more' >Learn more</a>
                                    </div>
                                </div>
                            </article>

                        );
                    })}




                </section>
            </main>
        </>
    )
}

export default Main
