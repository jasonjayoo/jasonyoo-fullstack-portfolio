// import React from "react";
// // import cloudCasino from "../../assets/thecloudcasino.png";
// // import soundify from "../../assets/soundify.png";
// import foodForThought from "../../assets/foodforthought.png";
// // import techBlog from "../../assets/techblog.png";
// // import weatherDashboard from "../../assets/theweatherdashboard.png";
// import codeQuiz from "../../assets/codequiz.png";
// import workDayPlanner from "../../assets/workdayplanner.png";
// import taskTracker from "../../assets/tasktracker.png";
// import susansAlterations from "../../assets/susansalterations.png";

// import revolve from "../../assets/revolve.png";
// import fwrd from "../../assets/fwrd.png";

// export default function Portfolio() {
//   return (
//     <div className="page">
//       <h1><span className="u-border-b--lg">My Portfolio</span></h1>
//       <div className="card-container d-flex flex-row flex-wrap">

//         {/* Food For Thought*/}
//         <a
//           href="https://jasonjayoo.github.io/Food-For-Thought/"
//           alt="Food For Thought Web Application"
//           Title="This is a link to "
//           target="_blank"
//           rel="noreferrer"
//         >
//           <div className="card">
//             <img
//               className="card-img-top"
//               src={foodForThought}
//               alt="Food For Thought"
//             />
//             <div className="card-body">
//               <h5 className="card-title">Food For Thought</h5>
//               <p className="card-text">
//                 This application was created for foodies with busy schedules,
//                 that are searching for easy to find recipes for ingredients they
//                 have in their homes.
//               </p>
//               <ul>
//                 <li>
//                   Retrieves recipes for searched ingredients from the MealsDB
//                   API
//                 </li>
//                 <li>
//                   Recipes come with instructions, images and link to video
//                 </li>
//                 <li>Role: JavaScript/Front End Developer</li>
//               </ul>
//               <a
//                 href="https://jasonjayoo.github.io/Food-For-Thought/"
//                 className="card-link"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Click to view live site!
//               </a>
//               <br />
//               <a
//                 href="https://github.com/jasonjayoo/Food-For-Thought"
//                 className="card-link u-font--md"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Click to view the GitHub repository!
//               </a>
//             </div>
//           </div>
//         </a>

//                 {/* Susan's Alterations */}
//                 <a
//           href="https://bit.ly/susansalterations"
//           alt="Susans Alterations"
//           Title="This is a link to"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <div className="card">
//             <img
//               className="card-img-top"
//               src={susansAlterations}
//               alt="Susans Alterations"
//             />
//             <div className="card-body">
//               <h5 className="card-title">Susans Alterations</h5>

//               <p className="card-text">
//                 Susan's Alterations is a local mom and pop business 
//                 located on commonwealth ave in Fullerton, California
//               </p>
//               <p className="card-text">
//                 Established since 2015
//               </p>
//               <ul>
//                 <li>Built with React.js</li>
//                 <li>Role: Web Developer</li>
//                 <li>Please call to set up an appointment!</li>
//               </ul>
//               <a
//                 href="https://bit.ly/susansalterations"
//                 className="card-link"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Click to view live site!
//               </a>
//               <br />
//               <a
//                 href="https://github.com/jasonjayoo/susans-alterations-site"
//                 className="card-link u-font--md"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Click to view the GitHub repository!
//               </a>
//             </div>
//           </div>
//         </a>


//         {/* Task Tracker */}
//         <a
//           href="https://jasonjayoo.github.io/react-miniproject/"
//           alt="React Task Tracker Application"
//           Title="This is a link to my react task tracker"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <div className="card">
//             <img className="card-img-top" src={taskTracker} alt="Task Tracker" />
//             <div className="card-body">
//               <h5 className="card-title">Task Tracker</h5>
//               <p className="card-text">
//                 A react built application to track your daily tasks. Track your daily tasks - 
//                 select the set reminder to activate the reminder.
//               </p>
//               <ul>
//                 <li>React date-picker and dayjs implemented</li>
//                 <li>A Website created with React | Date Picker | Dayjs</li>
//                 <li>Role: Lead Web Developer</li>
//               </ul>
//               <a
//                 href="https://jasonjayoo.github.io/react-miniproject/"
//                 className="card-link"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Click to view live site!
//               </a>
//               <br />
//               <a
//                 href="https://github.com/jasonjayoo/react-miniproject"
//                 className="card-link u-font--md"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Click to view the GitHub repository!
//               </a>
//             </div>
//           </div>
//         </a>

