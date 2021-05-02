import React from 'react';
import './styles.scss';
import videoSource from '../../../assets/bg-video.mp4';

const HeroMedia = () => {
    return (
        <div className="Container" >
            <video autoPlay="autoplay" loop="loop" muted className="Video" >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default HeroMedia
