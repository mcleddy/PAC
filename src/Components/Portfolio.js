import React, { Component } from 'react';

class Portfolio extends Component {
    render() {

        if (this.props.data) {
            var projects = this.props.data.projects.map(function (projects) {
                var projectImage = 'images/portfolio/' + projects.image;
                var projectIcon = 'images/portfolio/' + projects.category;
                return <div key={projects.title} className="columns portfolio-item">

                    <img alt={projects.title} src={projectIcon} className="reccomendationIcon" />
                    <div className="item-wrap">
                        <a href={projects.url} title={projects.title}>
                            <img alt={projects.title} src={projectImage} />
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h6>{projects.title}</h6>
                                    <h6>{projects.type}</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            })
        }

        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Recommendations</h1>
                        <hr id="portfolioHr" />
                        <h2>Here are some recommendations for our out of town guests</h2>
                        <div id="portfolio-wrapper" className="bgrid-sixths s-bgrid-thirds cf">
                            {projects}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;
