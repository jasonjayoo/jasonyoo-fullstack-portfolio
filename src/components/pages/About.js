import React from "react";
import profilePic from "../../assets/mypicture.jpg";

export default function About() {
  return (
    <div id="about">
      <img id="jason" alt="picture of Jason Yoo" src={profilePic} />
      <h1>
        <span id="nameSpan">Hi, I'm Jason!</span>
      </h1>
      <p>
      My name is Jason Yoo, a skilled Full-Stack Web Developer passionate about crafting high-quality, responsive web applications. 
      With proficiency in React.js, HTML5, CSS3, JavaScript, Node.js, MySQL, MongoDB, and more, I specialize in mobile-first, 
      scalable development with a strong emphasis on accessibility optimization. My goal is to deliver intuitive, user-centered 
      experiences that perform seamlessly across all devices.
      </p>
      <p>
      I hold a B.A. in History with a minor in Asian American Studies from California State University, Fullerton, 
      and completed the Full-Stack Web Development Program at the University of California, Irvine. My diverse 
      professional background includes roles as a Personal Banker at Wells Fargo Bank N.A. and as an English teacher 
      with the Seoul Metropolitan Office of Education. Currently, I work as a Front-End Web Developer at Revolve, 
      a leading fashion e-commerce company in Los Angeles, California.
      </p>
      <p>
      I am a motivated and adaptable web developer, eager to continuously grow my expertise in web development. 
      By integrating my background in banking, education, and consulting with my technical skills, 
      I excel at problem-solving and collaborating in dynamic, fast-paced environments. I am excited 
      to bring my unique perspective and dedication to a forward-thinking development team focused on innovation and quality.
      </p>
    </div>
  );
}
