import social from "../../assets/social.png";
import Instagram from "../../assets/instagram.png";
import Youtube from "../../assets/youtube.png";
import twitter from "../../assets/twitter.png";
import FaceBook from "../../assets/facebook.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section social-links">
          <h3 className="section-title">Connect With Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/" className="social-icon">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://x.com/" className="social-icon">
              <img src={FaceBook} alt="Facebook" />
            </a>
            <a href="https://www.youtube.com/" className="social-icon">
              <img src={Youtube} alt="Youtube" />
            </a>
            <a href="https://x.com/?lang=en" className="social-icon">
              <img src={twitter} alt="X" />
            </a>
            <a href="https://in.linkedin.com/" className="social-icon">
              <img src={social} alt="Linkedin" />
            </a>
          </div>
        </div>

        <div className="footer-section newsletter">
          <h3 className="section-title">Stay Updated</h3>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button className="subscribe-button">
              Subscribe
            </button>
          </div>
        </div>

        <div className="footer-section address">
          <h3 className="section-title">Our Location</h3>
          <p className="address-text">
            14, 3rd cross, Parappana Agrahar, Electronic City Rd,
            <br />
            Electronics City Phase 1, Electronic City, Bengaluru,
            <br />
            Karnataka 560100
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          © 2024 UpStore. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
