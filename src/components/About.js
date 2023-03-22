import React from "react";
import Navbar from "./Navbar.js";
import "../styles/about.css";
import me from "../images/me2.jpg";
import bg from "../images/daisy.webp";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone, faLocationPin,faStar, faAngleRight, faXmark} from "@fortawesome/free-solid-svg-icons"

class About extends React.Component{

    render(){
        return <div className="App">
            <Navbar/>
            <div className="body-right">
                
                <div className="body-right-div">

                    <div className="body-right-div-top">
                        <div className="body-right-div-top-img">
                            <img src={me} alt="user-img"/>
                        </div>
                        
                        

                        <div className="body-right-div-top-me-border">
                            <h1 id="myname">İrem Çağın Yurttürk</h1>
                            <p>&nbsp;&nbsp;Eager to learn, creative and responsible... </p>
                        </div>
                        
                        <div className="body-right-div-top-right">
                            <div className="body-right-div-top-right-about">
                                    <p className="body-right-div-top-contact-text2" >About</p>
                                    
                                    <div className="body-right-div-top-right-aboutt">
                                        <p><span>Birthday:</span> 24.03.2001</p>
                                        <p><span>Gender:</span> Woman</p>
                                        <p><span>Driving License:</span> B</p>
                                        <p><span>Nationality:</span> TC</p>
                                    </div>
                            </div>

                            <div className="body-right-div-top-contact">
                                <p className="body-right-div-top-contact-text2" >Contact</p>

                                <ul>
                                    <li>
                                        <FontAwesomeIcon className="body-right-div-top-contact-icon" icon={faEnvelope} />
                                        <p>iremcagiin@gmail.com</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon  className="body-right-div-top-contact-icon" icon={faPhone} />
                                        <p>0538 968 54 79</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon  className="body-right-div-top-contact-icon" icon={faLinkedin} />
                                        <a href="https://www.linkedin.com/in/iremcagin">https://www.linkedin.com</a>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon  className="body-right-div-top-contact-icon" icon={faGithub} />
                                        <a href="https://github.com/iremcagin">https://github.com/iremcagin</a>
                                    </li>
                                    
                                    <li>
                                        <FontAwesomeIcon className="body-right-div-top-contact-icon" icon={faLocationPin} />
                                        <p>Ata2 sitesi, Üsküdar/İstanbul</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    
                    <div className="body-right-div-mid">
                        <div className="body-right-div-mid-education">
                            <p className="body-right-div-top-contact-text" >Education</p>
                            <div className="body-right-div-mid-education-div">
                                <ul>
                                     <li>2015 - 2019</li>
                                     <li>2019 - 2022</li>
                                     <li>2022 - 20..</li>
                                </ul>
                                <ul>
                                    <li>ÇağrıBey Anadolu Lisesi</li>
                                    <li>
                                        <p>Gebze Teknik Üniversitesi - Computer Engineering</p>
                                    </li>
                                    <li><p>İstanbul Teknik Üniversitesi - Computer Engineering</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="body-right-div-mid-skills">
                            <p className="body-right-div-top-contact-text" >Computer Skills</p>
                            <div className="body-right-div-mid-skills-div">
                                <ul>
                                    <li>
                                        <p> 
                                            <div>
                                                <FontAwesomeIcon icon={faAngleRight} />
                                                <p>Adobe Photoshop</p>
                                            </div>
                                            
                                            <ul>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                            </ul>
                                        </p>
                                    </li>
                                    <li>
                                        <p> <div>
                                                <FontAwesomeIcon icon={faAngleRight} />
                                                <p>Blender</p>
                                            </div>
                                            <ul>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                
                                            </ul>
                                        </p>
                                    </li>
                                    <li>
                                        <p> <div>
                                                <FontAwesomeIcon icon={faAngleRight} />
                                                <p>Unity</p>
                                            </div>
                                            <ul>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                               
                                            </ul>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>



                        <div className="body-right-div-mid-languages">
                            <p className="body-right-div-top-contact-text" >Languages</p>
                            <div className="body-right-div-mid-languages-div">
                                <ul>
                                    <li>
                                        <p> 
                                            <div>
                                                <FontAwesomeIcon icon={faAngleRight} />
                                                <p>Turkish</p>
                                            </div>
                                            
                                            <ul>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                            </ul>
                                        </p>
                                    </li>
                                    <li>
                                        <p> <div>
                                                <FontAwesomeIcon icon={faAngleRight} />
                                                <p>English</p>
                                            </div>
                                            <ul>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                
                                            </ul>
                                        </p>
                                    </li>
                                    <li>
                                        <p> <div>
                                                <FontAwesomeIcon icon={faAngleRight} />
                                                <p>Russian</p>
                                            </div>
                                            <ul>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                            </ul>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    


                    <div className="body-div-bottom">
                        <div className="body-div-bottom-experience">
                            <p className="body-right-div-top-contact-text" >Experience</p>
                            
                            <div className="body-bottom-experience-div">
                                
                                <FontAwesomeIcon icon={faXmark} />
                            </div>
                        </div>

                        <div className="body-div-bottom-hobbies">
                            <p className="body-right-div-top-contact-text" >Hobbies</p>

                            <ul>
                                    <li>
                                        <div>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                            <p>Web Development</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                            <p>Game Development</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                            <p>Swimming</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                            <p>Sports</p>
                                        </div>
                                    </li>
                                </ul>
                        </div>

                    </div>


                </div>
            </div>
        </div>;
    }
}

export default About;