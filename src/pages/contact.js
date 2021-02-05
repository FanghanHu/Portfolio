import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact(props) {
    return (
        <div className="bg-dark text-white min-h-100">
            <Container>
                <div className="d-flex flex-column vh-100 justify-content-center"  style={{ paddingTop: "7rem" }}>
                    <h1 className="text-center">Fanghan Hu</h1>
                    <span className="text-muted text-center d-block">Full-Stack Web Developer in Houston, TX</span>
                    <span className="text-muted text-center d-block">Status: Freelancing (2/4/2021)</span>

                    <div className="d-flex flex-wrap mt-5 mx-auto contact-text justify-content-around">
                        <div className="m-2">
                            <FontAwesomeIcon icon={["fab", "github"]} />
                            <a className="m-3 text-white" href="https://github.com/FanghanHu" target="_blank" rel="noreferrer">Github</a>
                        </div>

                        <div className="m-2">
                            <FontAwesomeIcon icon={["fab", "linkedin"]} />
                            <a className="m-3 text-white" href="https://www.linkedin.com/in/fanghan-hu/" target="_blank" rel="noreferrer">LinkedIn</a>
                        </div>

                        <div className="m-2">
                            <FontAwesomeIcon icon={["fab", "twitter"]} />
                            <a className="m-3 text-white" href="https://twitter.com/FanghanHu" target="_blank" rel="noreferrer">Twitter</a>
                        </div>

                        <div className="m-2">
                            <FontAwesomeIcon icon={["fab", "stack-overflow"]} />
                            <a className="m-3 text-white" href="https://stackoverflow.com/users/7492159/fanghan-hu" target="_blank" rel="noreferrer">Stack Overflow</a>
                        </div>

                        <div className="m-2">
                            <FontAwesomeIcon icon={["fas", "file-pdf"]} />
                            <a download className="m-3 text-white" href="./Fanghan_Hu.pdf" target="_blank" rel="noreferrer">Resume</a>
                        </div>
                    </div>

                    <div className="contact-text text-center my-5 text-break">
                        <div className="my-2">
                            <FontAwesomeIcon icon={["fas", "mobile-alt"]} />
                            <span className="mx-3 text-white">(832) 748-8444</span>
                        </div>
                        <div className="my-2">
                            <FontAwesomeIcon icon={["fas", "envelope"]} />
                            <span className="mx-3 text-white">Fanghan.Hu@Gmail.com</span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}