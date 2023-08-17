import React from "react";
import "./PreviewMin.css";
import {Link} from "react-router-dom";

interface IPropsPreviewMin {
    link: string
    image: string
    title: string
    classTitle?: string
    classBlock?: string
}

function PreviewMin(props: IPropsPreviewMin) {
    return (
        <article className={`preview-min ${props.classBlock}`} style={{backgroundImage: `url(${props.image})`}}>
            <h2 className={`preview-min__title ${props.classTitle}`}>{props.title}</h2>
            <Link className="preview-min__link" to={props.link}>Перейти&nbsp;&#10230;</Link>
        </article>
    )
}

export default PreviewMin;
