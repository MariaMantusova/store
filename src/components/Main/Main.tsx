import React from "react";
import "./Main.css";
import Menu from "../Menu/Menu";
import ImageBlock from "../ImageBlock/ImageBlock";
import Catalog from "../Catalog/Catalog";
import AboutStore from "../AboutStore/AboutStore";
import Reviews from "../Reviews/Reviews";

function Main() {
    return(
        <>
            <Menu/>
            <ImageBlock/>
            <Catalog/>
            <AboutStore/>
            <Reviews/>
        </>
    )
}

export default Main;
