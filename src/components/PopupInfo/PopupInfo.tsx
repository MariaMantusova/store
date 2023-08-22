import React from "react";
import "./PopupInfo.css";

interface IPropsPopup {
    class: false | string
    image: string
    title: string
    description: string
    price: string
    onClose: () => void
}

function PopupInfo(props: IPropsPopup) {
    return(
        <div className={`popup__info ${props.class}`}>
            <section className="popup__info__container">
                <button className="popup__info__close-button" onClick={props.onClose}></button>
                <img className="popup__info__image" src={props.image} alt={props.title}/>
                <div className="info__container">
                    <p className="info__description">
                        <span className="info__span">Описание:</span> {props.description}
                    </p>
                    <span className="info__description">
                        <span className="info__span">Цена:</span> {props.price}
                    </span>
                </div>
            </section>
        </div>
    )
}

export default PopupInfo;
