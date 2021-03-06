import React, { Component } from 'react';
// import { connect } from 'react-redux';
import $ from 'jquery';

import './../style/paralax.css';
import NameMain from './Name_Main';
import Project from './../containers/Project';






export default class Paralax extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    let flag = false;
    $('.project-rows-container').animate({opacity: 0, right: '0vw'},1000);
    // $('.project-rows-container').css({opacity: 0.5});
    $(window).scroll(function () {
      console.log($(window).scrollTop());

      if ($(window).scrollTop() >= 500 && flag === false) {
        $('.project-rows-container').css({ position: 'relative',
                                           right: '50vw'
                                           });
        $('.project-rows-container').animate({opacity: 1, right: '0vw'},1000);
        flag = true;
      }

    });



  }

  render(){
    return (
      <div className='main-paralax-image'>



        <div className='space-creator'></div>
        {/* <NameMain /> */}


        <div className='project-rows-container'>
          <h2>Portfolio</h2>
          <div className='projects-before-resume'>
            <h3 className='projects-mini'>Some of my work:</h3>
            <div className='project-container'>
              <div className="project-row row1">
                <Project github='https://github.com/joej326/personal_project' link='https://www.youtube.com/watch?v=2aAHu8qtJdE' title={['Skateboard Clone', <br />, '(Video)']} thumbnail='http://i.imgur.com/4UV8LQM.jpg' />
                <Project github='https://github.com/joej326/UCdavis-clone' title='UC Davis Clone' thumbnail='http://i.imgur.com/wooXzXW.png' link='http://198.199.104.39:8011/' />
                <Project github='https://github.com/TheCodingCrusaders/glorious-group-project/tree/master/the-project' title={['Admin Dashboard',<br />, '(Video)']} thumbnail='http://i.imgur.com/3mqY61Y.png' link='https://www.youtube.com/watch?v=j5z6mhGqv58' />
              </div>
              <div className="project-row">
                <Project github='https://github.com/joej326/react-weather-app' title='Simple Weather App' thumbnail='http://i.imgur.com/v78Frs2.png' link='http://198.199.104.39:8033/' />
                <Project github='https://github.com/joej326/peets-clone' title='Peet&#39;s Coffee Clone' thumbnail='http://i.imgur.com/ZPfOYXU.png' link='http://198.199.104.39:8017' />
                <Project github='https://github.com/the-code-warriors/amazon-clone' title={['Amazon Clone', <br />, '(Coming Soon)']} thumbnail='http://i.imgur.com/rOiG3Dd.png' link='#' />
              </div>
            </div>
            <h2 id='many-more'>Many more projects on my <a id='more-on-github' href='https://github.com/joej326'>Github</a>!</h2>
          </div>




{/* //NOT PROJECTS */}
      <div className="project-container">



          <a
            href='https://www.youtube.com/channel/UC3H1nNKhirn_HXiC1AyELdQ'
            target='_blank' >
          <div className='hover youtube-div'>

            <img className='resume' src="http://i.imgur.com/zuQrtap.png" alt="resume"/>
            <h3>My YouTube Tutorials</h3>

          </div>
          </a>
        </div>
      </div>
      <div className='space-creator'></div>
    </div>
    )
  }

}
