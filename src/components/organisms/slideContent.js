import React from 'react';


export default function SlideContent(props) {
    let Background = process.env.PUBLIC_URL + props.path
    return (
        <div className="container">
            <div className="slide-content-text">
                <h1 className="slide-title">{props.subTitle}</h1>
                <p className="slide-paragraph">{props.text} </p>
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