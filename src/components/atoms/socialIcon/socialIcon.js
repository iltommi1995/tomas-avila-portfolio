import React from 'react';


export default function SocialIcon(props) {
    return (
        <a href={props.link} target="_blank">
            <img src={process.env.PUBLIC_URL + props.imgPath} />
        </a>
    )
}