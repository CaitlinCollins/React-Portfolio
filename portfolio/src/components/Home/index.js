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
                        <Col size="xs-4 sm-4">
                            <figure>
                                <img className="card-img-top img-fluid bioimg" src="assets/Caitlin.JPG" alt="Photo of Caitlin"/>
                                <figcaption>Coming soon to a computer near you!</figcaption>
                            </figure>
                        </Col>
                        <Col size="xs-8 sm-8">
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
                            <Row>
                                <Col size="xs-4 sm-4">
                                <div className="languages">Browser:
                                    <ul>
                                        <li className="item">HTML</li>
                                        <li className="item">CSS</li>
                                        <li className="item">JavaScript</li>
                                        <li className="item">JQuery</li>
                                        <li className="item">Bootstrap</li>
                                        <li className="item">React.js</li>
                                    </ul>
                                </div>
                                </Col>
                                <Col size="xs-4 sm-4">
                                <div className="tools">Server:
                                    <ul>
                                        <li className="item">Templating Engines</li>
                                        <li className="item">Sessions</li>
                                        <li className="item">Tests</li>
                                        <li className="item">Node.js</li>
                                        <li className="item">Express.js</li>
                                        <li className="item">MVC</li>
                                        <li className="item">User Authent.</li>
                                        <li className="item">ORM</li>
                                    </ul>
                                </div>
                                </Col>
                                <Col size="xs-4 sm-4">
                                <div className="tools">API:
                                    <ul>
                                        <li className="item">Server Side APIs</li>
                                        <li className="item">Third Party APIs</li>
                                        <li className="item">JSON</li>
                                        <li className="item">AJAX/ Axios</li>
                                    </ul>
                                </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col size="xs-4 sm-4">
                                <div className="tools2">Dev Tools:
                                    <ul>
                                        <li className="item">Heroku</li>
                                        <li className="item">GitHub</li>
                                        <li className="item">GitHub Pages</li>
                                    </ul>
                                </div>
                                </Col>
        
                                <Col size="xs-4 sm-4">
                                <div className="tools2">Databases:
                                    <ul>
                                        <li className="item">MySQL</li>
                                        <li className="item">MongoDB</li>
                                    </ul>
                                </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row> 
    </Container>      
)
}




export default Home;