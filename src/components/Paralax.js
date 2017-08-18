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
              <div className="project-row">
                <Project link='https://www.youtube.com/watch?v=2aAHu8qtJdE' title={['Skateboard Clone', <br />, '(Video)']} thumbnail='http://i.imgur.com/4UV8LQM.jpg' />
                <Project title='UC Davis Clone' thumbnail='http://i.imgur.com/wooXzXW.png' link='http://198.199.104.39:8011/' />
                <Project title={['Admin Dashboard',<br />, '(Video)']} thumbnail='http://i.imgur.com/3mqY61Y.png' link='https://www.youtube.com/watch?v=j5z6mhGqv58' />
              </div>
              <div className="project-row">
                <Project title='Simple Weather App' thumbnail='http://i.imgur.com/v78Frs2.png' link='http://198.199.104.39:8033/' />
                <Project title='Peet&#39;s Coffee Clone' thumbnail='http://i.imgur.com/ZPfOYXU.png' link='http://198.199.104.39:8017' />
                <Project title={['Amazon Clone', <br />, '(Coming Soon)']} thumbnail='http://i.imgur.com/rOiG3Dd.png' link='#' />
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
