import React from "react";
import { Container, Row, Col } from "../Grid";
import "./style.css";

function Contact() {
    return (
        <Container>
            <Row>
                <Col size="xs-8 sm-8">
                    <div className="cont">
                    <Row>
                        <Col size="xs-12 sm-12">
                            <h1>Contact Me!</h1>
                            <hr/>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="xs-12 sm-12">
                            <form>
                            <div className="form-group">
                            <label for="exampleFormControlInput1">Email:</label>
                            <a href="mailto:caitlin.aileen86@gmail.com" target="_blank" class="contactP">caitlin.aileen86@gmail.com</a>
                            </div>
                            <div className="form-group">
                            <label for="exampleFormControlInput1">LinkedIn:</label><a href="https://www.linkedin.com/in/caitlin-collins-stpaul/" target="_blank" class="contactP">www.linkedin.com/in/caitlin-collins-stpaul</a>
                            </div>
                            <div className="form-group">
                            <label for="exampleFormControlInput1">GitHub:</label><a href="https://github.com/CaitlinCollins" target="_blank" class="contactP">github.com/CaitlinCollins</a>
                            </div>
                            <div className="form-group">
                            <label for="exampleFormControlInput1">Phone:</label><a class="contactP">612.916.5099</a>
                            </div>
                            </form>
                        </Col>
                    </Row>
                     </div>
                </Col>
            </Row>
        </Container>
    )
}








export default Contact;