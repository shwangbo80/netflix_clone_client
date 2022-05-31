import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import About from "./Components/About";

export default function MainComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Movies />} />
                <Route exact path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}
