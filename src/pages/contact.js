import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact(props) {
    return (
        <div className="bg-dark text-white min-h-100 overflow-auto">
            <Container>
                <div className="d-flex flex-column vh-100 justify-content-center"  style={{ paddingTop: "7rem" }}>
                    <h1 className="text-center" 
                    style={{
                        fontFamily:'Big Shoulders Display, cursive',
                        fontSize:"6rem"
                        }}>Fanghan Hu</h1>
                    <span className="text-muted text-center d-block">Full-Stack Web Developer in Houston, TX</span>
                    <span className="text-muted text-center d-block">Status: Freelancing</span>

                    <div className="mt-5 text-muted h4 text-center" style={{fontFamily:'Big Shoulders Display, cursive'}}>
                        Hi, I'm Fanghan, I make cross-platform applications, Android applications and responsive websites. I am open to requests, if you need to get in touch, here are some ways you can contact me:
                    </div>

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
                            <a href="tel:832-748-8444" className="mx-3 text-white">(832) 748-8444</a>
                        </div>
                        <div className="my-2">
                            <FontAwesomeIcon icon={["fas", "envelope"]} />
                            <a  href="mailto:Fanghan.Hu@Gmail.com" className="mx-3 text-white">Fanghan.Hu@Gmail.com</a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}