// import Navbar from "../../components/Navbar";

import { useState } from "react";
import "../../assets/css/landing.css";
import PricingTable from "../../components/Pricing";
import FeatureLayout from "../../components/Features";
import About from "../../components/About";
// import './styles.css'; // Import your CSS file containing styles

function Landing() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const elements = document.querySelectorAll('.goblack');
    elements.forEach((element) => {
      element.classList.toggle('dark-mode');
    });
  };

  return (
    <div>
      <section id="one">
        <nav id="nav">
          <div className="nav-logo">
            <div className="nav-heading">
              <span href="#">
                <i className="fas fa-paw logo white"></i>
                Dogs Care
              </span>
            </div>
            <div className="hamburger">
              <a href="#">
                <i className="far fa-moon white"></i>
              </a>
              <a href="#">
                <i className="fas fa-bars"></i>
              </a>
            </div>
          </div>
          <ul className="nav-links">
            <li><a>HOME</a></li>
            <li><a>ABOUT</a></li>
            <li><a>SERVICES</a></li>
            <li><a>PAGES</a></li>
            <li><a>CONTACT</a></li>
            <div className="search-section">
              <span className="search">
                <input type="search" placeholder="Enter to search" />
                <button className="search-btn">
                  <i className="fas fa-search"></i>
                </button>
              </span>
            </div>
            <span onClick={toggleDarkMode}>
              <i className="far fa-moon white night"></i>
            </span>
          </ul>
        </nav>
        <div className="content">
          <div className="text-content">
            <h1 className="white">Providing Special care For <strong>Your Pets!</strong></h1>
            <h4 className="blackish">We offer special services for special pets!</h4>
            <div className="two-button">
              <button className="w-btn btn">View Our Services</button>
              <button className="t-btn btn">Hire Us</button>
            </div>
          </div>
        </div>
      </section>

      <section id="one-half" className="goblack">
      <About/>
      </section>
      <section id="one-half" >
      <FeatureLayout/>
      </section>
      <section id="one-half">
      <PricingTable/>
      </section>

      <footer id="eight">
        <div className="footer__container">
          <div className="dog__care">
            <span href="#"><i className="fas fa-paw"></i> Dogs Care</span>
            <p>Duis imperdiet sapien tortor, vitae congue diam auctor vitae. Aliquam eget turpis ornare, euismod ligul aeget, enenatis dui.</p>
          </div>
          <div className="dog__categories">
            <h3>CATEGORIES</h3>
            <div className="categories">
              <ul>
                <li>&gt; Dog</li>
                <li>&gt; Dog Care</li>
                <li>&gt; Pets</li>
                <li>&gt; Uncategorized</li>
              </ul>
              <ul>
                <li>&gt; May 2021</li>
                <li>&gt; April 2021</li>
              </ul>
            </div>
          </div>
          <div className="newsletter">
            <h3>NEWSLETTER</h3>
            <h3>SUBSCRIBE HERE NOW</h3>
            <span>
              <input type="text" placeholder="Email Address" /><button className="btn"><i className="far fa-paper-plane"></i></button>
            </span>
            <p>Subscribe to our mailing list and get updates to your email inbox.</p>
          </div>
        </div>
        <div className="copyright">
          <p>&#169; 2021 Dogs Care. All Rights Reserved | WordPress Theme by <strong>W3Layouts.</strong></p>
          <div className="share">
            <div><i className="fab fa-facebook-f"></i></div>
            <div><i className="fab fa-linkedin-in"></i></div>
            <div><i className="fab fa-twitter"></i></div>
            <div><i className="fab fa-google-plus-g"></i></div>
            <div><i className="fab fa-github"></i></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
