import React, { useState } from "react";
import MySkills from "../../molecules/mySkills/mySkills";
import MySocials from "../../molecules/mySocials/mySocials";

import "./whoIAm.scss"

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
            <MySkills />
            <MySocials />
        </div>
    );
}
