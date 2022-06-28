import React, { Component } from 'react';

class Announcements extends Component {
    render() {

        return (
            <section id="announcements">
                <div className="text-container">
                    <div className="row">
                        <div className="six columns">
                            <h1 className="announcementstitle">Our Registry</h1>
                        </div>
                        <div className="six columns">
                            <h3 className="registryText">Your presence at our Wedding is the greatest present of all.
                                However, if you wish to honor us with a gift, we have created registries at the below stores.
                                You may click the logos below to access our online lists:</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="six columns flex-container target">
                            <a href="https://www.target.com/gift-registry/gift/levey-wedding"><img src="../images/portfolio/target-logo.png" alt="" id="TargetLogo"></img></a>
                        </div>
                        <div className="six columns flex-container">
                            <a href="https://www.worldmarket.com/wishlist/friendview.do?method=view&wlid=2773009">
                                <img src="../images/portfolio/world-market-logo.png" alt="" id="WorldMarketLogo"></img>
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default Announcements;
