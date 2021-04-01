import React, { lazy } from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";
import IconLink from "../components/icon-link";
import Slider from "../components/slider";
import VerticalCenter from "../components/vertical-center";

const fallout1 = lazy(() => import("../components/images/fallout1"));
const fallout2 = lazy(() => import("../components/images/fallout2"));

export default function Fallout64DeckBuilder() {
    return (
        <Tab.Pane eventKey="fallout-76-deck-builder">
            <Container>
                <Row className="py-2 p-md-5">
                    <Col xs="12" md="6" className="my-3 mt-md-5">
                        <Slider images={[
                            {src: fallout1, alt:"main page"}
                            ]}/>
                    </Col>
                    <Col xs="12" md="6">
                        <VerticalCenter>
                            <div className="content-text paragraph">
                                Fallout 76 Deck Builder is a web application, it's main use is to plan character builds for the online video game Fallout76. In the game, characters unlock perk cards when they level up, and each perk card have different tiers. Players can only use a certain amount of cards depend on their level, highier level player can choose more perk cards with highier tiers.
                            </div>
                        </VerticalCenter>
                    </Col>
                </Row>
                <hr/>
                <Row className="py-2 p-md-5">
                    <Col xs="12" md="6" className="my-3 mt-md-5">
                        <Slider images={[
                            {src: fallout2, alt:"loadded deck"} 
                            ]}/>
                    </Col>
                    <Col xs="12" md={{span: 6, order: "first"}}>
                        <VerticalCenter>
                            <div className="content-text paragraph">
                                Users can add or remove a perk card to their build, then adjust the perk level. switch between different perk catagories by clicking on the "SPECIAL" cards. After the users finishes their build, they can save or share the build using the dynamically generated url.
                            </div>
                            <div className="h4 mt-3 d-flex justify-content-around">
                                <IconLink icon="globe" link="https://fanghanhu.github.io/Fallout76CardBuilder/index.html">Website</IconLink>
                                <IconLink icon={["fab","github"]} link="https://github.com/FanghanHu/Fallout76CardBuilder">source code</IconLink>
                            </div>
                        </VerticalCenter>
                    </Col>
                </Row>
            </Container>
        </Tab.Pane>
    );
}