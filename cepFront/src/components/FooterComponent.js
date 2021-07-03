import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-6 col-sm-3 text-left">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                    </div>
                  <div className="col-sm-4 text-right">
                        <a role="button" className="btn btn-link" href="tel:+123456789"><i className="fa fa-phone" /> 1-123-456-7890</a><br />
                        <a role="button" className="btn btn-link" href="mailto:support@company.com"><i className="fa fa-envelope-o" />support@company.com</a>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;