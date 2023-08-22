import React from "react";
import "./CatalogItem.css";

interface IPropsCatalogItem {
    title: string
    price: string
    description: string
    image: string
}

function CatalogItem(props: IPropsCatalogItem) {
    return(
        <li className="catalog__item">
            <img className="item__image" src={props.image} alt={props.title}/>
            <h2 className="item__title">{props.title}</h2>
            <button className="item__button-more">Узнать больше</button>
        </li>
    )
}

export default CatalogItem;
