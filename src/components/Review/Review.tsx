import React from "react";
import "./Review.css";

interface IPropsReview {
    image: string
    name: string
    body: string
    key: number
}

function Review(props: IPropsReview) {
    return(
        <li className={`review`}>
            <div className="review__container">
                <img className="review__image" src={props.image} alt="Отзыв покупателя"/>
                <h3 className="review__name">{props.name}</h3>
                <p className="review_body">{props.body}</p>
            </div>
        </li>
    )
}

export default Review;
