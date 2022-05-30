import {React, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Button, Image, Modal} from "react-bootstrap";
import {Navigation} from "swiper";

export default function MovieComponent(apiData) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [itemId, setItemId] = useState(1);

    const dramaData = apiData.apiData.map((item) => item);
    const dramaDataFilter = dramaData.filter((item) => item.genre_id === 1);
    const dramaIdFilter = dramaDataFilter.filter((item) => item._id === itemId);

    function onHover(e) {
        e.target.style.opacity = "100%";
        e.target.style.transition = "1s";
    }
    function onExit(e) {
        e.target.style.opacity = "50%";
        e.target.style.transition = "1s";
    }

    console.log(dramaDataFilter);
    console.log(dramaIdFilter);

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
                    <Modal.Body>
                        <iframe
                            width="100%"
                            height="600"
                            src={dramaIdFilter[0].video_url}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                        <p>Synopsis: {dramaIdFilter[0].synopsis}</p>
                        <p>Release date: {dramaIdFilter[0].release_date}</p>
                        <p>Running time: {dramaIdFilter[0].running_time} </p>
                        <p>Actors: {dramaIdFilter[0].actors}</p>
                        <p>Director: {dramaIdFilter[0].director}</p>
                        <p>Rating: {dramaIdFilter[0].rating}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            );
        } else {
            return null;
        }
    };

    const RenderData = () => {
        return (
            <div>
                <h2 className="text-white">Movies</h2>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={10}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper">
                    {dramaDataFilter.map((item, key) => {
                        return (
                            <SwiperSlide className="grid" key={key}>
                                <Image
                                    fluid
                                    src={item.image_url}
                                    onClick={() => {
                                        handleShow();
                                        setItemId(item.id);
                                    }}
                                    onMouseOver={onHover}
                                    onMouseLeave={onExit}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        );
    };

    return (
        <>
            <RenderData />
            <MyVerticallyCenteredModal />
        </>
    );
}
