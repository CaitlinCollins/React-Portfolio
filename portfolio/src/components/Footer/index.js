import React from "react";
import { Container, Row, Col } from "../Grid";
import '../../sass/footer.scss';

function Footer() {
    return (
        <Container>
            <Row>
                <Col size="md-12">
                    <footer>
                        © Copyright 2021 Caitlin Collins
                        <button
                            href="https://www.facebook.com/caitlinaileencollins"
                            target="_blank" rel="noreferrer"
                            className="fa fa-facebook icon"
                        ></button>
                        <button
                            href="https://www.instagram.com/caitlincollinsactor/"
                            target="_blank" rel="noreferrer"
                            className="fa fa-instagram icon"
                        ></button>
                        <button
                            href="https://www.linkedin.com/in/caitlin-collins-actorprogrammer/"
                            target="_blank" rel="noreferrer"
                            className="fa fa-linkedin icon"
                        ></button>
                        <button
                            href="https://github.com/CaitlinCollins"
                            target="_blank"
                            className="fa fa-github-square icon"
                        ></button>
                    </footer>
                </Col>
            </Row>
        </Container>
    )
}


export default Footer;