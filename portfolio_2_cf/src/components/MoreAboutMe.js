import React from 'react'

const MoreAboutMe = () => {
  return (
    <div>
      <h1 className='aboutMeTitle'>Get to Know Me</h1>


      <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style={{width:"300px", height:"300px"}}/>
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect and Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
    </div>
    
  )
}

export default MoreAboutMe