import React, { Component } from 'react';
// import { connect } from 'react-redux';

import './../style/about.css';


export default class About extends Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.thumbnail);
    return (
      <div className='about-main-div'>


        <div className='my-pic-and-paragraph'>
          <div>
            <img className='my-pic' src="http://i.imgur.com/9ooINmT.jpg" alt=""/>
          </div>
          <div className='about-paragraph'>
            <h2>About Me:</h2>
            
            <p>
              Hello. I'm Joe. I code. <br />
              <br />
              I'm a Full Stack Web Developer. I live and breathe code. <br />
              It's a true miracle to me that something like code can be so <span>fun</span>, and yet so <span>practical</span>. <br />
              <br />
              I love sharing my <span>passion</span> of coding/development with others. <br />
              Ever since I was a child people have told me what a great <span>teacher</span> I am. <br />
              I believe my teaching comes from my ability to tell how others think. <br />
              That way I can figure out why they're getting stuck.<br />
              <br />
              I'm very <span>personable</span> and easy to talk to. Don't be afraid to reach out! <br />
              It's a lot of fun to meet the interesting minds the world has to offer. <br />
              <br />
              Thank you for checking out my website. <br />
              Have a great rest of your day! <br />
              <br />
              Joseph
            </p>
          </div>


        </div>
      </div>
    )
  }

}
