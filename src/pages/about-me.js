import { Container, Tab } from "react-bootstrap";

export default function AboutMe() {
    return (
        <Tab.Pane eventKey="about-me">
            <Container>
                <h5>
                    Hi, I'm Fanghan, I am a full-stack web developer
                </h5>
            </Container>
        </Tab.Pane>
    );
}