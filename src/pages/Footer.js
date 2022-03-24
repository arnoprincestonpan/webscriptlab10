import React from 'react';
import {Link} from 'react-router-dom';
const Footer = () => (
    <React.Fragment>
        <div className = "footer-container">
            <footer class = "border-top footer text-muted mt-auto">
            <p>© 2022 - FizzBuzzWeb - <Link to="/privacy">Privacy</Link></p>
            </footer> 
        </div>
    </React.Fragment>
);

export default Footer;