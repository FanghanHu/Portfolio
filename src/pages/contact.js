import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact(props) {
    return (
        <div className="bg-dark vh-100 vw-100 text-white">
            <Container>
                <h1 className="text-center" style={{ paddingTop: "7rem" }}>Fanghan Hu</h1>
                <span className="text-muted text-center d-block">Full-Stack Web Developer in Houston, TX</span>

                <div className="d-flex mt-5 mx-auto h3 justify-content-around">
                    <div>
                        <FontAwesomeIcon icon={["fab", "github"]} />
                        <a className="m-3 text-white" href="https://github.com/FanghanHu" target="_blank" rel="noreferrer">Github</a>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={["fab", "linkedin"]} />
                        <a className="m-3 text-white" href="https://www.linkedin.com/in/fanghan-hu/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={["fab", "twitter"]} />
                        <a className="m-3 text-white" href="https://twitter.com/FanghanHu" target="_blank" rel="noreferrer">Twitter</a>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={["fab", "stack-overflow"]} />
                        <a className="m-3 text-white" href="https://stackoverflow.com/users/7492159/fanghan-hu" target="_blank" rel="noreferrer">Stack Overflow</a>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={["fas", "file-pdf"]} />
                        <a className="m-3 text-white" href="%PUBLIC_URL%/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
                    </div>
                </div>
            </Container>
        </div>
    );
}