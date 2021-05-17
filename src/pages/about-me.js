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
                                margin: "0 auto",
                                boxShadow: "0px 0px 10px 0 gray"
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
                                Hi There!
                        </h2>
                        <div className="pt-3 pr-1 pr-md-5 h5 paragraph">
                            I'm Fanghan, I'm a web developer, I create websites, single page apps, and progressive web apps. I use React, Redux, Bootstrap, Materialize, Node, Express, MySQL and MongoDB.
                            Other than the websites, I also create Android apps and Minecraft mods for fun.
                        </div>
                    </Col>
                </Row>
                <div className="p-1 p-md-5 m-0 h5 paragraph">
                    I love programming, I've mastered many different programming languages, I first started with Java, then Javascript, Typescript, and now Python, I've also worked on projects with C# and VBS. 
                    I love pets and video games, I have 4 budgies and I play Starcraft2, Dota2 and Apex Legends. Please check out my past projects, you can find them in the navbar at the top left corner, I hope you will find something you like. 
                </div>
            </Container>
        </Tab.Pane>
    );
}