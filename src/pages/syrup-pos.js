import { lazy, Suspense, useState } from "react";
import { Button, Col, Container, Row, Tab, Collapse} from "react-bootstrap";

const SyrupDemo = lazy(() =>  import("../components/images/syrup-demo"));

export default function SyrupPOS() {
    const [open, setOpen] = useState(false);
    return (
        <Tab.Pane eventKey="syrup-pos">
            <Container>
                <div className="text-center m-5">
                    <span className="h3">Demo: </span>
                    <Button 
                        onClick={() => {setOpen(!open)}}
                        aria-controls="syrup-demo"
                        aria-expanded={open}
                    >
                        {open?"Hide":"Show"}
                    </Button>
                </div>
                <Collapse in={open}>
                    <div className="m-5" id="syrup-demo">
                        <Suspense fallback={<div className="text-center">Loading...</div>}>
                            {open?
                            <SyrupDemo width="100%" />: ""}
                        </Suspense>
                    </div>
                </Collapse>

                <div className="text-white">
                    bottom fixer
                </div>

                <Row>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </Tab.Pane>
    );
}