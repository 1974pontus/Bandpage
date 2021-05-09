import React from 'react';
import './styles.scss';
import videoSource from '../../../assets/bg-video.mp4';
import logo from '../../../assets/logo.svg';


const HeroMedia = () => {
    return (
        <div className="Container" >
            <video autoPlay="autoplay" loop="loop" muted className="Video" >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="Content">
                <div className="SubContent">
                    <img
                        src={logo}
                        alt="profile" />
                    <p>Learn how to develope React projects</p>
                    <button type="button" className="btn btn-outline-dark">View the course</button>
                </div>
            </div>
        </div>
    )
}

export default HeroMedia
