import React from "react";
import { Container, Row, Col } from "../Grid";
import './style.css';

function Home() {
    return (
    <Container>
        <Row>
            <Col size="xs-12 sm-12">
                <div className="card">
                    <Row>
                        <Col size="xs-12 sm-12">
                            <h1>About Me<span><a
                                href="public/assets/Caitlin_Collins_Full_Stack_Resume.pdf"
                                download="Cait_Collins_Resume"
                                target="_blank"
                                className="btn btn-outline download"
                                >Download Resume!</a></span>
                            </h1>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col size="xs-6 sm-6">
                            <figure>
                                <img className="img-fluid bioimg" src="assets/Caitlin.JPG" alt="Photo of Caitlin"/>
                                <figcaption>Coming soon to a computer near you!</figcaption>
                            </figure>
                        </Col>
                        <Col size="xs-6 sm-6">
                            <p className="firstP">
                                I'm a Full-Stack Computer Programmer specializing in creative
                                concepts and user-friendly, responsive layouts.
                                <br />
                                I also work locally as an actor, model, writer, and film
                                producer which keeps my head in the creative game.
                                <br />
                                Programming allows me to flex my problem-solving muscles while
                                honing in on my creative instincts.
                            </p>
                            <div className="languages">Languages:
                                <ul>
                                    <li className="item">HTML</li>
                                    <li className="item">CSS</li>
                                    <li className="item">JavaScript</li>
                                </ul>
                            </div>
                            <div className="tools">Tools:
                                <ul>
                                    <li className="item">JQuery</li>
                                    <li className="item">Node.js</li>
                                    <li className="item">Handlebars.js</li>
                                    <li className="item">MySql</li>
                                    <li className="item">Seqelize</li>
                                </ul>
                            </div>
                            <div className="tools2">
                                <ul>
                                    <li className="item">Express</li>
                                    <li className="item">APIs</li>
                                    <li className="item">Bootstrap</li>
                                    <li className="item">GitHub</li>
                                    <li className="item">Heroku</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row> 
    </Container>      
)
}




export default Home;