import {React, useState, useEffect} from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import {Button, Image, Modal} from "react-bootstrap"
import {Navigation} from "swiper"

export default function WweComponent(apiData) {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [itemId, setItemId] = useState(1)

  useEffect(() => {}, [])

  const dramaData = apiData.apiData.map((item) => item)
  const dramaDataFilter = dramaData.filter((item) => item.genre_id === 18)
  const dramaIdFilter = dramaDataFilter.filter((item) => item.id === itemId)

  function onHover(e) {
    e.target.style.opacity = "100%"
    e.target.style.transition = "1s"
  }
  function onExit(e) {
    e.target.style.opacity = "50%"
    e.target.style.transition = "1s"
  }

  console.log(dramaDataFilter)
  console.log(dramaIdFilter)

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
            <Modal.Title>{dramaIdFilter[0].title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-5">
            <iframe
              width="100%"
              height="600"
              src={dramaIdFilter[0].video_url}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
            <h4 className="py-3 mt-3">{dramaIdFilter[0].synopsis}</h4>
            <h5>Release date: {dramaIdFilter[0].release_date}</h5>
            <h5>Running time: {dramaIdFilter[0].running_time} </h5>
            <h5>Actors: {dramaIdFilter[0].actors}</h5>
            <h5>Director: {dramaIdFilter[0].director}</h5>
            <h5>Rating: {dramaIdFilter[0].rating}</h5>
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

  const RenderData = () => {
    return (
      <div className="py-3 px-5">
        <h2 className="text-white">WWE</h2>
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper">
          {dramaDataFilter.map((item) => {
            return (
              <SwiperSlide className="grid" key={item.id}>
                <Image
                  fluid
                  className="movieImg"
                  src={item.image_url}
                  onClick={() => {
                    handleShow()
                    setItemId(item.id)
                  }}
                  onMouseOver={onHover}
                  onMouseLeave={onExit}
                />
                <h5 className="text-light text-center pt-2">{item.title}</h5>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    )
  }

  return (
    <>
      <RenderData />
      <MyVerticallyCenteredModal />
    </>
  )
}
