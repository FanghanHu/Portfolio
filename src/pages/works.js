import React from 'react';
import Work from '../components/work';
import Scrollspy from 'react-scrollspy';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import petResume1 from '../assets/imgs/PetResume1-min.png';
import petResume2 from '../assets/imgs/PetResume2-min.png';
import petResume3 from '../assets/imgs/PetResume3-min.png';
import chirper1 from '../assets/imgs/Chirper1-min.png';
import chirper2 from '../assets/imgs/Chirper2-min.png';
import chirper3 from '../assets/imgs/Chirper3-min.png';
import chirper4 from '../assets/imgs/Chirper4-min.png';
import chirper5 from '../assets/imgs/Chirper5-min.png';
import chirper6 from '../assets/imgs/Chirper6-min.png';
import chirper7 from '../assets/imgs/Chirper7-min.png';
import chirper8 from '../assets/imgs/Chirper8-min.png';
import fo1 from '../assets/imgs/fo76db1-min.png';
import fo2 from '../assets/imgs/fo76db2-min.png';
import gmp1 from '../assets/imgs/gmp1-min.png';
import gmp2 from '../assets/imgs/gmp2-min.png';
import gmp3 from '../assets/imgs/gmp3-min.png';

const works = [
    {
        id: "chirper",
        name: "Chirper POS",
        images: [chirper1, chirper2, chirper3, chirper4, chirper5, chirper6, chirper7, chirper8],
        captions: (
            <>
                <h3 className="text-white">Chirper POS</h3>
                <p className="w-100">
                    A point of sale program for restaurants,
                    it can help restaurants to keep track of their orders and payments,
                    manage tables, and record customer information.
                    Built with: mysql, node.js, express.js, react.
                    click the visit link to give it a try, the default access code is 0.
                </p>
                <div className="m-1 float-left">
                        <FontAwesomeIcon icon={["fab", 'github']}/>
                        <a 
                        href="https://github.com/FanghanHu/Chirper"
                        className="p-1 text-light"
                        target="_blank" 
                        rel="noreferrer">
                            Source code
                        </a>
                    </div>
                    <div className="m-1 float-right">
                        <FontAwesomeIcon icon={["fas", 'globe']}/>
                        <a 
                        href="https://chirperpos.herokuapp.com/" 
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
        id: "pet-resume",
        name: "Pet Resume",
        images: [petResume1, petResume2, petResume3],
        captions: (
            <>
                <h3 className="text-white">Pet Resume</h3>
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
        id: "fo76db",
        name: "Fallout 76 Card Builder",
        images: [fo1, fo2],
        captions: (
            <>
                <h3 className="text-white">Fallout 76 Card Builder</h3>
                <p className="w-100">
                    A build planner for the online video game "Fallout 76"
                    plan your build and share it with friends.
                    Built with basic html, css, and javascript... oh, also JQuery.
                </p>
                <div className="m-1 float-left">
                        <FontAwesomeIcon icon={["fab", 'github']}/>
                        <a 
                        href="https://github.com/FanghanHu/Fallout76CardBuilder"
                        className="p-1 text-light"
                        target="_blank" 
                        rel="noreferrer">
                            Source code
                        </a>
                    </div>
                    <div className="m-1 float-right">
                        <FontAwesomeIcon icon={["fas", 'globe']}/>
                        <a 
                        href="https://fanghanhu.github.io/Fallout76CardBuilder/index.html" 
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
        id: "gmp",
        name: "GMP Website",
        images: [gmp1, gmp2, gmp3],
        captions: (
            <>
                <h3 className="text-white">GMP Website</h3>
                <p className="w-100">
                    Company website for Global Merchant Processing Inc.
                </p>
                <div className="m-1 float-left">
                        <FontAwesomeIcon icon={["fab", 'github']}/>
                        <a 
                        href="https://github.com/FanghanHu/GlobalMerchant.us"
                        className="p-1 text-light"
                        target="_blank" 
                        rel="noreferrer">
                            Source code
                        </a>
                    </div>
                    <div className="m-1 float-right">
                        <FontAwesomeIcon icon={["fas", 'globe']}/>
                        <a 
                        href="http://globalmerchant.us/" 
                        className="p-1 text-light"
                        target="_blank" 
                        rel="noreferrer">
                            visit
                        </a>
                    </div>
            </>
        )
    },
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