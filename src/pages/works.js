import React from 'react';
import Work from './work';
import Scrollspy from 'react-scrollspy';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import petResume1 from '../assets/imgs/PetResume1.png';
import petResume2 from '../assets/imgs/PetResume2.png';
import petResume3 from '../assets/imgs/PetResume3.png';

const works = [
    {
        id: "pet-resume",
        name: "Pet Resume",
        images: [petResume1, petResume2, petResume3],
        captions: (
            <>
                <h3>Pet Resume</h3>
                <p className="w-100">
                    A website that provides dog breed information, user can search
                    for a specific breed or check out random dog breeds.
                    one or multiple pictures and a brief summary is provided for every breed.
                </p>
                <div className="m-1 float-left">
                        <FontAwesomeIcon icon={["fab", 'github']}/>
                        <a 
                        href="https://github.com/FanghanHu/petResume"
                        className="p-1 text-light"
                        target="_blank" 
                        rel="noreferrer">
                            Source code
                        </a>
                    </div>
                    <div className="m-1 float-right">
                        <FontAwesomeIcon icon={["fas", 'globe']}/>
                        <a 
                        href="https://fanghanhu.github.io/petResume" 
                        className="p-1 text-light"
                        target="_blank" 
                        rel="noreferrer">
                            visit
                        </a>
                    </div>
            </>
        )
    },
    {
        id: "pet-resume2",
        name: "Pet Resume2",
        images: [petResume1, petResume2, petResume3],
        captions: (
            <>
                <h3>Pet Resume</h3>
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

                <div className="work-navbar d-flex flex-column justify-content-center ">
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