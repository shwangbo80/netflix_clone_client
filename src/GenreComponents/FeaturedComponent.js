import {React, useState} from "react"
import {Button, Image, Modal} from "react-bootstrap"
import gundamImg from "../images/gundam.jpeg"

export default function FeaturedComponent(apiData) {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [itemId, setItemId] = useState(1)

  const dramaData = apiData.apiData.map((item) => item)
  const dramaDataFilter = dramaData.filter((item) => item.genre_id === 15)
  const dramaIdFilter = dramaDataFilter.filter((item) => item.id === itemId)

  const MyVerticallyCenteredModal = () => {
    if (show) {
      return (
        <Modal
          size="xl"
          show={show}
          onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton closeVariant="white">
            <Modal.Title>Mobile Suit Gundam</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              width="100%"
              height="600"
              src="https://youtube.com/embed/0v82BlKoO3A"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
            <p>
              Synopsis: Mobile Suit Gundam, often shortened to Gundam is a
              Japanese space opera anime series created by renowned animator
              Yoshiyuki Tomino and produced by Sunrise[1]. Since the airing of
              the original animated TV series Mobile Suit Gundam in 1979, the
              metaseries has grown a considerable following worldwide.
            </p>
            {/* <p>Release date: {dramaIdFilter[0].release_date}</p>
            <p>Running time: {dramaIdFilter[0].running_time} </p>
            <p>Actors: {dramaIdFilter[0].actors}</p>
            <p>Director: {dramaIdFilter[0].director}</p>
            <p>Rating: {dramaIdFilter[0].rating}</p> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )
    } else {
      return null
    }
  }
  return (
    <div className="featuredContainer">
      <h1 className="text-white topLeft">Featured</h1>
      <Image fluid src={gundamImg} />
      <h1 className="text-white middleLeft display-2">MOBILE SUIT GUNDAM</h1>
      <Button
        className="bottomLeft btn-lg infoBtn"
        onClick={() => {
          handleShow()
        }}>
        More info
      </Button>
      <MyVerticallyCenteredModal />
    </div>
  )
}
