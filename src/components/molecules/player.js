import React, { Component } from "react";
import ReactPlayer from "react-player";

export default class Player extends Component {
    render() {
        return (
            <ReactPlayer
                url={this.props.src}
                playing={true}
                width="100%"
                height="auto"
                playIcon
                loop={true}
            />
        );
    }
}