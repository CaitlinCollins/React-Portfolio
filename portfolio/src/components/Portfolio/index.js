import React from "react";
import { Container, Row, Col } from "../Grid";

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
                        <Col size="xs-12 sm-12">
                           <div className="card text-center">
                           <img
											class="card-img-top img-fluid portimg"
											src="assets/crate.png"
											alt="Reel 2 Real"/>
										<div class="card-body">
											<h5 class="card-title">Reel 2 Real</h5>
											<p class="card-text">
												An online record database that allows the user to sign up or login for complete access. There is a search feature that allows the user to search by artist, which renders the albums listed under that artist. The user can then get more information about the album of their choice or add it to their crate to be saved for later. 
											</p>
											<a
												href="https://reel2real.herokuapp.com/"
												target="_blank"
												class="btn deploy"
												>Deploy Here</a>
											<a
												href="https://github.com/CaitlinCollins/reel2real"
												target="_blank"
												class="btn deploy"
												>GitHub Repo</a>
                                 </div>
                           </div>
                        </Col>
                     </figure>
                  </article>
               </Col>
            </Row>
         </Container>
      )
}








export default Portfolio;