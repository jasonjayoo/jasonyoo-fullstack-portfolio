import React from "react";
// import { useNavigate } from "react-router-dom";
import profilePic from "../../assets/mypicturenyc.jpg";

// const navigate = useNavigate(); // Initialize the useNavigate hook

// const handleBannerClick = () => {
//   navigate("/about"); // Navigate to the About page when the h1 is clicked
// };

export default function About() {
  return (
    <div id="about">
      <img id="jason" alt="Picture of Jason Yoo" src={profilePic} />
      <h1 className="u-border-b u-padding-b--xxl">
        <span className="main-title">Hi, I'm Jason</span>
        <br/>
        <span className="main-title">Professional Web Developer</span>
      </h1>

      <section className="u-padding-b--lg u-padding-t--lg u-text-align--center">
        <h2 className="u-padding-b--sm u-padding-t--lg u-font--xl">About Me</h2>
        <p className="u-padding-t--none">
          I am a Front-End Web Developer with over 5 years of experience in creating high-quality, responsive, and user-focused web applications. 
          My expertise lies in mobile-first, scalable development using technologies like React.js, Tailwind CSS, JavaScript, Figma, Abode XD, Node.js, jQuery, MySQL, and MongoDB. 
          I am passionate about delivering seamless and intuitive user experiences, with a strong focus on performance optimization (CLS, FCP, LCP) and SEO best practices.
        </p>
      </section>
      
      <section className="u-padding-b--lg u-padding-t--lg u-text-align--center">
        <h2 className="u-padding-b--sm u-padding-t--lg u-font--xl">Professional Experience</h2>
        <p className="u-padding-t--none">
          Currently, I am a Front-End Web Developer at Revolve, a leading fashion e-commerce company, where I design and develop scalable, 
          impactful web solutions. My work includes creating email marketing templates, landing pages, and collaborating with cross-functional 
          teams to drive revenue and enhance digital content. My diverse career background also includes roles in banking, education, and consulting, 
          which have shaped my unique problem-solving approach.
        </p>
      </section>
      
      <section className="u-padding-b--lg u-padding-t--lg u-text-align--center">
        <h2 className="u-padding-b--sm u-padding-t--lg u-font--xl">Education & Skills</h2>
        <p className="u-padding-t--none">
          I hold a B.A. in History with a minor in Asian American Studies from California State University, Fullerton, and completed the 
          Full-Stack Web Development Program at the University of California, Irvine. My technical skill set includes React.js, Tailwind CSS, 
          JavaScript, Node.js, MySQL, MongoDB, performance optimization, and SEO best practices. I am committed to continuous growth and 
          staying at the forefront of web development innovations.
        </p>
      </section>
      
      <section className="u-padding-b--lg u-padding-t--lg u-text-align--center">
        <h2 className="u-padding-b--sm u-padding-t--lg u-font--xl">Career Goals</h2>
        <p className="u-padding-t--none">
          I am motivated to contribute to forward-thinking, innovative teams that value collaboration, quality, and cutting-edge technology. 
          With a commitment to professional excellence, I aim to deliver impactful web solutions that align with business goals and provide exceptional user experiences.
        </p>
      </section>
    </div>


  );
}
