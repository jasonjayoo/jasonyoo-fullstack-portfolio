import React from "react";
import profilePic from "../../assets/mypicture.jpg";

export default function About() {
  return (
    <div id="about">
      <img id="jason" alt="picture of Jason Yoo" src={profilePic} />
      <h1><span id="nameSpan">Hi, I'm Jason!</span></h1>
      <p>
        My name is Jason Yoo and I am a Full-Stack Web Developer. I am well
        versed in HTML5, CSS3, Multiple CSS-Frameworks, JavaScript, JQuery,
        Node.js, Express.js, Handlebars.js, MySQL, Sequelize, MongoDB, Mongoose,
        and React.js. As a web developer, I emphasize a mobile-first web
        development perspective along with creating responsive web applications
        which enhance the users experience.
      </p>
      <p>
        I graduated from the California State University of Fullerton with a
        B.A. in History with a minor in Asian American Studies. I also completed
        the Full-Stack Web Development Program through the University of
        California, Irvine. My career history includes experience as a Personal
        Banker with Wells Fargo Bank N.A., I was also an accomplished English
        teacher with the Seoul Metropolitan Office of Education. I am at present
        a private consultant with a start up company located in Los Angeles,
        Curien LLC. I graduated with top marks from the coding program at UC
        Irvine.
      </p>
      <p>
        I am a motivated and dedicated software developer, with an eagerness to
        continuing expanding my learning and growth as a web developer.
        Leveraging my previous experiences in banking, teaching and consulting
        with my now honed web development skills, I am excited to be a part of a
        fast-paced, quality driven web development team.
      </p>
    </div>
  );
}
