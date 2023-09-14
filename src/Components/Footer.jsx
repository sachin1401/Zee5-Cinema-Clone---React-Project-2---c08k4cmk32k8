import React from "react";
import "../style/Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutube,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="foot-container">
        <hr
          style={{
            height: "0.5px",
            borderWidth: "0",
            color: "gray",
            backgroundColor: "rgb(32, 28, 28)",
            marginTop: "0px",
          }}
        />

        <br />
        <div className="foot-logDiv">
          <div className="foot-logo">
            <h4 className="foot-downloadApps">Download Apps</h4>
            <a href="https://play.google.com/store/apps/details?id=com.graymatrix.did">
              <img src="https://www.zee5.com/images/play_store.png?ver=2.50.94" />
            </a>
            <a href="https://apps.apple.com/in/app/zee5-shows-live-tv-movies/id743691886">
              <img src="https://www.zee5.com/images/app_store.png?ver=2.50.94" />
            </a>
          </div>
          <div className="foot-leftlogo">
            <h4>Connect with us</h4>

            <a href="https://www.facebook.com/ZEE5/" className="foot-fb">
              {" "}
              <FaFacebookSquare />
            </a>
            <a href="https://www.instagram.com/zee5/" className="foot-insta">
              <FaInstagramSquare />
            </a>
            <a href="https://twitter.com/zee5india" className="foot-twitter">
              <FaTwitterSquare />
            </a>
            <a
              href="https://www.youtube.com/channel/UCXOgAl4w-FQero1ERbGHpXQ"
              className="foot-youtube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="foot-about">
          {/* <!-- about --> */}
          <Link to="/under-construction">
            <p> About Us</p>
          </Link>
          <p>|</p>
          {/* <!-- help center --> */}
          <Link to="/under-construction">
            <p>Help Center</p>
          </Link>

          <p>|</p>
          {/* <!-- Privacy policy --> */}
          <Link to="/under-construction">
            <p>Buy Plan</p>
          </Link>
        </div>
        <div className="foot-row">
          <div className="foot-footer-col">
            <h3>Popular TV Shows</h3>
            <div>
              {" "}
              <Link to="/under-construction">
                <a href="">Kumkum Bhagya</a>
              </Link>
            </div>{" "}
            <div>
              <Link to="/under-construction">
                <a href="">Kundali Bhagya</a>
              </Link>
            </div>
            <div>
              <Link to="/under-construction">
                <a href="">Bhagya Lakshmi</a>
              </Link>
            </div>
            <div>
              <Link to="/under-construction">
                <a href="">Tujhse Hai Raabta</a>
              </Link>
            </div>
            <div>
              <Link to="/under-construction">
                <a href="">Kyun Rishton Mein Katti Batti</a>
              </Link>
            </div>
          </div>
          <div className="foot-footer-col">
            <h3>Premium Movies</h3>

            <div>
              <Link to="/under-construction">
                <a href="">Kya Meri Sonam Gupta Bewafa</a>
              </Link>
            </div>
            <div>
              <Link to="/under-construction">
                <a href="">Helmet</a>
              </Link>
            </div>
            <div>
              <Link to="/under-construction">
                <a href="">200 Halla Ho</a>
              </Link>
            </div>
            <div>
              <Link to="/under-construction">
                <a href="">14 Phere</a>
              </Link>
            </div>
            <div>
              <Link to="/under-construction">
                <a href="">Dial 100</a>
              </Link>
            </div>
          </div>

          <div className="foot-footer-col">
            <h3>Popular LIVE TV Channels</h3>

            <div>
              <Link to="/under-construction">
                <a href="">Aaj Tak</a>
              </Link>
            </div>
            <div>
              <Link to="/under-construction">
                <a href="">Zee News</a>
              </Link>
            </div>
            <div>
              <Link to="/under-construction">
                <a href="">Zee Tv HD</a>
              </Link>
            </div>
            <div>
              <Link to="/under-construction">
                <a href="">&TV HD</a>
              </Link>
            </div>
            <div>
              <Link to="/under-construction">
                <a href="">Zee Marathi HD</a>
              </Link>
            </div>
          </div>
          <div className="foot-footer-col">
            <h3>Popular Web Series</h3>

            <div>
              <Link to="/under-construction">
                <a href="">Sunflower</a>
              </Link>
            </div>
            <div>
              <Link to="/under-construction">
                <a href="">Jeet Ki Zid</a>
              </Link>
            </div>
            <div>
              <Link to="/under-construction">
                <a href="">Biccho Ka Khel</a>
              </Link>
            </div>
            <div>
              <Link to="/under-construction">
                <a href="">State of Seige:26/11</a>
              </Link>
            </div>
            <div>
              <Link to="/under-construction">
                <a href="">Naxalbari</a>
              </Link>
            </div>
          </div>
          <div className="foot-footer-col">
            <h3>Bollywood Top Celebrities</h3>

            <div>
              <Link to="/under-construction">
                <a href="">Sunny Leone</a>
              </Link>
            </div>
            <div>
              <Link to="/under-construction">
                <a href="">Disha Patani</a>
              </Link>
            </div>
            <div>
              <Link to="/under-construction">
                <a href="">Deepika Padukone</a>
              </Link>
            </div>
            <div>
              <Link to="/under-construction">
                <a href="">Salman Khan</a>
              </Link>
            </div>
            <div>
              <Link to="/under-construction">
                <a href="">Nora Fatehi</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="foot-end">
          Best viewed on Google Chrome 80+, Microsoft Edge 81+, Mozilla Firefox
          75+, Safari 5.1.5+ Copyright © 2022 Zee Entertainment Enterprises Ltd.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
