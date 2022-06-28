import React, { Component } from 'react';

class About extends Component {
    render() {


        return (
            <section id="about">
                <div className="six columns FirstHalf">
                    <h1 className="OurStoryHeader">Our Story</h1>
                    <hr className="OurStoryHr" />
                    <h4 className="OurStoryText">
                        Meg and Mary knew they wanted to be together from their first conversation. Almost immediately on sitting down at the New Orleans coffee shop where they met, they were joking and laughing and had connected like they hadn't thought possible!
                    </h4>
                    <hr className="OurStoryTextHr" />
                    <h4 className="OurStoryText">
                        Since then they've moved across the country together, adopted a kitten (Cordelia) to keep their grumpy middle aged cat (Freya) company and traveled to two countries and many different cities. Exploring and learning new things together is one of their favorite things in the world. However, even better than hiking a volcano* in Guatemala or going to museums in Vancouver has been getting to know the person each other is, was, and is becoming. Thank you for joining us in a celebration of their love!
                    </h4>
                    <h6 className="OurStoryText">
                        *okay, Mary hiked it. Meg got a horse to carry her the rest of the way!
                    </h6>
                </div>

                <div className="six columns SecondHalf">
                    <div className="row">

                        <div className="OSPcolumn">
                            <img src="../images/us2.jpg" alt="" id="OSP1"></img>
                        </div>

                        <div className="OSPcolumn">
                            <img src="../images/meg.jpg" alt="" id="OSP3"></img>
                            <img src="../images/us.jpg" alt="" id="OSP5"></img>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default About;
