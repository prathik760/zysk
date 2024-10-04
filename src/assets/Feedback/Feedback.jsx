import React from 'react'
import './../Feedback/Feedback.css'
const Feedback = () => {
  return (
<> 
 
    <div className="testimonial-container">
    <div className="testimonial-box">
    <div className='img'> 
            <img src='/src/assets/Feedback/Logomark-8.png' alt='company name'></img>
            <div className='name'>Sisyphus</div>
         </div>
      <p className="testimonial-text">
        “We’ve been using Untitled to kick start every new project and can’t imagine working without it.”
      </p>
      <div className="testimonial-author">
        <img
          src="/src/profile.png"  
          alt="Candice Wu"
          className="author-image"
        />
        <div>
          <p className="author-name">Candice Wu</p>
          <p className="author-role">Product Manager, Sisyphus</p>
        </div>
        </div>
    </div>
    </div>
    
    </>
  )
}

export default Feedback