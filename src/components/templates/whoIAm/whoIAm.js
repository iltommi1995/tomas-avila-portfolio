import React, { useState } from "react";

import "./whoIAm.css"

export default function WhoIAm(props) {

    let MyImage = process.env.PUBLIC_URL + "/img/my_image.jpg"

    return (
        <div className="who-i-am-container">
            <div className="my-image-container">
                <div className="my-image" style={{ backgroundImage: `url(${MyImage})` }}></div>
            </div>
            <div className="my-name">
                <h1>Tomàs Daniel Avila Visintin</h1>
            </div>
            <div className="my-description">
                <p>I'm a frontend web developer, actually working for Italfrigo Srl.<br />I want to become a full stack developer and i'm now trying to learn backend stuff.</p>
            </div>
            <div className="my-skills">
                <p>My skills:</p>
                <div className="my-skills-icons">
                    <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
                    <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
                    <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
                    <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
                    <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
                    <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/graphql/graphql.png" />
                </div>
                <div className="my-socials">
                    <p>My socials:</p>
                    <div className="my-social-icons">
                        <a href="https://www.linkedin.com/in/tom%C3%A0s-daniel-avila-visintin-2b5497170/" target="_blank"><img src={process.env.PUBLIC_URL + "/img/social_icons/linkedin.png"} /></a>
                        <a href="https://www.facebook.com/tomas.avila.315/" target="_blank"><img src={process.env.PUBLIC_URL + "/img/social_icons/facebook.png"} /></a>
                        <a href="https://www.instagram.com/tomasavila1995/" target="_blank"><img src={process.env.PUBLIC_URL + "/img/social_icons/instagram.png"} /></a>
                        <a href="https://www.youtube.com/channel/UCM9VcbN0xkcJERMXiS5RH-Q" target="_blank"><img src={process.env.PUBLIC_URL + "/img/social_icons/youtube.png"} /></a>
                        <a href="https://open.spotify.com/user/1172080907?si=dt2JobNkQkCXAsxBxP9wJg"><img src={process.env.PUBLIC_URL + "/img/social_icons/spotify.png"} /></a>
                        <a href="https://letterboxd.com/ilTommi/" target="_blank"><img src={process.env.PUBLIC_URL + "/img/social_icons/letterboxd.png"} /></a>
                        <a href="https://www.goodreads.com/user/show/108154736-tom-s-avila" target="_blank"><img src={process.env.PUBLIC_URL + "/img/social_icons/goodreads.png"} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
