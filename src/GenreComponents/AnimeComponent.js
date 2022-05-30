import {React, useState, useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Button, Image, Modal} from "react-bootstrap";
import {Navigation} from "swiper";

export default function AnimeComponent(apiData) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [itemId, setItemId] = useState(1);

    useEffect(() => {}, []);

    const dramaData = apiData.apiData.map((item) => item);
    const dramaDataFilter = dramaData.filter(
        (item) => item.genre_id === "Anime"
    );
    const dramaIdFilter = dramaDataFilter.filter((item) => item._id === itemId);

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
                        <p className="py-3 mt-3">{dramaIdFilter[0].synopsis}</p>
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
                    </Modal.Footer>
                </Modal>
            );
        } else {
            return null;
        }
    };

    const RenderData = () => {
        return (
            <div className="py-2 px-5">
                <h2 className="text-white">Anime</h2>
                <Swiper
                    slidesPerView={"auto"}
                    breakpoints={{
                        300: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 10,
                        },
                    }}
                    spaceBetween={10}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={false}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper">
                    {dramaDataFilter.map((item, key) => {
                        return (
                            <SwiperSlide className="grid" key={key}>
                                <div>
                                    <Image
                                        fluid
                                        className="movieImg"
                                        src={item.image_url}
                                        onClick={() => {
                                            handleShow();
                                            setItemId(item._id);
                                        }}
                                    />
                                    <p className="text-light text-center pt-2">
                                        {item.title}
                                    </p>
                                </div>
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