//     {/*Revolve*/}
//         <a
//           href="https://www.revolve.com/"
//           alt="Revolve"
//           Title="This is a link to "
//           target="_blank"
//           rel="noreferrer"
//         >
//           <div className="card">
//             <img
//               className="card-img-top"
//               src={revolve}
//               alt="Revolve"
//             />
//             <div className="card-body">
//               <h5 className="card-title">Revolve.com</h5>
//               <p className="card-text">
//                 Fashion E-commerce company based in Cerritos, California. 
//                 A publically traded company valued at over one billion dollars
//               </p>
//               <ul>
//                 <li>
//                   Created Cordial Email Marketing templates for digital marketing campaigns
//                 </li>
//                 <li>Very recently played key role in updating customer loyalty & shopping bag pages</li>
//                 <li>Member of the UX/UI Department</li>
//                 <li>Front-End Web Developer</li>
//               </ul>
//               <a
//                 href="https://www.revolve.com/"
//                 className="card-link"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Click to view live site!
//               </a>
//               <br />
//             </div>
//           </div>
//         </a>

//               {/*FWRD*/}
//         <a
//           href="https://www.fwrd.com/"
//           alt="forward"
//           Title="This is a link to "
//           target="_blank"
//           rel="noreferrer"
//         >
//           <div className="card">
//             <img
//               className="card-img-top"
//               src={fwrd}
//               alt="Forward"
//             />
//             <div className="card-body">
//               <h5 className="card-title">FWRD</h5>
//               <p className="card-text">
//                 Luxury Brand - High End Fashion E-Commerce Site.
//               </p>
//               <ul>
//                 <li>
//                   Created the landing page and logic for the FAQs page and customer loyalty pages
//                 </li>
//                 <li>Member of the UI/UX Department</li>
//                 <li>Front End Web Developer</li>
//               </ul>
//               <a
//                 href="https://www.fwrd.com/"
//                 className="card-link"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Click to view live site!
//               </a>
//               <br />
//             </div>
//           </div>
//         </a>

//       {/*The Weather Dashboard*/}
//         {/* <a
//           href="https://jasonjayoo.github.io/The-Weather-Dash/"
//           alt="Weather Dashboard"
//           Title="This is a link to "
//           target="_blank"
//           rel="noreferrer"
//         >
//           <div className="card">
//             <img
//               className="card-img-top"
//               src={weatherDashboard}
//               alt="The Weather Dashboard"
//             />
//             <div className="card-body">
//               <h5 className="card-title">The Weather Dashboard</h5>
//               <p className="card-text">
//                 The weather dashboard allows you to get current weather
//                 information for over 290,000 cities around the globe.
//               </p>
//               <ul>
//                 <li>
//                   The OpenWeatherMap API is utilized to obtain weather data
//                 </li>
//                 <li>Enter the name of the city you wish to search</li>
//                 <li>Role: Sole developer</li>
//               </ul>
//               <a
//                 href="https://jasonjayoo.github.io/The-Weather-Dash/"
//                 className="card-link"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Click to view live site!
//               </a>
//               <br />
//               <a
//                 href="https://github.com/jasonjayoo/The-Weather-Dash"
//                 className="card-link u-font--md"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Click to view the GitHub repository!
//               </a>
//             </div>
//           </div>
//         </a> */}


//         {/*The Tech Blog*/}
//         {/* <a
//           href="https://quiet-journey-86661.herokuapp.com/"
//           alt="The Tech Blog"
//           Title="This is a link to "
//           target="_blank"
//           rel="noreferrer"
//         >
//           <div className="card">
//             <img className="card-img-top" src={techBlog} alt="The Tech Blog" />
//             <div className="card-body">
//               <h5 className="card-title">Tech Blog</h5>
//               <p className="card-text">
//                 The Tech Blog is a CMS-style blog site similar to a Wordpress
//                 web application. Developers can publish blog posts and comment
//                 on other developers' posts.
//               </p>
//               <ul>
//                 <li>MySQL database with sequelize queries</li>
//                 <li>User authentication with bcrypt</li>
//                 <li>Role: Sole developer</li>
//               </ul>
//               <a
//                 href="https://quiet-journey-86661.herokuapp.com/"
//                 className="card-link"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Click to view live site!
//               </a>
//               <br />
//               <a
//                 href="https://github.com/jasonjayoo/The-Tech-Blog"
//                 className="card-link u-font--md"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Click to view the GitHub repository!
//               </a>
//             </div>
//           </div>
//         </a> */}

