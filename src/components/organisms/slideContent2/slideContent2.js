import React from 'react';

import Player from "../../molecules/player"

import './slideContent2.scss';

export default function SlideContent(props) {
    let Background = process.env.PUBLIC_URL + props.path
    return (
        <div className="container">
            <div className="slide-content-text-2">
                <div className="slide-video">
                    <Player src={process.env.PUBLIC_URL + props.video} />
                </div>
                <p className="slide-paragraph">{props.text} </p>
                <div className="slide-button">
                    <a href={props.link} target="_blank">Visit the site</a>
                </div>
            </div>
            <div className="slide-content-image-2" style={{ backgroundImage: `url(${Background})` }}>
                <h2>
                    {props.title}
                </h2>
                <p>{props.developed}</p>
            </div>
        </div>
    )
}