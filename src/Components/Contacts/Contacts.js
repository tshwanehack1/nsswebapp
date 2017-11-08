import React from 'react';
import './Style.css';

const Contacts = () => {
    return (
        <section class="contact">
            <div class="container">
                <div class="row">
                    <div class="contact-caption clearfix">
                        <div class="contact-heading text-center">
                            <h2>contact us</h2>
                        </div>
                        <div class="col-md-5 contact-info text-left">
                            <h3>contact information</h3>
                            <div class="info-detail">
                                <ul><li><i class="fa fa-calendar"></i><span>Monday - Friday:</span> 9:30 AM to 6:30 PM</li></ul>
                                <ul><li><i class="fa fa-map-marker"></i><span>Address:</span> 123 Some Street , London, UK, CP 123</li></ul>
                                <ul><li><i class="fa fa-phone"></i><span>Phone 1:</span> (072) 051 4222</li></ul>
                                <ul><li><i class="fa fa-phone"></i><span>Phone 2:</span> (074) 912 0188</li></ul>
                                <ul><li><i class="fa fa-envelope"></i><span>Email:</span> eugene.masinamela@outlook.com</li></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;