import React, { useState } from 'react';

import SlideContent from '../../organisms/slideContent/slideContent';
import SlideContent2 from '../../organisms/slideContent2/slideContent2';

import './hobbies.css';

import Data from '../../../data/hobbies.json';

export default function Slider(props) {

    const [x, setX] = useState(0)

    const goUp = () => {
        x === 0 ? setX(-100 * (Data.length - 1)) : setX(x + 100);
    }

    const goDown = () => {
        x === -100 * (Data.length - 1) ? setX(0) : setX(x - 100)

    }

    const goTo = (event) => {
        let value = parseInt(event.target.id) * 100
        setX(100 - value)
    }

    const newFunc = (KeyboardEvent) => {
        console.log("probva " + KeyboardEvent.key)
        /*if (KeyboardEvent.key = "KeyUp") {
            x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
        }*/

    }


    return (
        <div className="slider">
            {
                Data.map((item, index) => {
                    if (item.type === "SlideContent") {
                        return (
                            <div className="slide" style={{
                                transform: `translateY(${x}%)`
                            }}>
                                <SlideContent title={item.title} path={item.path} developed={item.developed} text={item.text} video={item.video} link={item.link} />
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className="slide" style={{
                                transform: `translateY(${x}%)`
                            }}>
                                <SlideContent2 title={item.title} path={item.path} developed={item.developed} text={item.text} video={item.video} link={item.link} />
                            </div>
                        )
                    }
                })
            }
            <div id="go-up" onClick={goUp}>
                <img src={process.env.PUBLIC_URL + "/img/arrow_up.png"} />
            </div>
            <div id="go-down" onClick={goDown}>
                <img src={process.env.PUBLIC_URL + "/img/arrow_down.png"} />
            </div>
            <div id="slide-count">
                <div className={x === 0 ? 'rounded-selector rounded-selector-active' : 'rounded-selector'} id="1" onClick={goTo} ></div>
                <div className={x === -100 ? 'rounded-selector rounded-selector-active' : 'rounded-selector'} id="2" onClick={goTo} ></div>
                <div className={x === -200 ? 'rounded-selector rounded-selector-active' : 'rounded-selector'} id="3" onClick={goTo} ></div>
            </div>

        </div >
    )
}