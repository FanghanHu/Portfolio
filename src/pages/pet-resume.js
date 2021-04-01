import React, { lazy } from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";
import Slider from "../components/slider";
import VerticalCenter from "../components/vertical-center";

const PetResume1 = lazy(() => import("../components/images/pet-resume1"));
const PetResume2 = lazy(() => import("../components/images/pet-resume2"));
const PetResume3 = lazy(() => import("../components/images/pet-resume3"));

export default function PetResume() {
    return (
        <Tab.Pane eventKey="pet-resume">
            <Container>
                <Row className="py-2 p-md-5">
                    <Col xs="12" md="6" className="my-3 mt-md-5">
                        <Slider images={[
                            {src: PetResume1, alt:"main page"},
                            {src: PetResume2, alt:"search page"},
                            {src: PetResume3, alt:"gallery page"}
                            ]}/>
                    </Col>
                    <Col xs="12" md="6">
                        <VerticalCenter>
                            <div className="content-text paragraph">
                                Pet Resume is a website that provides dog breed information, user can search for a specific breed or check out random dog breeds. one or multiple pictures and a brief summary is provided for every breed.
                            </div>
                        </VerticalCenter>
                    </Col>
                </Row>
            </Container>
        </Tab.Pane>
    );
}