import { useState } from "react";
import { Container } from "react-bootstrap";
import NavButton from "../nav-button";
import TypeWriterText from "../typewriter-text";
import Waves from "../waves";
import "./style.css";


export default function WavePanel() {
    const [title, setTitle] = useState('Fanghan Hu');

    return (
        <Container fluid="md">
            <header>
                <nav className="p-2 d-flex flex-wrap text-white justify-content-between">
                    <div className="d-flex flex-wrap mb-1">
                        <div className="h5">My Projects:</div>
                        <NavButton text="SyrupPOS" targetId="syrup-pos" setTitle={setTitle}/>
                        <NavButton text="Pet Resume" targetId="pet-resume" setTitle={setTitle}/>
                        <NavButton text="Fallout64 Deck Builder" targetId="fallout-64-deck-builder" setTitle={setTitle}/>
                        <NavButton text="GMP Website" targetId="gmp-website" setTitle={setTitle}/>
                    </div>
                    <div className="d-flex flex-wrap h5">
                        <NavButton text="About Me" targetId="about-me" title="Fanghan Hu" setTitle={setTitle}/>
                        <NavButton text="Contact" targetId="contact" setTitle={setTitle}/>
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