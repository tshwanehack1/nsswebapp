import React from 'react';
import './Style.css';

const AboutUs = () => {
  return (
      <section class="about text-center" id="about">
          <div class="container">
              <div class="row">
                  <h2>about us</h2>
                  <h4>We are a black owned security solutions company based in Cosmo City.
                      We provide our services nationwide and we pride ourselves with more than 10 years of making our clients satisfied and safe.</h4>
                  <div class="col-md-4 col-sm-6">
                      <div class="single-about-detail clearfix">
                          <div class="about-img">
                              <img class="img-responsive" src="img/item1.jpg" alt=""/>
                          </div>
                          <div class="about-details">
                              <div class="pentagon-text">
                                  <h1>I</h1>
                              </div>
                              <h3>Installation</h3>
                              <p>Installation of security devices and features around your home or business.</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 col-sm-6">
                      <div class="single-about-detail">
                          <div class="about-img">
                              <img class="img-responsive" src="img/item2.jpg" alt=""/>
                          </div>
                          <div class="about-details">
                              <div class="pentagon-text">
                                  <h1>S</h1>
                              </div>
                              <h3>Servicing</h3>
                              <p>Diagnosing and servicing of existing security devices and features.</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 col-sm-6">
                      <div class="single-about-detail">
                          <div class="about-img">
                              <img class="img-responsive" src="img/item3.jpg" alt=""/>
                          </div>
                          <div class="about-details">
                              <div class="pentagon-text">
                                  <h1>C</h1>
                              </div>
                              <h3>Consultation</h3>
                              <p>We offer security advice tailor made for your location and infrastructure in place</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default AboutUs;