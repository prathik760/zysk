import React from 'react';
import FeatureItem from './Items';
import '../Features/Features.css';

const Features = () => {
  const featuresData = [
    {
      img: "/src/assets/Features/message-chat-circle.png",
      title: "Share team inboxes",
      description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
      img: "/src/assets/Features/zap.png",
      title: "Deliver instant answers",
      description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy."
    },
    {
      img: "/src/assets/Features/chart-breakout-square.png",
      title: "Manage your team with reports",
      description: "Measure what matters with easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks."
    },
    {
      img: "/src/assets/Features/Icon-2.png",
      title: "Connect with customers",
      description: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."
    },
    {
      img: "/src/assets/Features/Icon-3.png",
      title: "Connect the tools you already use",
      description: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools."
    },
    {
      img: "/src/assets/Features/Icon-4.png",
      title: "Our people make the difference",
      description: "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
    }
  ];

  return (
    <> 
      <div className='text'>Features</div>
      <div className="features">  
        <section className="main-container">
          <h1 className="title-heading">Analytics that feels like it’s from the future</h1>
          <p className="description">
            Powerful, self-serve product and growth analytics to help you convert, engage, <br />
            and retain more users. Trusted by over 4,000 startups.
          </p>
          
          <div className="features-grid">
            {featuresData.map((feature, index) => (
              <FeatureItem 
                key={index}
                img={feature.img}    
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Features;
