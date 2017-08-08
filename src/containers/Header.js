import React, { Component } from 'react';
// import { connect } from 'react-redux';
import $ from 'jquery';
import 'jquery.scrollintoview';

import './../style/header.css';


export default class Header extends Component{
  constructor(props){
    super(props);
  }

componentDidMount(){
  $(document).ready(function() {

    $('.portfolio').on('click',function(){
      $('html, body').animate({
      scrollTop: $(".project-rows-container").offset().top
  }, 1000);
});

$('.about').on('click',function(){
  $('html, body').animate({
  scrollTop: $(".about-main-div").offset().top
}, 1000);
});

$('.connect').on('click',function(){
  $('html, body').animate({
  scrollTop: $(".footer-main").offset().top
}, 1000);
});

$('.skills').on('click',function(){
  $('html, body').animate({
  scrollTop: $(".skills-main").offset().top
}, 1000);
});

$('.back-to-top').on('click',function(){
  $('html, body').animate({
  scrollTop: $(".header-main").offset().top
}, 500);
});


var target = $(".project-rows-container").offset().top,
    timeout = null;

$(window).scroll(function () {
    if (!timeout) {
        timeout = setTimeout(function () {
            console.log('scroll');
            clearTimeout(timeout);
            timeout = null;
            if ($(window).scrollTop() >= target) {
              $('.back-to-top').animate({top:'-1vw'})
            }
            if ($(window).scrollTop() <= target) {
              $('.back-to-top').animate({top:'-11vw'},50)
            }
        }, 250);
    }
});


  })
}
  // goToAbout(){
  //     console.log(document.getElementsByClassName('about-main-div')[0]);
  //     var elem = document.getElementsByClassName('about-main-div')[0];
  //     console.log(elem);
  //     elem.scrollIntoView();
  //   }


  render(){
    return (
      <div>

      <div className='header-main'>
        <div>
          <h4>JJ</h4>
        </div>
        <ul className='social-media-logos nav nav-pills'>
          <li><a className='portfolio' href='#'>Portfolio</a></li>
          <li><a className='skills' href='#'>Skills</a></li>
          <li><a className='about' href='#'>About</a></li>
          <li><a className='connect' href='#'>Connect</a></li>
        </ul>
      </div>

      <a href='#'>
      <div className='back-to-top'>
        <h2>Back to top</h2>
      </div>
      </a>

    </div>
    )
  }

}
