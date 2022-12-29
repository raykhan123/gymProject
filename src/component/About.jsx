import React from "react";
import './About.css'
import Image1 from '../assets/gym.jpeg'




const About = () => {


    return (

    <div className="about-container">
    
       <div className="heading"><h1>About Us</h1></div>
       <div>
      <p className="details">The Gym Fitness Institute offers Fitness Training Courses. It offers
      certificate courses in Fitness Management, Personal Training
      Certification and Spinning Instructing and various short courses. It
      covers a range of subjects to comprehensively address and ensure the
      best international brand practices. The 3 month courses are
      monitored by qualified personnel of the Gym, fitness coach and also
      hosts guest lectures by the biggest names in the international
      fitness industry with guaranteed internships and a first-hand
      opportunity to experience fitness training from the world leaders in
      it. GGFI offers the most exciting and up-to-date education pathway
      to gain industry leading qualifications as a personal trainer as
      well as ongoing training in all aspects of the fitness industry.</p>
      
    
    <p><img className="image" src={Image1} alt="logoImg"/></p>
      </div>

    </div>
   
  );
};
      

export default About;