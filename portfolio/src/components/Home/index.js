import React from "react";
import './style.css';

function Home() {
    return (
      <div className="row">
        <div className="col-sm-10">
            <article className="about card">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>About Me<span><a
                            href="public/assets/Caitlin_Collins_Full_Stack_Resume.pdf"
                            download="Cait_Collins_Resume"
                            target="_blank"
                            className="btn btn-outline download"
                            >Download Resume!</a></span>
                        </h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <figure>
                            <img className="img-fluid bioimg" src="assets/Caitlin.JPG" alt="Photo of Caitlin"/>
                            <figcaption>Coming soon to a computer near you!</figcaption>
                        </figure>
                    </div>
                    <div className="col-md-6">
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
                    <p className="tag">
                    Coming soon to a computer near you!
                    </p>
                    </div>
                </div>
            </article>
        </div>
    </div>       
)
}








export default Home;