import React from "react";
import { Container, Row, Col } from "../Grid";
import './style.css';

function Footer() {
    return (
        <Container>
            <Row>
                <Col size="xs-12 sm-12">
                    <footer>
                        © Copyright 2021 Caitlin Collins
                        <a
                            href="https://www.facebook.com/caitlincollinsgraber"
                            target="_blank"
                            className="fa fa-facebook icon"
                        ></a>
                        <a
                            href="https://www.instagram.com/caitlincollinsactor/"
                            target="_blank"
                            className="fa fa-instagram icon"
                        ></a>
                        <a
                            href="https://www.linkedin.com/in/caitlin-collins-actorprogrammer/"
                            target="_blank"
                            className="fa fa-linkedin icon"
                        ></a>
                        <a
                            href="https://github.com/CaitlinCollins"
                            target="_blank"
                            className="fa fa-github-square icon"
                        ></a>
                    </footer>
                </Col>
            </Row>
        </Container>
    )
}


export default Footer;