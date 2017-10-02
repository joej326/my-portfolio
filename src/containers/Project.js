import React, { Component } from 'react';
// import { connect } from 'react-redux';

import $ from 'jquery';
import './../style/project.css';


export default class Project extends Component{
  constructor(props){
    super(props);
  }
  // componentDidMount(){
  //   $('.project-main-div').on('mouseenter', function(){
  //     $(this).find('.project-github-link').fadeTo(500, 1);
  //   });
  //   $('.project-main-div').on('mouseleave', function(){
  //     $(this).find('.project-github-link').fadeTo(500, 0);
  //   });
  // }

  render(){
    
    return (
      <div className='hover project-main-div'>
        <a target='_blank' href={this.props.github}><p className='project-github-link'><i className="fa fa-github" aria-hidden="true"></i>View Code On Github</p></a>
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
