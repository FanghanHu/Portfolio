import { Container } from "react-bootstrap";
import TypeWriterText from "../typewriter-text";
import Waves from "../waves";
import "./style.css";


export default function WavePanel() {
    return (
        <Container>
            <header>
                <TypeWriterText className="mx-auto h1" 
                    text="Fanghan Hu" 
                    style={{
                        fontFamily: "letter Gothic std, Arial",
                        marginTop: "80px"
                    }} 
                    textColor="#FFF"
                />
            </header>
            <main>
                <Waves/>
            </main>
            <footer>

            </footer>
        </Container>
    )
}