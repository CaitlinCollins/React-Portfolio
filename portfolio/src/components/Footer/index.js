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
                        <a
                            href="https://www.facebook.com/caitlinaileencollins"
                            target="_blank" rel="noreferrer"
                            className="fa fa-facebook icon"
                        ></a>
                        <a
                            href="https://www.instagram.com/caitlincollinsactor/"
                            target="_blank" rel="noreferrer"
                            className="fa fa-instagram icon"
                        ></a>
                        <a
                            href="https://www.linkedin.com/in/caitlin-collins-stpaul/"
                            target="_blank" rel="noreferrer"
                            className="fa fa-linkedin icon"
                        ></a>
                        <a
                            href="https://github.com/CaitlinCollins"
                            target="_blank" rel="noreferrer"
                            className="fa fa-github-square icon"
                        ></a>
                    </footer>
                </Col>
            </Row>
        </Container>
    )
}


export default Footer;