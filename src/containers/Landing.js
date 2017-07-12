import React, { Component } from 'react';
// import { connect } from 'react-redux';
import NameMain from './../components/Name_Main';
import $ from 'jquery';

import './../style/landing.css';


export default class Landing extends Component{

componentDidMount(){
  let logo1 = document.getElementsByClassName('landing-logos')[0].children[0];
  let logo2 = document.getElementsByClassName('landing-logos')[0].children[1];
  let logo3 = document.getElementsByClassName('landing-logos')[0].children[2];


  $('.landing-logos').delay(900).animate({height: '5vw'});

  $(logo1).delay(1200).animate({opacity:'1'},500);
  $(logo2).delay(1400).animate({opacity:'1'},500);
  $(logo3).delay(1600).animate({opacity:'1'},500);

  // $('.landing-logos h1').on('mouseenter', function(){
  //   $(this).stop().animate({fontSize: '5vw'});
  // });
  // $('.landing-logos h1').on('mouseleave', function(){
  //   $(this).stop().animate({fontSize: '3vw'});
  // });
}


  render(){
    return (
      <div className='landing-main'>
        <div className="space-creator"></div>
        <NameMain />

        <div className="landing-logos">
          <h1><a target='_blank' href='https://github.com/joej326'><i className="fa fa-github" aria-hidden="true"></i></a></h1>
          <h1><a target='_blank' href='https://www.linkedin.com/in/joseph-joyce/'><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></h1>
            <h1><a target='_blank' href='https://www.youtube.com/channel/UC3H1nNKhirn_HXiC1AyELdQ'><i className="fa fa-youtube" aria-hidden="true"></i></a></h1>
        </div>


      </div>
    )
  }

}
