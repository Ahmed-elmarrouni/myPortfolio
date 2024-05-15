import './study.css';

function Study() {
    return (
        <div className="vertical-line">
            <div className="left-section">
                <h1 className='title'>Left Section</h1>
                <p className='subtitle'>This is the content of the left section.</p>
            </div>
            <div className="right-section">
                <h1 className='title'>Right Section</h1>
                <p className='subtitle'>This is the content of the right section.</p>
            </div>
        </div>
    );
}

export default Study;
