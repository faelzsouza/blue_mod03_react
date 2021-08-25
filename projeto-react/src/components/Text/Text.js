import React from "react";
import "./Text.css";

export default class Text extends React.Component {
    render() {
        return <h1>{this.props.texto}</h1>;
    }
}