import React, { Component } from 'react';
// import { connect } from 'react-redux';
import $ from 'jquery';

import './../style/nameMain.css';






export default class NameMain extends Component{

  componentDidMount(){
    $('.name-main').animate({right: '-24.5vw'},600)
    $('.name-main').animate({right: '5vw'},200)
    $('.name-main').animate({right: '0vw'},300)
  }

  render(){
    return (
      <div className='name-main'>
        <h4>Joseph Joyce</h4>
        <h5>Full Stack Web Developer</h5>
      </div>
    )
  }

}
