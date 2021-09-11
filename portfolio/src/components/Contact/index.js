import React from "react";
import { Container, Row, Col } from "../Grid";
import "../../sass/contact.scss";


function Contact() {
    return (
        <Container>
            <Row>
                <Col size="lg-2 md-0">
                </Col>
                <Col size="lg-8 md-12">
                    <div className="cont">
                    <Row>
                        <Col size="md-12">
                            <h1>Contact Me!</h1>
                            <hr/>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <form>
                            <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Email:</label>
                            <a href="mailto:caitlin.aileen86@gmail.com" target="_blank" rel="noreferrer" className="contactP">caitlin.aileen86@gmail.com</a>
                            </div>
                            <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">LinkedIn:</label><a href="https://www.linkedin.com/in/caitlin-collins-stpaul/" target="_blank" rel="noreferrer" className="contactP">www.linkedin.com/in/caitlin-collins-stpaul</a>
                            </div>
                            <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">GitHub:</label><a href="https://github.com/CaitlinCollins" target="_blank" rel="noreferrer" className="contactP">github.com/CaitlinCollins</a>
                            </div>
                            <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Phone:</label><button className="contactP phoneP">612.916.5099</button>
                            </div>
                            </form>
                        </Col>
                    </Row>
                     </div>
                </Col>
                <Col size="lg-2 md-0">
                </Col>
            </Row>
        </Container>
    )
}








export default Contact;