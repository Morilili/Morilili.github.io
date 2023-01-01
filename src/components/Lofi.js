import React from 'react';
import './Lofi.css';
import lofi from '../assets/lofi.mp3';
    
class Lofi extends React.Component {
    state = {
        playing: false
    }
    audio = new Audio(lofi);
    
    componentDidMount() {
        this.audio.addEventListener('ended', () => this.setState({ play: false }));
    }
      
    componentWillUnmount() {
        this.audio.removeEventListener('ended', () => this.setState({ play: false }));  
    }
    
    togglePlay = () => {
        this.setState({ playing: !this.state.playing }, () => {
            this.state.playing ? this.audio.play() : this.audio.load();
        });
    }

    render() {
        this.audio.volume = 0.5;
        this.audio.loop = true;
        return (
            <button className={this.props.className} id='lofi' onClick={this.togglePlay} ></button>
        )
    }
}

export default Lofi;