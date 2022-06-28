import React, { Component } from 'react';

class Contact extends Component {
    render() {

        return (
            <section id="contact">
                <div className="row section-head">
                    <div className="eight columns header-col RSVPHead">
                        <h2 className="rsvptitle">R.S.V.P.</h2>
                        <h1>Please RSVP at</h1>
                        <hr className="RSVPHr" />
                        <h2>leveyweddingrsvp@gmail.com</h2>
                    </div>
                    <div className="row">
                        <div className="four columns rsvpInclude">
                            <p className="lead">When you rsvp please include:</p>
                            <ul className="rsvpQs">
                                <li>-your name</li>
                                <li>-your guest's name</li>
                                <li>-your mailing address</li>
                                <li>-music request</li>
                                <li>-any allergies or accomodations needed</li>
                            </ul></div>
                    </div>
                    <br /><br />
                </div>
            </section >
        );
    }
}

export default Contact;
