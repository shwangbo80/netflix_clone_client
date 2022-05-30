import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import Movies from "./Components/Movies";

export default function MainComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="movies" element={<Movies />} />
            </Routes>
        </BrowserRouter>
    );
}
