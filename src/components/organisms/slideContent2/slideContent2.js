import React from 'react';

import './slideContent2.css';

export default function SlideContent(props) {
    let Background = process.env.PUBLIC_URL + props.path
    return (
        <div className="container">
            <div className="slide-content-text-2">
                <h1 className="slide-title-2">{props.title}</h1>
                <p className="slide-paragraph-2">Cras ac mi diam. Donec condimentum eget
                egestas. Nam diam eros, convallis quis justo in,
                pellentesque arcu convallis quis justo in, dictum.
Aenean vehicula accumsan rhoncus. as </p>
            </div>
            <div className="slide-content-image-2" style={{ backgroundImage: `url(${Background})` }}>

            </div>
        </div>
    )
}