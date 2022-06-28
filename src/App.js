import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Calendar from './Components/Calendar';
import Contact from './Components/Contact';
import Announcements from './Components/Announcements';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      calendarData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getCalendarData(){
    $.ajax({
      url:'/calendarData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({calendarData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getCalendarData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.calendarData.main}/>
        <About data={this.state.calendarData.main}/>
        <Calendar data={this.state.calendarData.calendar}/>
        <Portfolio data={this.state.calendarData.portfolio}/>
        <Announcements data={this.state.calendarData.announcements}/>
        <Contact data={this.state.calendarData.main}/>
        <Footer data={this.state.calendarData.main}/>
      </div>
    );
  }
}

export default App;
