import React from "react";
import { Container, Row, Col } from "../Grid";
import Projects from "../Projects";
import projects from '../../projects.json';
import "../../sass/portfolio.scss";

function Portfolio() {
   return (
      <Container>
         <Row>
            <Col size="md-12">
               <div className="port">
                  <Row>
                     <Col size="md-12">
                        <h1>Portfolio</h1>
                        <hr />
                     </Col>
                  </Row>
                  <figure>
                     {projects.map(project =>  {
                        return (
                           <Projects
                           id={project.id}
                           name={project.name}
                           image={project.image}
                           alt={project.alt}
                           description={project.description}
                           deployUrl={project.deployUrl}
                           gitHub={project.gitHub}
                           />
                        );
                     })}
                  </figure>
               </div>
            </Col>
         </Row>
      </Container>
    )
}


export default Portfolio;