import React from "react";
import { Container, Row, Col } from "../Grid";

function Projects(props) {
   return (
      <Col size="xs-12 sm-12">
         <div className="card text-center">
            <img
            className="card-img-top img-fluid portimg"
            src={props.image}
            alt={props.alt}/>
            <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <p class="card-text">
            {props.description}
            </p>
            <a
               href={props.deploy}
               target="_blank"
               class="btn deploy"
               >Deploy Here</a>
            <a
               href={props.gitHub}
               target="_blank"
               class="btn deploy"
               >GitHub Repo</a>
            </div>
         </div>
      </Col>
   )
}








export default Projects;