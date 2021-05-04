import { Nav } from "react-bootstrap";

export default function NavButton({text, title=undefined, eventKey, setTitle}) {
    return (
        <Nav.Item>
            <Nav.Link eventKey={eventKey} bsPrefix="wave" as="div">
                <div className="nav-button"
                    onClick={() => {
                        setTitle(title?title:text);
                    }}
                >
                    {text}
                </div>
            </Nav.Link>
        </Nav.Item>
    );
}