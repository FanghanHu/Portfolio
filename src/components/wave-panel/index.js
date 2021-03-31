import { useState } from "react";
import { Container, Nav, Tab } from "react-bootstrap";
import SyrupPOS from "../../pages/syrup-pos";
import PetResume from "../../pages/pet-resume";
import Fallout64DeckBuilder from "../../pages/fallout64-deck-builder";
import GMPWebsite from "../../pages/gmp-website";
import AboutMe from "../../pages/about-me";
import Contact from "../../pages/contact";
import NavButton from "../nav-button";
import TypeWriterText from "../typewriter-text";
import Waves from "../waves";
import "./style.css";


export default function WavePanel() {
    const [title, setTitle] = useState('Fanghan Hu');

    return (
        <Container fluid="md">
            <Tab.Container defaultActiveKey="about-me">
                <header>
                    <Nav className="p-2 d-flex flex-wrap text-white justify-content-between">
                        <div className="d-flex flex-wrap mb-1">
                            <div className="h5">My Projects:</div>
                            <NavButton text="SyrupPOS" eventKey="syrup-pos" setTitle={setTitle}/>
                            <NavButton text="Pet Resume" eventKey="pet-resume" setTitle={setTitle}/>
                            <NavButton text="Fallout64 Deck Builder" eventKey="fallout-64-deck-builder" setTitle={setTitle}/>
                            <NavButton text="GMP Website" eventKey="gmp-website" setTitle={setTitle}/>
                        </div>
                        <div className="d-flex flex-wrap h5">
                            <NavButton text="About Me" eventKey="about-me" title="Fanghan Hu" setTitle={setTitle}/>
                            <NavButton text="Contact" eventKey="contact" setTitle={setTitle}/>
                        </div>
                    </Nav>
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
                    <Tab.Content>
                        <SyrupPOS/>
                        <PetResume/>
                        <Fallout64DeckBuilder/>
                        <GMPWebsite/>
                        <AboutMe/>
                        <Contact/>
                    </Tab.Content>
                </main>
            </Tab.Container>
            <footer>
                <div className="text-center text-white">
                    Fanghan Hu | 2021
                </div>
            </footer>
        </Container>
    )
}