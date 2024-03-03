import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; 

export const Footer = () => {
  return (
    <footer className="footer text-center bg-body-tertiary">
      <div className="container pt-4">
        <section className="social-icons mb-4">
          <a href="#!" className="btn btn-link btn-floating btn-lg text-body m-1" role="button">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#!" className="btn btn-link btn-floating btn-lg text-body m-1" role="button">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#!" className="btn btn-link btn-floating btn-lg text-body m-1" role="button">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="#!" className="btn btn-link btn-floating btn-lg text-body m-1" role="button">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#!" className="btn btn-link btn-floating btn-lg text-body m-1" role="button">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#!" className="btn btn-link btn-floating btn-lg text-body m-1" role="button">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </section>
      </div>
      <div className="copy-text text-center p-3">
        © 2024 Copyright:
        <a className="text-body" >Grow.com</a>
      </div>
    </footer>
  );
}


