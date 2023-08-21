import React from "react";
import "./Main.css";
import Menu from "../Menu/Menu";
import ImageBlock from "../ImageBlock/ImageBlock";
import AboutStore from "../AboutStore/AboutStore";
import Reviews from "../Reviews/Reviews";
import Footer from "../Footer/Footer";
import Previews from "../Previews/Previews";

function Main() {
    return(
        <>
            <Menu/>
            <ImageBlock/>
            <Previews/>
            <AboutStore/>
            <Reviews/>
            <Footer/>
        </>
    )
}

export default Main;
