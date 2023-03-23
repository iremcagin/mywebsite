import React, { useRef } from "react";
import "../styles/contact.css";
import Navbar from "./Navbar.js";
import emailjs from '@emailjs/browser';
import bg from "../images/daisy.webp";
import {PopUpMessage} from "./PopUpMessage"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone, faLocationPin} from "@fortawesome/free-solid-svg-icons"

export const Contacts = () => {
    const [showPopUp, setShowPopUp] = React.useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fcgqk5m', 'template_lxutvla', form.current, 'YuWHMiOR6YekPuVEd')
        .then((result) => {
            setShowPopUp(true);  
            setTimeout(() => setShowPopUp(false),3500);
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="App">
            <Navbar />
            <div className="body-right">
                <img src={bg} className="bg" alt="background" />
                
                <PopUpMessage trigger={showPopUp ? true : false} ></PopUpMessage>

                <form ref={form} onSubmit={sendEmail} className="form">
                
                    <div className="text-contact">
                        <p>You can send me an email with this form 😇</p>
                    </div>

                    <div className="name">
                        <label className="label">Name :</label>
                        <input className="input" type="text" name="user_name" />
                    </div>
                    <div className="email">
                        <label className="label"><span>*</span>Email :</label>
                        <input className="input" type="email" name="user_email" required/>
                    </div>
                    <div className="message">
                        <label className="label"><span>*</span>Message :</label>
                        <textarea className="input textarea" name="message" required/>
                    </div>
                    <div className="btn">
                        <input className="input button" type="submit" value="Send" />
                    </div>
               
                    <hr></hr>

                    <div className="contact-infos">
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <p>iremcagiin@gmail.com</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhone} />
                                <p>0538 968 54 79</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faLocationPin} />
                                <p>İstanbul, Turkey</p>
                            </li>
                        </ul>
                        
                    </div>
                </form>
            </div>
        </div>
    );  
};
