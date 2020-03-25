import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var resumeDownload = this.props.data.resumedownload;
      }

      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
               </div>
               <div className="nine columns main-col">
                  <h2>About Our Organization</h2>
                  <p>{bio}</p>
                  <div className="row">
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="twelve columns">
                  <div className="ourOfficers">
                     <h2 className="officerstitle">Our Officers </h2>
                     <div className="officers">
                        <div className="officer1section">
                           <h4 className="officer1">Amber Lubera</h4>
                           <img className="officer1pic" src="https://linguistics.arizona.edu/sites/linguistics.arizona.edu/files/user_photo/picture-414-1535139531.jpg"></img>
                           <h6 className="officer1">President & Founder</h6>
                        </div>
                        <div className="officer1section">
                           <h4 className="officer1">Amber Lubera</h4>
                           <img className="officer1pic" src="https://linguistics.arizona.edu/sites/linguistics.arizona.edu/files/user_photo/picture-414-1535139531.jpg"></img>
                           <h6 className="officer1">President & Founder</h6>
                        </div>
                     </div>
                     <div className="officer1section">
                        <h4 className="officer1">Amber Lubera</h4>
                        <img className="officer1pic" src="https://linguistics.arizona.edu/sites/linguistics.arizona.edu/files/user_photo/picture-414-1535139531.jpg"></img>
                        <h6 className="officer1">President & Founder</h6>
                     </div>
                     <div className="officer1section">
                        <h4 className="officer1">Amber Lubera</h4>
                        <img className="officer1pic" src="https://linguistics.arizona.edu/sites/linguistics.arizona.edu/files/user_photo/picture-414-1535139531.jpg"></img>
                        <h6 className="officer1">President & Founder</h6>
                     </div>
                  </div>
               </div>
            </div>

         </section>
      );
   }
}

export default About;
