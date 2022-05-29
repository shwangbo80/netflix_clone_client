import {React, useState, useEffect} from "react"
import {Container} from "react-bootstrap"
import axios from "axios"

import FeaturedComponent from "./GenreComponents/FeaturedComponent"
import MartialArtsComponent from "./GenreComponents/MartialArtsComponent"
import AnimeComponent from "./GenreComponents/AnimeComponent"
import DocumentaryComponent from "./GenreComponents/DocumentaryComponent"
import SportsComponent from "./GenreComponents/SportsComponent"
import UfcComponent from "./GenreComponents/UfcComponent"
import WweComponent from "./GenreComponents/WweComponent"
import NavbarComponent from "./GenreComponents/NavbarComponent"
import FooterComponent from "./GenreComponents/FooterComponent"

export default function Movies() {
  const [apiData, setApiData] = useState([])

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/movies/")
      .then((response) => setApiData(response.data))
      .catch((error) => {
        setApiData({errorMessage: error.message})
        console.error("There was an error!", error)
      })
  }, [])

  return (
    <div>
      <Container fluid className="p-0">
        <NavbarComponent />
        <FeaturedComponent apiData={apiData} />
        <MartialArtsComponent apiData={apiData} />
        <AnimeComponent apiData={apiData} />
        <DocumentaryComponent apiData={apiData} />
        <SportsComponent apiData={apiData} />
        <UfcComponent apiData={apiData} />
        <WweComponent apiData={apiData} />
        <FooterComponent />
      </Container>
    </div>
  )
}
