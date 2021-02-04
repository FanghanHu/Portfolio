import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

export default function work({id, images, children }) {
    if(!images) {
        return null;
    }

    return (
        <div id={id} className="work"  style={{
            position: "relative",
            width: "calc(100vw - ((100vw - 100%)))",
            height: "calc(100vh - ((100vh - 100%)))",
            scrollSnapAlign: "start"
        }}>
            <Carousel className="bg-dark">
                {images.map((image, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block vh-100 mw-100 mx-auto"
                                src={image}
                                alt="web app"
                                style={{
                                    objectFit: "cover",
                                }}
                            />
                        </Carousel.Item>
                    );
                })}
            </Carousel>
            <div className="work-caption">
                {children}
            </div>
        </div>
    );
}