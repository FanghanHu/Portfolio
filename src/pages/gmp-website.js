import React, { lazy } from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";
import IconLink from "../components/icon-link";
import Slider from "../components/slider";
import VerticalCenter from "../components/vertical-center";

const gmp1 = lazy(() => import("../components/images/gmp1"));
const gmp2 = lazy(() => import("../components/images/gmp2"));
const gmp3 = lazy(() => import("../components/images/gmp3"));

export default function GMPWebsite() {
    return (
        <Tab.Pane eventKey="gmp-website">
            <Container>
                <Row className="py-2 p-md-5">
                    <Col xs="12" md="6" className="my-3 mt-md-5">
                        <Slider images={[
                            {src: gmp1, alt:"main page"},
                            {src: gmp2, alt:"hardware page"},
                            {src: gmp3, alt:"software page"}
                            ]}/>
                    </Col>
                    <Col xs="12" md="6">
                        <VerticalCenter>
                            <div className="content-text paragraph">
                                This website is the company website I made when I was working as a technician in Global Merchant Processing. It has the company's service information, the products, and contact information. products page come with embedded images and videos of the product, and links to manufacturer's website for further reading.
                            </div>
                            <div className="h4 mt-3 d-flex justify-content-around">
                                <IconLink icon="globe" link="http://globalmerchant.us/">Website</IconLink>
                                <IconLink icon={["fab","github"]} link="https://github.com/FanghanHu/GlobalMerchant.us">source code</IconLink>
                            </div>
                        </VerticalCenter>
                    </Col>
                </Row>
            </Container>
        </Tab.Pane>
    );
}