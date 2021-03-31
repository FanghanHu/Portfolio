import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Container, Tab } from "react-bootstrap";

export default function Contact() {
    return (
        <Tab.Pane eventKey="contact">
            <Container className="pt-5 pb-5">
                <h1 className="text-center m-5">I'd love to help!</h1>
                <Row>
                    <Col xs="12" md="6">
                    <p className="p-2 h5 paragraph">
                        <h3>Open to work: </h3>
                        I am currently looking for a web or mobile developer job, 
                        can be front-end, back-end, or full-stack, junior to mid level.
                        I appreciate your time and oppertunities.
                    </p>
                    <p className="h5 p-2 paragraph">
                        <h3>Freelance: </h3>
                        I am also freelancing on <a href="https://www.fiverr.com/fanghanhu" target="_blank" rel="noreferrer">Fiverr</a>,
                        feel free to PM, text, or email me if there is anything I can help.
                    </p>
                    <p className="h5 p-2 paragraph">
                        <h3>Skills: </h3>
                        My skills include: Android, React, Node, Express, 
                        MySQL, MongoDB, Bootstrap, Materialize, jQuery,
                        Java, JavaScript, Typescript, Python, C#, HTML, CSS, Photoshop.
                        Please check out my resume to see the details: <span className="text-nowrap"><FontAwesomeIcon className="text-secondary" icon="file-pdf"/> fanghan_hu_resume.pdf</span>
                    </p>
                    </Col>
                    <Col xs="12" md="6" className="h3 text-nowrap d-flex flex-column justify-content-center p-1 px-md-5">
                        <div className="m-2">
                            <FontAwesomeIcon className="text-secondary" icon="mobile-alt"/> <a href="tel:832-748-8444">(832) 748-8444</a>
                        </div>
                        <div className="m-2">
                            <FontAwesomeIcon className="text-secondary" icon="envelope"/> <a className="text-wrap" href="mailto:Fanghan.Hu@Gmail.com" target="_blank" rel="noreferrer">Fanghan.Hu@Gmail.com</a>
                        </div>
                        <div className="m-2">
                            <FontAwesomeIcon className="text-secondary" icon={["fab","github"]}/> <a className="text-wrap" href="https://github.com/FanghanHu" target="_blank" rel="noreferrer">https://github.com/FanghanHu</a>
                        </div>
                        <div className="m-2">
                            <FontAwesomeIcon className="text-secondary" icon={["fab","linkedin"]}/> <a className="text-wrap" href="https://www.linkedin.com/in/fanghan-hu" target="_blank" rel="noreferrer">https://www.linkedin.com/in/fanghan-hu</a>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </Tab.Pane>
    );
}