import React from "react";

export default function RandomNumber(props) {

    const min = Math.ceil(props.min)
    const max = Math.floor(props.max)

    const result = Math.floor(Math.random() * (max - min + 1) + min)

    return (
        <p>{result}</p>
    )
}