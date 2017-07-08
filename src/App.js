import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import 'jquery.scrollintoview';

import Header from './containers/Header';
import Paralax from './components/Paralax';
import Footer from './containers/Footer';
import Skills from './containers/Skills';
import About from './containers/About';
import Landing from './containers/Landing';

class App extends Component {

  componentDidMount(){
    $(document).ready(function(){
      $('.hover').on('mouseenter', function(){
        $(this).css({position:'relative'});
        $(this).animate({bottom: '1vw'},200);
      });
      $('.hover').on('mouseleave', function(){
        $(this).stop();
        $(this).animate({bottom: '0vw'},200);
      });

      $('form').on('keypress', function(e) {
          return e.which !== 13;
      });

      if( $('name').val() === null || $('mail').val() === null){
        alert('pls fill out')
      }

// $('.resume-div').on('mouseenter', function(){
//   $('.resume-div').on();
//   $('.resume-div').css({position:'relative'});
//   $('.resume-div').animate({bottom: '1vw'},200);
// })
// $('.resume-div').on('mouseleave', function(){
//   $('.resume-div').stop();
//   $('.resume-div').animate({bottom: '0vw'},200);
// })




  })
}



  render() {

    return (
      <div className="App">
        <Header />
        <Landing />
        <Paralax />
        <Skills />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
