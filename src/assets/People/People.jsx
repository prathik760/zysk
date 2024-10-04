 import React from 'react'
 import './../People/People.css'
 
 const People = () => {
   return (
    <div className="people-container">
    <div className="people-card">
      <div className="person-details">
        <img src="/src/assets/People/Avatar group.png" alt="Candice Wu" className="person-avatar" />
        <div className="person-info">
          <p className="person-name">Still have questions?</p>
          <p className="person-title">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
  
           <button className='person-btn'>Get in Touch</button>
        </div>
      </div>
    </div>
  </div>
  
   )
 }
 
 export default People