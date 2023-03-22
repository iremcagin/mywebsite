import React from "react";
import "../styles/projects.css";
import Navbar from "./Navbar.js";
import bg from "../images/daisy.webp";
import Project from "./Project.jsx";

import ss1 from "../images/nametypingss.png"
import ss2 from "../images/marketss.png"
import ss3 from "../images/bikes.png"
import ss4 from "../images/cards.png"
import ss5 from "../images/archery.png"


class Projects extends React.Component{

    render(){
        return <div className="App">
            <Navbar />

            <div className="body-right">
                <img src={bg} className="bg" alt="background" />

                <div className="projects-div">
                    <h1>Projects</h1>

                    <div>
                        <Project img={ss1} name="Typing Effect of the Text" info="This page is made just for fun." link="https://iremcagin.github.io/name-typing-effect/" />
                        <Project img={ss2} name="Interactive Market app" info="This page is made to learn react, props, states." link="http://iremcagin.github.io/myreact"/>
                        <Project img={ss3} name="Motorcycle Club Page" info="This page was my first try without tutorial." link="https://iremcagin.github.io/motorcyle-club-webpage/"/>
                        <Project img={ss4} name="Interactive Card Details" info="This page is made for frontend mentor challange." link="https://iremcagin.github.io/interactive-card-details-form-main/"/>
                        <Project img={ss5} name="ITU Okculuk" info="This page is made with flask for archery team." link="#"/>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Projects;