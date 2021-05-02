import React from "react";
import './style.css';

function Footer() {
    return (
    <div className="row">
        <div className="col-sm-12">
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
        </div>
    </div>
    )
}


export default Footer;