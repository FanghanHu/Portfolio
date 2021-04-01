import IconLink from '../components/icon-link';
import { lazy, Suspense, useState } from "react";
import { Button, Col, Container, Row, Tab, Collapse} from "react-bootstrap";
import Slider from "../components/slider";
import VerticalCenter from "../components/vertical-center";

const SyrupDemo = lazy(() =>  import("../components/images/syrup-demo"));
const Syrup1 = lazy(() =>  import("../components/images/syrup1"));
const Syrup2 = lazy(() =>  import("../components/images/syrup2"));
const Syrup3 = lazy(() =>  import("../components/images/syrup3"));
const Syrup4 = lazy(() =>  import("../components/images/syrup4"));
const Syrup5 = lazy(() =>  import("../components/images/syrup5"));
const Syrup6 = lazy(() =>  import("../components/images/syrup6"));
const Syrup7 = lazy(() =>  import("../components/images/syrup7"));
const Syrup8 = lazy(() =>  import("../components/images/syrup8"));
const Syrup9 = lazy(() =>  import("../components/images/syrup9"));

export default function SyrupPOS() {
    const [open, setOpen] = useState(false);
    return (
        <Tab.Pane eventKey="syrup-pos">
            <Container>
                <Row className="py-2 p-md-5">
                    <Col xs="12" md="6" className="my-3 mt-md-5">
                        <Slider images={[
                            {src: Syrup9, alt:"landing page"},
                            {src: Syrup8, alt:"login page"}
                            ]}/>
                    </Col>
                    <Col xs="12" md="6">
                        <VerticalCenter>
                            <div className="content-text paragraph">
                                SyrupPOS is a point of sale software designed for restaurants.  It is a PWA that can be hosted locally or on the cloud. Users can access the application on a PC, tablet, or on their phone.
                            </div>
                        </VerticalCenter>
                    </Col>
                </Row>
                <hr/>
                <Row className="py-2 p-md-5">
                    <Col xs="12" md="6" className="my-3 mt-md-5">
                        <Slider images={[
                            {src: Syrup3, alt:"order types"},
                            {src: Syrup7, alt:"customer info"}
                            ]}/>
                    </Col>
                    <Col xs="12" md={{span: 6, order: "first"}}>
                        <VerticalCenter>
                            <div className="content-text paragraph">
                                SyrupPOS can be used to track different order types, such as To Go, Dine in, Pick up, and Delivery. Different order types will prompt for different information before ordering. For example Dine in orders will ask for the table first, and delivery order will ask for customer's address.
                            </div>
                        </VerticalCenter>
                    </Col>
                </Row>
                <hr/>
                <Row className="py-2 p-md-5">
                    <Col xs="12" md="6" className="my-3 mt-md-5">
                        <Slider images={[
                            {src: Syrup1, alt:"order page"},
                            {src: Syrup2, alt:"payment page"}
                            ]}/>
                    </Col>
                    <Col xs="12" md="6">
                        <VerticalCenter>
                            <div className="content-text paragraph">
                                The ordering page is highly flexible, you can order items and give them modifiers, and you can give modifiers their own modifiers. Each modifier can add or subtract a flat amount, or percentage of their target, and you can nest modifiers indefinitely. Similar items are stacked automatically, and when you modify a stack, a single item is split out.
                            </div>
                        </VerticalCenter>
                    </Col>
                </Row>
                <hr/>
                <Row className="py-2 p-md-5">
                    <Col xs="12" md="6" className="my-3 mt-md-5">
                        <Slider images={[
                            {src: Syrup5, alt:"back office"},
                            {src: Syrup4, alt:"report page"},
                            {src: Syrup6, alt:"menu setup"}
                            ]}/>
                    </Col>
                    <Col xs="12" md={{span: 6, order: "first"}}>
                        <VerticalCenter>
                            <div className="content-text paragraph">
                                Most of what you see in the app can be configurated in the app as well. managers can setup the table map to reflect their restaurant's layout. each button in the menu can be programmed with different functions. adding or removing users can be as easy as a few button clicks.
                            </div>
                        </VerticalCenter>
                    </Col>
                </Row>
                <hr/>
                <div className="text-center m-1 m-md-5 pt-md-5">
                    <span className="h3">Demo: </span>
                    <Button 
                        variant="outline-info"
                        onClick={() => {setOpen(!open)}}
                        aria-controls="syrup-demo"
                        aria-expanded={open}
                        style={{
                            verticalAlign:"top"
                        }}
                    >
                        {open?"Hide":"Show"}
                    </Button>
                    <div className="content-text">
                        There are many other things I can't cover in this short article, if you want to know more about this project, you can try it live on <IconLink icon="globe" link="https://syrup-pos.herokuapp.com/">heroku</IconLink> (default access code is 0, I'm using a free tier, so it may take some time to wake up the deno after some inactivity), read the <IconLink icon={["fab","github"]} link="https://github.com/FanghanHu/Syrup">source code</IconLink> or check out the demo below.
                    </div>
                </div>
                <Collapse in={open}>
                    <div className="m-md-5" id="syrup-demo">
                        <Suspense fallback={<div className="text-center">Loading...</div>}>
                            {open?
                            <SyrupDemo width="100%" alt="demo.gif"/>: ""}
                        </Suspense>
                    </div>
                </Collapse>

                <div className="text-white">
                    bottom fixer
                </div>
            </Container>
        </Tab.Pane>
    );
}