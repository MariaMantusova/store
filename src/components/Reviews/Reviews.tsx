import React, {useState} from "react";
import "./Reviews.css";
import {reviews} from "../../data/data";
import Review from "../Review/Review";

function Reviews() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [disablePrevButton, setDisablePrevButton] = useState(true);
    const [disableNextButton, setDisableNextButton] = useState(false);

    React.useEffect(() => {
        if (currentIndex >= 1) {
            setDisablePrevButton(false);
        }

        if (currentIndex < reviews.length - 1) {
            setDisableNextButton(false)
        }
    }, [currentIndex]);

    function handleNextReview() {
        if (currentIndex < reviews.length - 2) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setDisableNextButton(true);
            setCurrentIndex(reviews.length - 1);
        }
    }

    function handlePrevReview() {
        if (currentIndex > 1) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(0);
            setDisablePrevButton(true)
        }
    }

    return(
        <section className="reviews">
            <h2 className="reviews__title">Отзывы наших покупателей</h2>
            <div className="reviews__container">
                <button className="reviews__vector" disabled={disablePrevButton} onClick={handlePrevReview}>&#9001;</button>
                <ul className="reviews__list">
                    <Review body={reviews[currentIndex].body} image={reviews[currentIndex].image}
                            name={reviews[currentIndex].name} key={reviews[currentIndex].id}/>
                </ul>
                <button className="reviews__vector" disabled={disableNextButton} onClick={handleNextReview}>&#9002;</button>
            </div>
        </section>
    )
}

export default Reviews;
