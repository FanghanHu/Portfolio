import { useState } from "react";
import { Container } from "react-bootstrap";
import TypeWriterText from "../typewriter-text";
import Waves from "../waves";
import "./style.css";


export default function WavePanel() {
    const [title, setTitle] = useState('Fanghan Hu');

    return (
        <Container>
            <header>
                <nav className="p-2 d-flex flex-wrap text-white justify-content-between">
                    <div className="d-flex flex-wrap">
                        <h5>My Projects:</h5>
                        <div onClick={() => {setTitle("SyrupPOS")}}>SyrupPOS</div>
                        <div onClick={() => {setTitle("Fallout64 Deck Builder")}}>Fallout64 Deck Builder</div>
                        <div>Pet Resume</div>
                        <div>GMP Website</div>
                    </div>
                    <div className="d-flex flex-wrap h5">
                        <div>About Me</div>
                        <div>Contact</div>
                    </div>
                </nav>
                <TypeWriterText className="mx-auto h1" 
                    text={title}
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
                <div className="text-center text-white p-2">
                    Fanghan Hu | 2021
                </div>
            </footer>
        </Container>
    )
}