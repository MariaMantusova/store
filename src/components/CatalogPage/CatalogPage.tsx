import React, {useEffect} from "react";
import "./CatalogPage.css";
import Menu from "../Menu/Menu";
import {Link, NavLink} from "react-router-dom"
import {IProduct} from "../App";
import CatalogList from "../CatalogList/CatalogList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

interface IPropsCatalog {
    loading: boolean
    url: string
    errorMessage: string
    products: IProduct[]
    getProducts: (url: string) => Promise<void>
}

function CatalogPage(props: IPropsCatalog) {

    useEffect(() => {
        props.getProducts(props.url);
    }, [props.url])

    return(
        <section className="catalog">
            <Menu>
                <NavLink to="/" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>Главная
                    страница</NavLink>
            </Menu>
            <Link to="/" className="catalog__back-link">&#10229; На главную страницу</Link>
            {props.loading ? <Preloader/> : <CatalogList products={props.products}/>}
            {props.errorMessage && <span className="catalog__error">Произошла ошибка при загрузке.
                Обновите страницу.</span>}
            <Footer/>
        </section>
    )
}

export default CatalogPage;
