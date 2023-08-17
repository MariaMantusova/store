import React from 'react';
import {Route, Routes} from "react-router-dom";
import Menu from "./Menu/Menu";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Menu/>}/>
            <Route path="/women's-clothes"/>
            <Route path="/men's-clothes"/>
            <Route path="/electronics"/>
            <Route path="/jewelery"/>
        </Routes>
    );
}

export default App;
