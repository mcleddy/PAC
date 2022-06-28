import React, { Component } from 'react';

class Header extends Component {
    render() {

        return (
            <header id="home">
                <div className="two columns bannerSection">
                    <div className="verticalNames">
                        <br />
                        <h1 className="verticalNames">M</h1>
                        <h1 className="verticalNames">E</h1>
                        <h1 className="verticalNames">G</h1>
                        <br />
                        <h1 className="verticalNames">&</h1>
                        <br />
                        <h1 className="verticalNames">M</h1>
                        <h1 className="verticalNames">A</h1>
                        <h1 className="verticalNames">R</h1>
                        <h1 className="verticalNames">Y</h1>
                    </div>
                    <nav id="nav-wrap">

                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#about">Our Story</a></li>
                            <li><a className="smoothscroll" href="#calendar">Itinerary</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Recommendations</a></li>
                            <li><a className="smoothscroll" href="#announcements">Registry</a></li>
                            <li><a className="smoothscroll" href="#contact">RSVP</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="two columns bannerSection2">
                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">Levey Wedding</h1>
                            <br></br>
                        </div>
                    </div>
                </div>

            </header>
        );
    }
}

export default Header;
