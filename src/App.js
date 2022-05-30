import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Movies from "./Components/Movies";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./App.css";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
            </Routes>
        </BrowserRouter>
    );
}
