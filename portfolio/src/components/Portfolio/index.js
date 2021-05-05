import React from "react";
import { Container, Row, Col } from "../Grid";
import Projects from "../Projects";
import projects from '../../projects.json';

function Portfolio() {
   return (
      <Container>
         <Row>
            <Col size="xs-12 sm-12">
               <article className="port">
                  <Row>
                     <Col size="xs-12 sm-12">
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
               </article>
            </Col>
         </Row>
      </Container>
    )
}


export default Portfolio;