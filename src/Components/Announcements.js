import React, { Component } from 'react';

class Announcements extends Component {
  render() {

    if(this.props.data){
      var announcements = this.props.data.announcements.map(function(announcements){
        return  <li key={announcements.user}>
            <blockquote>
              <h5 className="announcementTitle">{announcements.title}</h5>
               <p>{announcements.text}</p>
               <cite>{announcements.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="announcements">
      <div className="text-container">
         <div className="row">
    <h1 className="announcementstitle">Announcements</h1>
            <div className="ten columns flex-container">
                  <ul className="slides">
                      {announcements}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Announcements;
