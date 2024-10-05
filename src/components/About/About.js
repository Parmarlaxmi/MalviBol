import React from 'react'
import './About.css'


const About = () => {
  return (
    <div id="about">
      <div className='about_head'>
        <h2>About Us</h2>
      </div>
      <div className="about_desc">
        <div className='left_about'>
          <h1 className='transnow'>Translate Now!</h1>
          <p className='sub_ab'>Regional Language Translator.
            
          </p>
          <p className='sub_ab'>
            The Model is under training, We are working on it.
          </p>
        </div>
        <div className='right_about'>
          <p className='para_right'>

            Introducing our innovative language translator app tailored specifically for bridging the linguistic gap between Malvi, the local dialect of Malwa, Madhya Pradesh, and Hindi. Seamlessly designed to facilitate communication and comprehension, our app utilizes advanced algorithms to accurately translate spoken and written content between these two languages. Whether navigating everyday conversations or delving into deeper discourse, users can rely on our app to effortlessly facilitate understanding, fostering greater connectivity and inclusivity within the diverse linguistic landscape of the region.

          </p>
          
        </div>

      </div>
    </div>
  )
}

export default About;