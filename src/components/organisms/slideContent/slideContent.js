import React from 'react';

import Player from "../../molecules/player";

export default function SlideContent(props) {
    let Background = process.env.PUBLIC_URL + props.path
    return (
        <div className="container">
            <div className="slide-content-text">
                <h1 className="slide-title">{props.subTitle}</h1>
                <p className="slide-paragraph">{props.text} </p>
                <div className="slide-video">
                    <Player src={process.env.PUBLIC_URL + "/video/project_cinema.mp4"} />
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