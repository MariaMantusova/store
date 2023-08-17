import React from "react";
import "./Main.css";
import Menu from "../Menu/Menu";
import ImageBlock from "../ImageBlock/ImageBlock";
import Catalog from "../Catalog/Catalog";
import AboutStore from "../AboutStore/AboutStore";

function Main() {
    return(
        <>
            <Menu/>
            <ImageBlock/>
            <Catalog/>
            <AboutStore/>
        </>
    )
}

export default Main;
