import React, { Component } from 'react';

class Calendar extends Component {
    render() {

        return (
            <section id="calendar">
                <div className="row section-head">
                    <div className="eight columns header-col RSVPHead">
                        <h2 className="rsvptitle">Itinerary</h2>
                        <div className="location">
                            <h1 className="ItineraryDate">October . 22 . 2022</h1>
                            <hr className="RSVPHr" />
                            <h3>Napoleon House</h3>
                            <h4>500 Chartres St, New Orleans, LA 70130</h4>
                            <img src="../images/portfolio/venue-logo.png" alt="" id="VenueLogo"></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="four columns rsvpInclude itinerary">
                            <p className="lead">The Schedule</p>
                            <ul className="itinerarySchedule">
                                <li>5:30 Arrival</li>
                                <li>6:00 Ceremony</li>
                                <li>6:30 Apetizers & Toasts</li>
                                <li>7:00 Buffet & Dancing</li>
                                <li>9:00 Cake</li>
                                <li>10:00 Goodbyes</li>
                            </ul></div>
                    </div>
                    <br /><br />
                </div>
            </section>
        );
    }
}

export default Calendar;
