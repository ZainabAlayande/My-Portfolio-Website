import React from 'react'

const About = () => {
  return (
    <div className="container text-center mt-5 container mt-4">
      <h1 className="text-white fw-bold fs-1 mb-4 text-center align-items-center">What I do</h1>
      <p className="text-white align-items-center" >
        I am a skilled and passionate web designer with experience in creating
        visually appealing and user-friendly websites. I have a strong understanding of designer
        and a keen eye for detail. I am proficient in HTML, CSS and JavaScript, as well
        as design software such as Adobe Photoshop and Illustrator. 
      </p>

      <div style={{width: "80%"}} className='text-light align-items-center'>
        <div className='d-flex border'>
          <img src='' alt='No Img'/>
          <h5>Backend Developer</h5>
        </div>

        <div className='d-flex border'>
          <img src='' alt='No Img'/>
          <h5>Frontend Developer</h5>
        </div>

        <div className='d-flex border'>
          <img src='' alt='No Img'/>
          <h5>Backend Developer</h5>
        </div>

      </div>

    </div>
  )
}

export default About