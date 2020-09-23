import React from 'react';

import Player from "../../molecules/player/player";

import './slideContent.scss';

export default function SlideContent(props) {
    let Background = process.env.PUBLIC_URL + props.path
    return (
        <div className="container">
            <div className="slide-content-text">
                <div className="slide-video">
                    <Player src={process.env.PUBLIC_URL + props.video} />
                </div>
                <p className="slide-paragraph">{props.text} </p>
                <div className="slide-button">
                    <a href={props.link} target="_blank">Visit the site</a>
                </div>
            </div>
            <div className="slide-content-image" style={{ backgroundImage: `url(${Background})` }}>
                <h2>
                    {props.title}
                </h2>
                <p>Developed with: {props.developed}</p>
            </div>
        </div>
    )
}