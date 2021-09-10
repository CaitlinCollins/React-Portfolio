import React from "react";
import { Col } from "../Grid";

function Projects(props) {
   return (
      <Col size="md-12">
         <div className="card text-center">
            <img
            className="card-img-top img-fluid portimg"
            src={props.image}
            alt={props.alt}/>
            <div className="card-body">
            <h3 className="card-title">{props.name}</h3>
            <p className="portP">
            {props.description}
            </p>
            <a
               href={props.deployUrl}
               target="_blank"
               rel="noreferrer"
               className="btn deploy"
               >Deploy Here</a>
            <a
               href={props.gitHub}
               target="_blank"
               rel="noreferrer"
               className="btn deploy"
               >GitHub Repo</a>
            </div>
         </div>
      </Col>
   )
}








export default Projects;