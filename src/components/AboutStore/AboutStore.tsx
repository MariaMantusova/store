import React from "react";
import "./AboutStore.css";
import {facts} from "../../data/data";
import Fact from "../Fact/Fact";

function AboutStore() {
    return(
        <section className="about-store">
            <h2 className="about-store__title">Почему именно мы?</h2>
            <ul className="about-store__facts">
            {facts.map(fact =>
                <Fact number={fact.id} description={fact.description} title={fact.name} key={fact.id}/>
            )}
            </ul>
        </section>
    )
}

export default AboutStore;
