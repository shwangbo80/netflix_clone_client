import React, {useRef, useState} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./Home"
import Movies from "./Movies"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./App.css"

import {Container, Row, Col, Form, Button} from "react-bootstrap"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  )
}
