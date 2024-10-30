import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <a href="https://www.facebook.com" className="text-white mx-2">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.instagram.com" className="text-white mx-2">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href='https://wa.me/+40720870413' className="text-white mx-2">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
            <a href="https://www.tiktok.com" className="text-white mx-2">
              <FontAwesomeIcon icon={faTiktok} size="2x" />
            </a>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <p className="mb-0">&copy; {new Date().getFullYear()} PaviCozo. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
