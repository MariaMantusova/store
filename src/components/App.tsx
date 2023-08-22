import React, {useState} from 'react';
import axios, {AxiosError} from "axios";
import {Route, Routes} from "react-router-dom";
import Main from "./Main/Main";
import CatalogPage from "./CatalogPage/CatalogPage";

interface IProduct {
    id: number
    title: string
    price: string
    category: string
    description: string
    image: string
}

function App() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const urlElectronics: string = "https://fakestoreapi.com/products/category/electronics";
    const urlJewelery: string = "https://fakestoreapi.com/products/category/jewelery";
    const urlMenCloth: string = "https://fakestoreapi.com/products/category/men's clothing";
    const urlWomenCloth: string = "https://fakestoreapi.com/products/category/women's clothing";

    async function getProducts(url: string) {
        try {
            setErrorMessage("");
            setIsLoading(true);
            const response = await axios.get<IProduct[]>(url);
            setProducts(response.data);
            setIsLoading(false);
        } catch (e: unknown) {
            const error = e as AxiosError;
            setIsLoading(false);
            setErrorMessage(error.message);
        }
    }

    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/women's-clothes" element={<CatalogPage errorMessage={errorMessage} getProducts={getProducts}
                                                                 loading={isLoading} products={products}
                                                                 url={urlWomenCloth}/>}/>
            <Route path="/men's-clothes" element={<CatalogPage errorMessage={errorMessage} getProducts={getProducts}
                                                               loading={isLoading} products={products}
                                                               url={urlMenCloth}/>}/>
            <Route path="/electronics" element={<CatalogPage errorMessage={errorMessage} getProducts={getProducts}
                                                             loading={isLoading} products={products}
                                                             url={urlElectronics}/>}/>
            <Route path="/jewelery" element={<CatalogPage errorMessage={errorMessage} getProducts={getProducts}
                                                          loading={isLoading} products={products}
                                                          url={urlJewelery}/>}/>
        </Routes>
    );
}

export default App;
export type {
    IProduct
};
