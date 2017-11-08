import React from 'react';
import './Style.css';

const Services = () => {
    return (
        <section class="service text-center" id="service">
            <div class="container">
                <div class="row">
                    <h2>our services</h2>
                    <h4>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h4>
                    <div class="col-md-3 col-sm-6">
                        <div class="single-service">
                            <div class="single-service-img">
                                <div class="service-img">
                                    <img class="heart img-responsive" src="img/intercoms_radios_icon.jpg+ " alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="single-service">
                            <div class="single-service-img">
                                <div class="service-img">
                                    <img class="brain img-responsive" src="img/service2.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="single-service">
                            <div class="single-service-img">
                                <div class="service-img">
                                    <img class="knee img-responsive" src="img/service3.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="single-service">
                            <div class="single-service-img">
                                <div class="service-img">
                                    <img class="bone img-responsive" src="img/service4.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;