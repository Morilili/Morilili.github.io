import './Intro.css';

function Intro(props) {
    return (
        <div className={props.className} id='box'>
            <h1 className={props.className} id='name'>MORRIS HO</h1>
            <p className={props.className} id='para'>Explore around the picture to find out more :)</p>
        </div>
    );
}

export default Intro
