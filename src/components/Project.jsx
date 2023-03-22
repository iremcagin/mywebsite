import React from 'react';
import "../styles/project.css"


export default class Project extends React.Component {
  render(){
    return <div className='project-div'>
        <img alt="project" src={this.props.img}></img>
          <h3>{this.props.name}</h3>
          <p>{this.props.info}</p>
          <a href={this.props.link}><button>Visit</button></a>
        
    </div>;
  }
}
