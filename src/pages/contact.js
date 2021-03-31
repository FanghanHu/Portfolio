import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Tab } from "react-bootstrap";

export default function Contact() {
    return (
        <Tab.Pane eventKey="contact">
            <Container>
                <p className="p-1 px-md-5 h5 paragraph">
                    I am currently looking for a web or mobile developer job, 
                    can be front-end, back-end, or full-stack, junior to mid level.
                    I appreciate your time and oppertunities.
                </p>
                <p className="h5 p-1 px-md-5 paragraph">
                    I am also freelancing on <a href="https://www.fiverr.com/fanghanhu" target="_blank" rel="noreferrer">Fiverr</a>,
                    feel free to PM, text, or email me if there is anything I can help.
                </p>
                <p className="h5 p-1 px-md-5 paragraph">
                    My skills include: Android, React, Node, Express, 
                    MySQL, MongoDB, Bootstrap, Materialize, jQuery,
                    Java, JavaScript, Typescript, Python, C#, HTML, CSS, Photoshop.
                    Please check out my resume to see the details: <span className="text-nowrap"><FontAwesomeIcon className="text-secondary" icon="file-pdf"/> fanghan_hu_resume.pdf</span>
                </p>
                <div className="h3 p-1 px-md-5 mx-md-5 text-nowrap">
                    <div>
                        <FontAwesomeIcon className="text-secondary" icon="mobile-alt"/> <a href="tel:832-748-8444">(832) 748-8444</a>
                    </div>
                    <div>
                        <FontAwesomeIcon className="text-secondary" icon="envelope"/> <a href="mailto:Fanghan.Hu@Gmail.com" target="_blank" rel="noreferrer">Fanghan.Hu@Gmail.com</a>
                    </div>
                    <div>
                        <FontAwesomeIcon className="text-secondary" icon={["fab","github"]}/> <a className="text-wrap" href="https://github.com/FanghanHu" target="_blank" rel="noreferrer">https://github.com/FanghanHu</a>
                    </div>
                    <div>
                        <FontAwesomeIcon className="text-secondary" icon={["fab","linkedin"]}/> <a className="text-wrap" href="https://www.linkedin.com/in/fanghan-hu" target="_blank" rel="noreferrer">https://www.linkedin.com/in/fanghan-hu</a>
                    </div>
                </div>
                
            </Container>
        </Tab.Pane>
    );
}