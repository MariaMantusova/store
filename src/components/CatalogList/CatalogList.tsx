import React from "react";
import "./CatalogList.css";
import {IProduct} from "../App";
import CatalogItem from "../CatalogItem/CatalogItem";

interface IPropsCatalogList {
    products: IProduct[]
}

function CatalogList(props: IPropsCatalogList) {
    return(
        <ul className="catalog__list">
            {props.products.map(product =>
                <CatalogItem key={product.id} image={product.image} title={product.title}
                             description={product.description} price={product.price} />
            )}
        </ul>
    )
}

export default CatalogList;
