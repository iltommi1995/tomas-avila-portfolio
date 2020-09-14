import React, { useState } from 'react'

import SlideContent from '../../organisms/slideContent';
import SlideContent2 from '../../organisms/slideContent2';
import '../../../App.css'

export default function Slider(props) {

    let sliderArr = [<SlideContent title="Cinema site" path="/img/position_1.png" developed="React, html 5, css 3, Java Script" text="Site made using React. It's the first project i developed with React, for an university course." />, <SlideContent2 title="Slide 2" path="/img/position_2.png" />, <SlideContent2 title="Slide 3" path="/img/position_3.png" />, <SlideContent title="Slide 4" path="/img/position_4.png" />, <SlideContent title="Slide 5" path="/img/position_1.png" />]



    const [x, setX] = useState(0)


    const goUp = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    }

    const goDown = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100)

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
                sliderArr.map((item, index) => {
                    return (
                        <div className="slide" style={{
                            transform: `translateY(${x}%)`
                        }}>
                            {item}
                        </div>
                    )
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
                <div className={x === -300 ? 'rounded-selector rounded-selector-active' : 'rounded-selector'} id="4" onClick={goTo} ></div>
                <div className={x === -400 ? 'rounded-selector rounded-selector-active' : 'rounded-selector'} id="5" onClick={goTo} ></div>
            </div>

        </div >
    )
}