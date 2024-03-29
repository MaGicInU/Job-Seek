import { useEffect } from 'react';
import '../assets/css/pricing.scss'; // Import your CSS file containing styles

const PricingTable = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".pricing-card");

    const handleMouseOver = (event) => {
      cards.forEach((el) => el.classList.remove("active"));
      event.currentTarget.classList.add("active");
    };

    cards.forEach((item) => {
      item.addEventListener("mouseover", handleMouseOver);
      return () => {
        item.removeEventListener("mouseover", handleMouseOver);
      };
    });
  }, []);

  return (
    <section>
      <h2>pricing options</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquid eaque mollitia reprehenderit! Quidem doloremque facere veritatis quos, qui impedit.</p>
      <div className="pricing-cards">
        <div className="pricing-card">
          <div className="card">
            <h3 className="card-title">student</h3>
            <hr className="first" />
            <p className="card-price"><span>$</span>9.99</p>
            <ul className="features">
              <li>some amazing feature</li>
              <li>some pro exclusive features</li>
              <li>another option</li>
              <li>final one</li>
            </ul>
            <hr className="second" />
            <a href="#" className="card-btn">i want it</a>
          </div>
        </div>
        <div className="pricing-card active">
          <div className="card">
            <div className="ribbon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              <div>
                best
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="card-title">professional</h3>
            <hr className="first" />
            <p className="card-price"><span>$</span>19.99</p>
            <ul className="features">
              <li>some amazing feature</li>
              <li>some pro exclusive features</li>
              <li>another option</li>
              <li>final one</li>
            </ul>
            <hr className="second" />
            <a href="#" className="card-btn">i want it</a>
          </div>
        </div>
        <div className="pricing-card">
          <div className="card">
            <h3 className="card-title">master</h3>
            <hr className="first" />
            <p className="card-price"><span>$</span>49.99</p>
            <ul className="features">
              <li>some amazing feature</li>
              <li>some pro exclusive features</li>
              <li>another option</li>
              <li>final one</li>
            </ul>
            <hr className="second" />
            <a href="#" className="card-btn">i want it</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