//         {/*The Coding Quiz*/}
//         <a
//           href="https://jasonjayoo.github.io/my-coding-quiz/"
//           alt="The Coding Quiz"
//           Title="This is a link to "
//           target="_blank"
//           rel="noreferrer"
//         >
//           <div className="card">
//             <img
//               className="card-img-top"
//               src={codeQuiz}
//               alt="The Coding Quiz"
//             />
//             <div className="card-body">
//               <h5 className="card-title">The Coding Quiz</h5>
//               <p className="card-text">
//                 The coding quiz tests your coding knowledge with five questions
//                 that you answer by clicking an answer button, but watch out you
//                 only get 60 seconds and for every wrong answer you'll lose 8
//                 seconds from the clock.{" "}
//               </p>
//               <ul>
//                 <li>A quiz to test your coding knowledge</li>
//                 <li>Built with, HTML5, CSS3, JavaScript</li>
//                 <li>Role: Sole developer</li>
//               </ul>
//               <a
//                 href="https://jasonjayoo.github.io/my-coding-quiz/"
//                 className="card-link"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Click to view live site!
//               </a>
//               <br />
//               <a
//                 href="https://github.com/jasonjayoo/my-coding-quiz"
//                 className="card-link u-font--md"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Click to view the GitHub repository!
//               </a>
//             </div>
//           </div>
//         </a>

//         {/* Work Day Planner */}
//         <a
//           href="https://jasonjayoo.github.io/The-Work-Day-Planner/"
//           alt="Work Day Planner"
//           Title="This is a link to "
//           target="_blank"
//           rel="noreferrer"
//         >
//           <div className="card">
//             <img
//               className="card-img-top"
//               src={workDayPlanner}
//               alt="The Work Day Planner"
//             />
//             <div className="card-body">
//               <h5 className="card-title">The Work Day Planner</h5>
//               <p className="card-text">
//                 The Work Day Scheduler allows you to plan out your work day
//                 between 9am - 5pm. The events are color-coded depending on the
//                 time of day and if the event has passed, is still taking place
//                 or in the future.
//               </p>
//               <ul>
//                 <li>Utilizes moment.js</li>
//                 <li>Built with jQuery and bootstrap</li>
//                 <li>Role: Sole developer</li>
//               </ul>
//               <a
//                 href="https://jasonjayoo.github.io/The-Work-Day-Planner/"
//                 className="card-link"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Click to view live site!
//               </a>
//               <br />
//               <a
//                 href="https://github.com/jasonjayoo/The-Work-Day-Planner"
//                 className="card-link u-font--md"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Click to view the GitHub repository!
//               </a>
//             </div>
//           </div>
//         </a>
//       </div>
//     </div>
//   );
// }

import React from "react";
import foodForThought from "../../assets/foodforthought.png";
import codeQuiz from "../../assets/codequiz.png";
import workDayPlanner from "../../assets/workdayplanner.png";
import taskTracker from "../../assets/tasktracker.png";
import susansAlterations from "../../assets/susansalterations.png";
import revolve from "../../assets/revolve.png";
import fwrd from "../../assets/fwrd.png";
import superdown from "../../assets/superdown.png";
import lf from "../../assets/lf.png";
import blockwood from "../../assets/blockwood.png";
import wordpress from "../../assets/wordpress.png"

