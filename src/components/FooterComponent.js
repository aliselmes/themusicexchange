import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-12 col-md-4 order-3 order-md-1">
                        <div className="row">
                            <div className="col-12 text-center text-md-left">
                                123 Some Street <br />
                                Some Town <br />
                                ZC 12345
                            </div>
                            <div className="col-12 text-center text-md-left p-0">
                                <a role="button" className="btn btn-link" href=""><i className="fa fa-phone" /> 1-123-456-7890</a><br />
                                <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> info@themusicexchange.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 text-center my-3 my-md-0 order-2">
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>
                    </div>
                    <div className="col-12 col-md-4 text-center text-md-right order-1 order-md-3">
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li className="my-1"><Link to='/geardirectory'>Browse Gear</Link></li>
                            <li className="my-1"><Link to='/musicians'>Find Musicians</Link></li>
                            <li className="my-1"><Link to='/gigs'>Gigs</Link></li>
                            <li className="my-1"><Link to='/instructors'>Instructors</Link></li>
                            <li className="my-1"><Link to='/aboutus'>About</Link></li>
                            <li><Link to='/contactus'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;