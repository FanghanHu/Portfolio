import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Work from './work';

import petResume1 from '../assets/imgs/PetResume1.png';
import petResume2 from '../assets/imgs/PetResume2.png';
import petResume3 from '../assets/imgs/PetResume3.png';

const works = [
    {
        id: "pet-resume",
        name: "page1",
        images: [petResume1],
        captions: (
            <>
                <h3>Captions</h3>
                <p>asdasdasdasds</p>
            </>
        )
    },
    {
        id: "pet-resume2",
        name: "page2",
        images: [petResume2, petResume3],
        captions: (
            <>
                <h3>Captions</h3>
                <p>asdasdasdasds</p>
            </>
        )
    }
];


export default function Works(props) {
    return (
        <div style={{
            height:"100VH",
            overflowY: "auto",
            scrollSnapType: "y mandatory"
        }}>

            <Nav style={{
                left: "2em",
                display:"flex",
                flexDirection:"column",
                position: "fixed",
                height:"100VH",
                width: "15em",
                justifyContent: "center",
                zIndex: "15"
            }}>
                {works.map((work, index) => {
                    return (
                        <Nav.Item key={"ni-" + work.id}>
                            <Nav.Link className="work-nav" href={"#" + work.id}>{work.name}</Nav.Link>
                        </Nav.Item>
                    );
                })}
            </Nav>

            {works.map((work, index) => {
                return (
                    <Work key={"c-" + index} id={work.id} images={work.images}>
                        {work.captions}
                    </Work>
                );
            })}
        </div>
    );
}