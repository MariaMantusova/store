import React from "react";
import "./PreviewMax.css";
import {Link} from "react-router-dom";

interface IPropsPreviewMax {
    link: string
    image: string
    title: string
    classBlock?: string
}

function PreviewMax(props: IPropsPreviewMax) {
    return(
        <article className={`preview-max ${props.classBlock}`} style={{backgroundImage: `url(${props.image})`}}>
            <h2 className="preview-max__title">{props.title}</h2>
            <Link className="preview-max__link" to={props.link}>Перейти &#10230;</Link>
        </article>
    )
}

export default PreviewMax;
