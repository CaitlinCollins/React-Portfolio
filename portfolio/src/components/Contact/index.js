import React from "react";
import "./style.css";

function Contact() {
    return (
    <div className="row">
        <div className="col-sm-6">
            <article className="cont">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Contact</h1>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
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
                            <div className="row">
                                <div className="col-sm-2">
                                <button class="btn btn-secondary contactbtn" type="submit">Submit</button>
                                </div>
                                <div className="col-sm-10"> 
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </article>
        </div>
        <div className="col-sm-4">
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
        </div>
        <div className="col-sm-2">
        </div>
    </div>
)
}








export default Contact;