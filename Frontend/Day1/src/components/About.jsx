import "../assets/css/about.scss"
const About = () => {
    return (
        <div className="wrapper">
            <div className="feature-block-offset">
                <div className="top">
                    <div className="first"></div>
                    <div className="second"></div>
                </div>
                <div className="fb-offset">
                    <div className="fb-offset-inner">
                        <div className="transparent"></div>
                        <div className="image">
                            {/* Your image component or background image */}
                        </div>
                        <div className="content">
                            <h2>FAST AND LIGHT ADVENTURES</h2>
                            <p>Our Terra M is the sportiest option within the family, fast and light for those back roads or gravel path adventures.</p>
                            <p>The carbon frame offers the perfect blend of weight, comfort and strength while our LOCKR system takes care of storing those essentials. With our MyO program your Terra can be as unique as your adventures.</p>
                            <a href="" className="button">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
