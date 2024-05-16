import './study.css';

function Study() {
    return (
        <>
            <h1 className='education'>Education</h1>
            <div className="vertical-line">
                <div className="circle top"></div>
                <div className="left">
                    <h1 className='title'>Specialized Technician in Full-Stack Development</h1>
                    <h3 className='subtitle'>ISTA Tetouan Park - Tetouan, Morocco</h3>
                    <p className='date'>2022 - 2024</p>
                </div>
                <div className="circle middle"></div>
                <div className="right">
                    <h1 className='title'>High School Diploma in Mechanical Technology Science, STM</h1>
                    <h3 className='subtitle'>Imam Al Ghazali Technical High School - Tetouan, Morocco</h3>
                    <p className='date'>2022</p>
                </div>
            </div>

        </>

    );
}

export default Study;
