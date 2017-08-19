import React, { Component } from 'react';
// import { connect } from 'react-redux';

import './../style/project.css';


export default class Project extends Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.thumbnail);
    return (
      <div className='hover project-main-div'>
        <a target='_blank' href={this.props.github}><p className='project-github-link'><i className="fa fa-github" aria-hidden="true"></i>View on Github</p></a>
        <a target='_blank' href={this.props.link}>
        <img className='project'
             src={this.props.thumbnail}
             alt="placeholder"
        />

        <h3>{this.props.title}</h3>
        </a>
      </div>
    )
  }

}
