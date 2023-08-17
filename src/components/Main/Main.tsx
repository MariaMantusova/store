import React from "react";
import "./Main.css";
import Menu from "../Menu/Menu";
import ImageBlock from "../ImageBlock/ImageBlock";
import Catalog from "../Catalog/Catalog";

function Main() {
    return(
        <>
            <Menu/>
            <ImageBlock/>
            <Catalog/>
        </>
    )
}

export default Main;
