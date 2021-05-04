import React from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";
import IconLink from "../components/icon-link";
import MovieAward1 from "../components/images/movie-award1";
import Slider from "../components/slider";
import VerticalCenter from "../components/vertical-center";

export default function MoviewAward() {
	return (
		<Tab.Pane eventKey="movie-award">
			<Container>
				<Row className="py-2 p-md-5">
					<Col xs="12" md="6" className="my-3 mt-md-5">
						<Slider
							images={[
								{ src: MovieAward1, alt: "main page" }
							]}
						/>
					</Col>
					<Col xs="12" md="6">
						<VerticalCenter>
							<div className="content-text paragraph">
                                This website uses the OMDB API, You can search for a movie, nominate it as one of your top 5 movies. If it is the wrong movie, you can remove it and nominate something else.
							</div>
							<div className="h4 mt-3 d-flex justify-content-around">
								<IconLink
									icon="globe"
									link="https://fanghanhu.github.io/movie-awards/"
								>
									Website
								</IconLink>
								<IconLink
									icon={["fab", "github"]}
									link="https://github.com/FanghanHu/movie-awards"
								>
									source code
								</IconLink>
							</div>
						</VerticalCenter>
					</Col>
				</Row>
			</Container>
		</Tab.Pane>
	);
}
