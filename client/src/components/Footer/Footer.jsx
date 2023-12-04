import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>©2023 Kenta. Tüm hakları saklıdır.</div>
      <div className="footer-social">
        {/* <a
          href="https://www.facebook.com/your_facebook_page_url"
          target="_blank"
          rel="noopener noreferrer"
        >
          < img
            src="/1.png"
            width={15}
            height={15}
            className={ icon}
            alt="Kenta Facebook"
          />
        </a> */}
        <a
          href="https://www.instagram.com/kent.tasarimi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/2.png"
            width={25}
            height={25}
            className="footer-icon"
            alt="Kenta Instagram"
          />
        </a>
        {/* <a
          href="https://twitter.com/your_twitter_page_url"
          target="_blank"
          rel="noopener noreferrer"
        >
          < img
            src="/3.png"
            width={15}
            height={15}
            className={ icon}
            alt="Kenta Twitter"
          />
        </a> */}
        <a
          href="https://www.youtube.com/@Kent.tasarimi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/4.png"
            width={25}
            height={25}
            className="footer-icon"
            alt="Kenta Youtube"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/kent-tasarimi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/5.png"
            width={25}
            height={25}
            className="footer-icon"
            alt="Kenta Linkedin"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
