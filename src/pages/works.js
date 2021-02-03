import React from 'react';
import Work from './work';
import Scrollspy from 'react-scrollspy';

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
        <>
            <div id="spy-root"
                style={{
                    height: "100VH",
                    overflowY: "auto",
                    scrollSnapType: "y mandatory",
                    position: "relative",
                    scrollBehavior: "smooth"
                }}>

                <div className="d-flex flex-column justify-content-center h-100"
                style={{
                    position: 'fixed',
                    left: "3em",
                    zIndex: "99",
                    margin: "auto auto",
                    width: "15em",
                    textAlign:"center"
                }}>
                    <Scrollspy items={works.map(work => work.id)}
                        currentClassName="active"
                        scrolledPastClassName="past"
                        rootEl="#spy-root"
                        className="list-unstyled"
                    >
                        {works.map((work, index) => {
                            return (
                                <li key={"ni-" + work.id} className="work-nav">
                                    <a href={"#" + work.id}>{work.name}</a>
                                </li>
                            );
                        })}
                    </Scrollspy>
                </div>

                {works.map((work, index) => {
                    return (
                        <Work key={"c-" + index} id={work.id} images={work.images}>
                            {work.captions}
                        </Work>
                    );
                })}
            </div>
        </>
    );
}