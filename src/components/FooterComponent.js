import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col">
                        <div className="row">
                            <div className="col-12 text-left">
                                123 Some Street <br />
                                Some Town <br />
                                ZC 12345
                            </div>
                            <div className="col-12 text-left p-0">
                                <a role="button" className="btn btn-link" href=""><i className="fa fa-phone" /> 1-123-456-7890</a><br />
                                <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> info@themusicexchange.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="col text-center">
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>
                    </div>
                    <div className="col text-right">
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/browse'>Browse</Link></li>
                            <li><Link to='/aboutus'>About</Link></li>
                            <li><Link to='/contactus'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;