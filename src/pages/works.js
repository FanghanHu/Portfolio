import React from 'react';
import Work from './work';

import petResume1 from '../assets/imgs/PetResume1.png';
import petResume2 from '../assets/imgs/PetResume2.png';
import petResume3 from '../assets/imgs/PetResume3.png';

export default function Works(props) {
    return (
        <div className="vh-100" style={{
            overflowY: "scroll",
            scrollSnapType: "y mandatory"
        }}>
            <Work images={[petResume1, petResume2, petResume3]}>
                <h3>Captions</h3>
                <p>asdoiansdaklsn asdn aslkdn laksn d</p>
            </Work>
            <Work images={[petResume1, petResume2, petResume3]}>
                <h3>Captions</h3>
                <p>asdoiansdaklsn asdn aslkdn laksn d</p>
            </Work>
        </div>
    );
}