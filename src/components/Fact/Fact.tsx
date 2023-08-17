import React from "react";
import "./Fact.css";

interface IPropsFact {
    number: number
    title: string
    description: string
}

function Fact(props: IPropsFact) {
    return(
        <li className="fact">
            <span className="fact__number">{props.number}</span>
            <h3 className="fact__title">{props.title}</h3>
            <p className="fact__description">{props.description}</p>
        </li>
    )
}

export default Fact;
