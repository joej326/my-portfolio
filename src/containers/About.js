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
               Learning and teaching are probably my two
               favorite things in the whole world. <br />
                I also love having deep conversations with people. <br />
               If you love philosophy like I do,
               we could probably talk for hours on end. <br />
               (If you don't like philosophy, don't get me started! I may bore you with my deep thoughts!) <br />
               <br />

               In my freetime you will probably find me reading,
              rollerblading/longboarding, gaming, and of course: <span>developing</span>.

            </p>
          </div>


        </div>
      </div>
    )
  }

}
