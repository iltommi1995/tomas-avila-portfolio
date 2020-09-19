import React from 'react';
import SocialIcon from '../../atoms/socialIcon/socialIcon';

import './mySocials.scss';

export default function MySocials() {
    return (
        <div className="my-socials">
            <p>My socials:</p>
            <div className="my-social-icons">
                <SocialIcon link="https://www.linkedin.com/in/tom%C3%A0s-daniel-avila-visintin-2b5497170/" imgPath="/img/social_icons/linkedin.png" />
                <SocialIcon link="https://www.facebook.com/tomas.avila.315/" imgPath="/img/social_icons/facebook.png" />
                <SocialIcon link="https://www.instagram.com/tomasavila1995/" imgPath="/img/social_icons/instagram.png" />
                <SocialIcon link="https://www.youtube.com/channel/UCM9VcbN0xkcJERMXiS5RH-Q" imgPath="/img/social_icons/youtube.png" />
                <SocialIcon link="https://open.spotify.com/user/1172080907?si=dt2JobNkQkCXAsxBxP9wJg" imgPath="/img/social_icons/spotify.png" />
                <SocialIcon link="https://letterboxd.com/ilTommi/" imgPath="/img/social_icons/letterboxd.png" />
                <SocialIcon link="https://www.goodreads.com/user/show/108154736-tom-s-avila" imgPath="/img/social_icons/goodreads.png" />
            </div>
        </div>
    )
}