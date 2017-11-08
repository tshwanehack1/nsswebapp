import React from 'react';
import './Style.css';

const Slider = () => {
    return (
        <section className="slider" id="home">
            <div className="container-fluid">
                <div className="row">
                    <div id="carouselHacked" className="carousel slide carousel-fade" data-ride="carousel">
                        <div className="header-backup"></div>
                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <img src="img/slide-one.jpg" alt=""/>
                                <div className="carousel-caption">
                                    <h1>providing</h1>
                                    <p>high quality service for more than 10 years.</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src="img/slide-two.jpg" alt=""/>
                                <div className="carousel-caption">
                                    <h1>providing</h1>
                                    <p>high quality service for more than 10 years</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src="img/slide-three.jpg" alt=""/>
                                <div className="carousel-caption">
                                    <h1>providing</h1>
                                    <p>high quality service for more than 10 years</p>

                                </div>
                            </div>
                            <div className="item">
                                <img src="img/slide-four.jpg" alt=""/>
                                <div className="carousel-caption">
                                    <h1>providing</h1>
                                    <p>high quality service for more than 10 years</p>
                                </div>
                            </div>
                        </div>

                        <a className="left carousel-control" href="#carouselHacked" role="button" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#carouselHacked" role="button" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Slider;
