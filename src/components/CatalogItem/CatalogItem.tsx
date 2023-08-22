import React, {useState} from "react";
import "./CatalogItem.css";
import PopupInfo from "../PopupInfo/PopupInfo";

interface IPropsCatalogItem {
    title: string
    price: string
    description: string
    image: string
}

function CatalogItem(props: IPropsCatalogItem) {
    const [open, setOpen] = useState(false);

    function handlerOpenPopup() {
        setOpen(true);
    }

    function handlerClosePopup() {
        setOpen(false);
    }

    return (
        <>
            <li className="catalog__item">
                <img className="item__image" src={props.image} alt={props.title}/>
                <h2 className="item__title">{props.title}</h2>
                <button className="item__button-more" onClick={handlerOpenPopup}>Узнать больше</button>
            </li>
            <PopupInfo class={open && "popup__info_visible"} image={props.image} title={props.title}
                       description={props.description} price={props.price} onClose={handlerClosePopup}/>
        </>
    )
}

export default CatalogItem;
