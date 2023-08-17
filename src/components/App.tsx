import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "./Main/Main";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/women's-clothes"/>
            <Route path="/men's-clothes"/>
            <Route path="/electronics"/>
            <Route path="/jewelery"/>
        </Routes>
    );
}

export default App;
