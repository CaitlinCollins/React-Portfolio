import React from "react";
import { Container, Row, Col } from "../Grid";
import "./style.css";

function Contact() {
    return (
        <Container>
            <Row>
                <Col size="xs-8 sm-8">
                    <article className="cont">
                    <Row>
                        <Col size="xs-12 sm-12">
                            <h1>Contact</h1>
                            <hr/>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="xs-12 sm-12">
                            <form>
                            <div className="form-group">
                            <label for="exampleFormControlInput1">Name</label><input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name"></input>
                            </div>
                            <div className="form-group">
                            <label for="exampleFormControlInput1">Email Address</label><input type="email" class="form-control" id="exampleInputEmail" placeholder="email@email.com"></input>
                            </div>
                            <div className="form-group">
                            <label for="exampleFormControlTextarea1">Message</label><textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="Your Message Goes Here!"></textarea>
                            </div>
                            <Row>
                            <Col size="xs-2 sm-2">
                                <button class="btn btn-secondary contactbtn" type="submit">Submit</button>
                            </Col>
                            <Col size="xs-10 sm-10">
                            </Col>
                            </Row>
                            </form>
                        </Col>
                    </Row>
                     </article>
                </Col>

                <Col size="xs-4 sm-4">
                    <aside>
                        <h3>Email: </h3>
                        <a href="mailto:caitlin.aileen86@gmail.com" target="_blank" class="contactP">caitlin.aileen86@gmail.com</a>
                        <h3>LinkedIn: </h3> 
                        <a href="https://www.linkedin.com/in/caitlin-collins-stpaul/" target="_blank" class="contactP">www.linkedin.com/in/caitlin-collins-stpaul</a>
                        <h3>GitHub: </h3>
                        <a href="https://github.com/CaitlinCollins" target="_blank" class="contactP">github.com/CaitlinCollins</a>
                        <h3>Phone: </h3>
                        <p class="contactP">612.916.5099</p>
                    </aside>
                </Col>
                <Col size="xs-2 sm-2">
                </Col>
            </Row>
        </Container>
    )
}








export default Contact;