import React, { Component } from 'react';
// import { connect } from 'react-redux';

import './../style/paralax.css';
import NameMain from './Name_Main';
import Project from './../containers/Project';






export default class Paralax extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='main-paralax-image'>



        <div className='space-creator'></div>
        {/* <NameMain /> */}


        <div className='project-rows-container'>
          <h2>Portfolio</h2>
          <div className='projects-before-resume'>
            <h3 className='projects-mini'>Projects:</h3>
            <div className='project-container'>
              <Project
                link='https://www.youtube.com/watch?v=2aAHu8qtJdE'
                title='Skateboard Clone'
                thumbnail='http://i.imgur.com/4UV8LQM.jpg' />
              <Project title='UC Davis Clone' thumbnail='http://i.imgur.com/wooXzXW.png' link='http://198.199.104.39:8011/' />
              <Project title='Admin Dashboard' thumbnail='http://i.imgur.com/3mqY61Y.png' link='https://www.youtube.com/watch?v=j5z6mhGqv58' />
            </div>
          </div>




{/* //NOT PROJECTS */}
      <div className="project-container">
          <div className='hover resume-div'>
            <a
              href='http://i.imgur.com/PSUsBq5.png'
              target='_blank' >
            <img className='resume' src="http://i.imgur.com/yTtgkYI.png" alt="resume"/>
            <h3>Resume</h3>
            </a>
          </div>


          <a
            href='https://www.youtube.com/channel/UC3H1nNKhirn_HXiC1AyELdQ'
            target='_blank' >
          <div className='hover youtube-div'>

            <img className='resume' src="https://www.youtube.com/yt/brand/media/image/YouTube-logo-full_color.png" alt="resume"/>
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
