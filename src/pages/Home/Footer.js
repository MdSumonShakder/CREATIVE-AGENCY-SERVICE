import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="p-3">
        <div className="container">
          <div className="row">
            <div className=" text-center icon">
            <a
                target="_blank"
                href="https://www.facebook.com/"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                target="_blank"
                href="https://twitter.com/home"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
      
              <a
                target="_blank"
                href="https://www.instagram.com/"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
          
              <a
                target="_blank"
                href="https://www.linkedin.com/feed/"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
         
              <a
                target="_blank"
                href="https://github.com/MdSumonShakder"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
       
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCLD9CflKsqVox6JZLbKpt0Q"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
          
             
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