const personalProjects = [
  {
    name: "Susan's Alterations",
    img: susansAlterations,
    description: "Susan's Alterations is a local mom-and-pop business...",
    link: "https://bit.ly/susansalterations",
    repo: "https://github.com/jasonjayoo/susans-alterations-site",
    tech: ["React.js"],
  },
  {
    name: "Blockwood",
    img: blockwood,
    description: "Video Play Entertain Demo Site",
    link: "https://jasonjayoo.github.io/blockwood/",
    repo: "https://github.com/jasonjayoo/blockwood",
    tech: ["React.js", "Tailwind CSS", "TypeScript"],
  },
  {
    name: "Wordpress Portfolio",
    img: wordpress,
    description: "The Work Day Scheduler allows you to plan your work day...",
    link: "https://bit.ly/jasonyoowordpress",
    tech: ["Wordpress", "Custom HTML"],
  },
  {
    name: "Food For Thought",
    img: foodForThought,
    description: "This application was created for foodies with busy schedules...",
    link: "https://jasonjayoo.github.io/Food-For-Thought/",
    repo: "https://github.com/jasonjayoo/Food-For-Thought",
    tech: ["JavaScript", "MealsDB API"],
  },
  {
    name: "Task Tracker",
    img: taskTracker,
    description: "A react built application to track your daily tasks...",
    link: "https://jasonjayoo.github.io/react-miniproject/",
    repo: "https://github.com/jasonjayoo/react-miniproject",
    tech: ["React", "Date Picker", "Dayjs"],
  },
  {
    name: "The Coding Quiz",
    img: codeQuiz,
    description: "The coding quiz tests your coding knowledge with five questions...",
    link: "https://jasonjayoo.github.io/my-coding-quiz/",
    repo: "https://github.com/jasonjayoo/my-coding-quiz",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Work Day Planner",
    img: workDayPlanner,
    description: "The Work Day Scheduler allows you to plan your work day...",
    link: "https://jasonjayoo.github.io/The-Work-Day-Planner/",
    repo: "https://github.com/jasonjayoo/The-Work-Day-Planner",
    tech: ["jQuery", "Bootstrap", "Moment.js"],
  },
];

const professionalProjects = [
  {
    name: "Revolve",
    img: revolve,
    description: "Fashion E-commerce company based in Cerritos, California...",
    link: "https://www.revolve.com/",
    tech: ["Cordial Email Templates", "Front-End Web Development", "UX/UI"],
  },
  {
    name: "FWRD",
    img: fwrd,
    description: "Luxury Brand - High End Fashion E-Commerce Site.",
    link: "https://www.fwrd.com/",
    tech: ["Landing Page", "FAQs Logic", "Customer Loyalty Pages", "UX/UI"],
  },
  {
    name: "Superdown",
    img: superdown,
    description: "Contemporary label with on-demand, on-trend apparel",
    link: "https://www.superdown.com/",
    tech: ["Landing Pages", "Global Header", "Product pages", "UX/UI"],
  },
  {
    name: "Lovers & Friends",
    img: lf,
    description: "E-commerce site specializing in stylish and fashionable clothing",
    link: "https://www.loversandfriends.us/",
    tech: [ "Front-End Web Development", "UX/UI", "Email Marketing", "Landing Pages" ],
  },
];

const ProjectCard = ({ project }) => (
  <a
    href={project.link}
    alt={project.name}
    title={`This is a link to ${project.name}`}
    target="_blank"
    rel="noreferrer"
  >
    <div className="card">
      <img className="card-img-top" src={project.img} alt={project.name} />
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <p className="card-text">{project.description}</p>
        <ul>
          {project.tech.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <a
          href={project.link}
          className="card-link"
          target="_blank"
          rel="noreferrer"
        >
          Click to view live site!
        </a>
        <br />
        {project.repo && (
          <a
            href={project.repo}
            className="card-link u-font--md"
            target="_blank"
            rel="noreferrer"
          >
            Click to view the GitHub repository!
          </a>
        )}
      </div>
    </div>
  </a>
);

export default function Portfolio() {
  return (
    <div className="page">
      <h1 className="u-padding-b--sm">
        <span className="u-border-b--lg u-font--xxl">Portfolio</span>
      </h1>

      {/* Professional Projects Section */}
      <section className="u-padding-t--xl u-padding-b--sm">
        <h2 className="u-text-align--center u-padding-b--none">Professional Projects</h2>
        <div className="card-container d-flex flex-row flex-wrap">
          {professionalProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Personal Projects Section */}
      <section>
        <h2 className="u-text-align--center u-padding-b--none">Personal Projects</h2>
        <div className="card-container d-flex flex-row flex-wrap">
          {personalProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
