import React from 'react';
import './../Home/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'; // Import the icon

const Home = () => {
    const companies = [
        { name: 'Boltshift', logo: '/src/assets/Home/Logomark-2.png' },
        { name: 'Lightbox', logo: '/src/assets/Home/Logomark-3.png' },
        { name: 'FeatherDev', logo: '/src/assets/Home/Logomark-4.png' },
        { name: 'Spherule', logo: '/src/assets/Home/Logomark-5.png' },
        { name: 'GlobalBank', logo: '/src/assets/Home/Logomark-6.png' },
        { name: 'Nietzsche', logo: '/src/assets/Home/Logomark-7.png' },
      ];
  return (
    <section className="analytics-section">
  <h1 className="heading">Beautiful analytics to grow smarter</h1>
  <p className="subheading">
    Powerful, self-serve product and growth analytics to help you convert, engage, <br />
    and retain more users. Trusted by over 4,000 startups.
  </p>
  <div className="buttons-container">
    <button className="demo-btn">
      <FontAwesomeIcon icon={faCirclePlay} className='demo-play' /> Demo   
    </button>
    <button className="signup-btn">Sign up</button>
  </div>
  <div className="stats">
    <img src="/src/assets/Home/Container.png" alt="statsimg" className="stats-img" />
</div>
 
 <div className="company-logos-section">
      <p className="company-logos-heading">Join 4,000+ companies already growing</p>
      <div className="company-logos">
        {companies.map((company, index) => (
          <div className="company-logo" key={index}>
            <img src={company.logo} alt={company.name} />
            <p>{company.name}</p>
          </div>
        ))}
      </div>
    </div>



</section>

  );
}

export default Home;
