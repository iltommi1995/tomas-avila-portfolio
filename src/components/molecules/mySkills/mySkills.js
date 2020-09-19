import React from 'react';
import SkillIcon from '../../atoms/skillIcon/skillIcon';

import './mySkills.scss';

export default function MySkills() {
    return (
        <div className="my-skills">
            <p>My skills:</p>
            <div className="my-skills-icons">
                <SkillIcon imgPath="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
                <SkillIcon imgPath="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
                <SkillIcon imgPath="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
                <SkillIcon imgPath="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
                <SkillIcon imgPath="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
                <SkillIcon imgPath="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/graphql/graphql.png" />
            </div>
        </div>
    )
}
