import React from 'react';


export default function SlideContent(props) {
    let Background = process.env.PUBLIC_URL + props.path
    return (
        <div className="container">
            <div className="slide-content-text">
                <h1 className="slide-title">{props.title}</h1>
                <p className="slide-paragraph">Cras ac mi diam. Donec condimentum eget
                egestas. Nam diam eros, convallis quis justo in,
                pellentesque arcu convallis quis justo in, dictum.
Aenean vehicula accumsan rhoncus. as </p>
            </div>
            <div className="slide-content-image" style={{ backgroundImage: `url(${Background})` }}>
                <h2>
                    Primo progetto
                </h2>
            </div>
        </div>
    )
}