import React from 'react';
import { Link } from 'react-router-dom';

function About(props) {
    return (
        <div className="container" id="about-component">
            <div className="row my-5">
                <div className="col">
                    <h1>Welcome to The Music Exchange!</h1>
                    <h4>Connecting local musicians to gear, gigs, instructors, and each other since 2020...</h4>
                    <hr />
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-12 col-md-5 mb-3 mb-md-0">
                    <img width="100%" src="/assets/images/community.jpeg"></img>
                </div>
                <div className="col-12 col-md-7">
                    <h3>Our Mission</h3>
                    <p>We started The Music Exchange to help musicians find their community.</p>
                    <p>We know how hard it can be to find like-minded musicians, instructors, gig opportunites, and quality used gear locally. </p>
                    <p>Finding and searching through multiple websites, social media groups, or coffee shop notice boards is time-consuming, exhausting, and frustrating - especially if you are new to town.</p>
                    <p>We aim to be a hub in your local community where musicians can find everything they need in one place!</p>
                    <p><strong>- The Music Exchange Team</strong></p>
                </div>
            </div>
            <div className="row">
                <div className="col mb-5">
                    <h4>Have questions or comments? <Link to="/contactus" className="text-info">Contact us!</Link></h4>
                </div>
            </div>
        </div>
    );

}

export default About;