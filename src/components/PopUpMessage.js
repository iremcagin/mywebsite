import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck} from "@fortawesome/free-solid-svg-icons"


export function PopUpMessage(props) {
  return (props.trigger) ? (
    <div className="popUpMessage" >
    <p>Your message has been send <FontAwesomeIcon icon={faCheck} /></p>
    </div>) : "";
}
