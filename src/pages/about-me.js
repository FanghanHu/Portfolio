import { Container, Row, Col, Tab } from "react-bootstrap";
import profile3 from "../assets/imgs/profile3-min.jpg";

export default function AboutMe() {
    return (
        <Tab.Pane eventKey="about-me">
            <Container className="pt-5">
                <Row>
                    <Col>
                        <div
                            style={{
                                borderRadius: "50%",
                                width: "300px",
                                height:"300px",
                                overflow: "hidden",
                                border: "5px solid lightskyblue",
                                margin: "0 auto"
                            }}
                        >
                            <img
                                alt="me"
                                width="100%"
                                style={{
                                    position:"relative",
                                    top: "-25%"
                                }}
                                src={profile3}
                            />
                        </div>
                        
                    </Col>
                    <Col>
                        <h2 className="pt-5">
                            Stay awhile, and listen!
                        </h2>
                        <div className="pt-3 pr-1 pr-md-5 h5 paragraph">
                            I am Fanghan, the creator of web applications and master of databases!
                            with the support of the Android army behind my back, I could defeat the
                            evil giant python before my cup of Java gets cold, and the snake won't even have time
                            to React!
                        </div>
                    </Col>
                </Row>
                <div className="p-1 p-md-5 h5 paragraph">
                    During my years of advanture, I have sailed the <a href="https://www.youtube.com/watch?v=2OmDnzlXeqw" target="_blank" rel="noreferrer">Sea of Simulation</a>,
                    traveled <a href="https://www.youtube.com/watch?v=dwDns8x3Jb4" target="_blank" rel="noreferrer">Around the World</a>,
                    found the <a href="https://www.youtube.com/watch?v=0NKUpo_xKyQ" target="_blank" rel="noreferrer">Lights</a> that guided me
                    to the <a href="https://www.youtube.com/watch?v=NOMa56y_Was" target="_blank" rel="noreferrer">End of Line</a>, only to find
                    out that <a href="https://www.youtube.com/watch?v=AISkUx8iaBo" target="_blank" rel="noreferrer">The Game has Changed</a>
                    , <a href="https://www.youtube.com/watch?v=eVTXPUF4Oz4" target="_blank" rel="noreferrer">In the End</a> I realized that 
                    I've always been <a href="https://www.youtube.com/watch?v=MnSlJQvMIt0" target="_blank" rel="noreferrer">On the Move</a>, never have 
                    I <a href="https://www.youtube.com/watch?v=F9Ay74LfKd4" target="_blank" rel="noreferrer">Notice</a> the <a 
                    href="https://www.youtube.com/watch?v=F9Ay74LfKd4" target="_blank" rel="noreferrer">Magic</a> of coding.
                    with that, I have found my new <a href="https://www.youtube.com/watch?v=qdMwV8cfzwI" target="_blank" rel="noreferrer">Identity</a>, 
                    My name is Fanghan, it is <a href="https://www.youtube.com/watch?v=9o_jp2F3uJU" target="_blank" rel="noreferrer">More than Just a Name</a>,
                    it is the name of a shaper, a maker, and a freelancer! 
                </div>
                <div className="px-1 px-md-5 pb-5 h5 mb-0 paragraph">
                    Ahem... Sorry for all that nonsense, let's waste no more time, and get down to business,
                    so... <a href="https://www.youtube.com/watch?v=jVy0JWX5XEY" target="_blank" rel="noreferrer">do you want to develop an app?</a> (&gt;v0)
                </div>
            </Container>
        </Tab.Pane>
    );
}