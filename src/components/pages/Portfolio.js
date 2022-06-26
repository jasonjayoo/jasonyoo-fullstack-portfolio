import React from "react";
import cloudCasino from "../../assets/thecloudcasino.png";
import soundify from "../../assets/soundify.png";
import foodForThought from "../../assets/foodforthought.png";
import techBlog from "../../assets/techblog.png";
import weatherDashboard from "../../assets/theweatherdashboard.png";
import codeQuiz from "../../assets/codequiz.png";
import workDayPlanner from "../../assets/workdayplanner.png";

export default function Portfolio() {
  return (
    <div className="page">
      <h1>My Portfolio</h1>
      <div className="card-container d-flex flex-row flex-wrap">
        {/* Soundify */}
        <a
          href="https://soundify-home.herokuapp.com/"
          alt="Soundify Full Stack Web Application"
          Title="This is a link to "
          target="_blank"
        >
          <div className="card">
            <img className="card-img-top" src={soundify} alt="Soundify" />
            <div className="card-body">
              <h5 className="card-title">Soundify</h5>
              <p className="card-text">
                A music application that allows users to freely upload songs to
                custom playlists. Users may also access songs on the database
                and add them to their playlists.
              </p>
              <ul>
                <li>MongoDB and AWS database implemented</li>
                <li>Front End created with React</li>
                <li>Role: Full Stack Developer</li>
              </ul>
              <a
                href="https://soundify-home.herokuapp.com/"
                className="card-link"
                target="_blank"
                rel="noreferrer"
              >
                Click to view deployed site!
              </a>
              <br />
              <a
                href="https://github.com/jasonjayoo/Soundify"
                className="card-link"
                target="_blank"
                rel="noreferrer"
              >
                Click to view the GitHub repository!
              </a>
            </div>
          </div>
        </a>

        {/* The Cloud Casino */}
        <a
          href="https://glacial-reef-71102.herokuapp.com/"
          alt="The Cloud Casino Full Stack Web Application"
          Title="This is a link to "
          target="_blank"
        >
          <div className="card">
            <img
              className="card-img-top"
              src={cloudCasino}
              alt="The Cloud Casino"
            />
            <div className="card-body">
              <h5 className="card-title">The Cloud Casino</h5>
              <p className="card-text">
                This application was created for users that are looking to
                experience the fun of gambling without the actual risk of
                monetary loss.
              </p>
              <ul>
                <li>MySQL database with Sequelize queries</li>
                <li>Sever side rendering using Handlebars</li>
                <li>Role: Full Stack Developer</li>
              </ul>
              <a
                href="https://glacial-reef-71102.herokuapp.com/"
                className="card-link"
                target="_blank"
                rel="noreferrer"
              >
                Click to view deployed site!
              </a>
              <br />
              <a
                href="https://github.com/jasonjayoo/The-Cloud-Casino"
                className="card-link"
                target="_blank"
                rel="noreferrer"
              >
                Click to view the GitHub repository!
              </a>
            </div>
          </div>
        </a>

        {/* Food For Thought*/}
        <a
          href="https://jasonjayoo.github.io/Food-For-Thought/"
          alt="Food For Thought Web Application"
          Title="This is a link to "
          target="_blank"
        >
          <div className="card">
            <img
              className="card-img-top"
              src={foodForThought}
              alt="Food For Thought"
            />
            <div className="card-body">
              <h5 className="card-title">Food For Thought</h5>
              <p className="card-text">
                This application was created for foodies with busy schedules,
                that are searching for easy to find recipes for ingredients they
                have in their homes.
              </p>
              <ul>
                <li>
                  Retrieves recipes for searched ingredients from the MealsDB
                  API
                </li>
                <li>
                  Recipes come with instructions, images and link to video
                </li>
                <li>Role: JavaScript/Front End Developer</li>
              </ul>
              <a
                href="https://jasonjayoo.github.io/Food-For-Thought/"
                className="card-link"
                target="_blank"
                rel="noreferrer"
              >
                Click to view deployed site!
              </a>
              <br />
              <a
                href="https://github.com/jasonjayoo/Food-For-Thought"
                className="card-link"
                target="_blank"
                rel="noreferrer"
              >
                Click to view the GitHub repository!
              </a>
            </div>
          </div>
        </a>

        {/*The Tech Blog*/}
        <a
          href="https://quiet-journey-86661.herokuapp.com/"
          alt="The Tech Blog"
          Title="This is a link to "
          target="_blank"
        >
          <div className="card">
            <img className="card-img-top" src={techBlog} alt="The Tech Blog" />
            <div className="card-body">
              <h5 className="card-title">Tech Blog</h5>
              <p className="card-text">
                The Tech Blog is a CMS-style blog site similar to a Wordpress
                web application. Developers can publish blog posts and comment
                on other developers' posts.
              </p>
              <ul>
                <li>MySQL database with sequelize queries</li>
                <li>User authentication with bcrypt</li>
                <li>Role: Sole developer</li>
              </ul>
              <a
                href="https://quiet-journey-86661.herokuapp.com/"
                className="card-link"
                target="_blank"
                rel="noreferrer"
              >
                Click to view deployed site!
              </a>
              <br />
              <a
                href="https://github.com/jasonjayoo/The-Tech-Blog"
                className="card-link"
                target="_blank"
                rel="noreferrer"
              >
                Click to view the GitHub repository!
              </a>
            </div>
          </div>
        </a>

        {/*The Weather Dashboard*/}
        <a
          href="https://jasonjayoo.github.io/The-Weather-Dash/"
          alt="Weather Dashboard"
          Title="This is a link to "
          target="_blank"
        >
          <div className="card">
            <img
              className="card-img-top"
              src={weatherDashboard}
              alt="The Weather Dashboard"
            />
            <div className="card-body">
              <h5 className="card-title">The Weather Dashboard</h5>
              <p className="card-text">
                The weather dashboard allows you to get current weather
                information for over 290,000 cities around the globe.
              </p>
              <ul>
                <li>
                  The OpenWeatherMap API is utilized to obtain weather data
                </li>
                <li>Enter the name of the city you wish to search</li>
                <li>Role: Sole developer</li>
              </ul>
              <a
                href="https://jasonjayoo.github.io/The-Weather-Dash/"
                className="card-link"
                target="_blank"
                rel="noreferrer"
              >
                Click to view deployed site!
              </a>
              <br />
              <a
                href="https://github.com/jasonjayoo/The-Weather-Dash"
                className="card-link"
                target="_blank"
                rel="noreferrer"
              >
                Click to view the GitHub repository!
              </a>
            </div>
          </div>
        </a>

        {/*The Coding Quiz*/}
        <a
          href="https://jasonjayoo.github.io/my-coding-quiz/"
          alt="The Coding Quiz"
          Title="This is a link to "
          target="_blank"
        >
          <div className="card">
            <img
              className="card-img-top"
              src={codeQuiz}
              alt="The Coding Quiz"
            />
            <div className="card-body">
              <h5 className="card-title">The Coding Quiz</h5>
              <p className="card-text">
                The coding quiz tests your coding knowledge with five questions
                that you answer by clicking an answer button, but watch out you
                only get 60 seconds and for every wrong answer you'll lose 8
                seconds from the clock.{" "}
              </p>
              <ul>
                <li>A quiz to test your coding knowledge</li>
                <li>Built with, HTML5, CSS3, JavaScript</li>
                <li>Role: Sole developer</li>
              </ul>
              <a
                href="https://jasonjayoo.github.io/my-coding-quiz/"
                className="card-link"
                target="_blank"
                rel="noreferrer"
              >
                Click to view deployed site!
              </a>
              <br />
              <a
                href="https://github.com/jasonjayoo/my-coding-quiz"
                className="card-link"
                target="_blank"
                rel="noreferrer"
              >
                Click to view the GitHub repository!
              </a>
            </div>
          </div>
        </a>

        {/* Work Day Planner */}
        <a
          href="https://jasonjayoo.github.io/The-Work-Day-Planner/"
          alt="Work Day Planner"
          Title="This is a link to "
          target="_blank"
        >
          <div className="card">
            <img
              className="card-img-top"
              src={workDayPlanner}
              alt="The Work Day Planner"
            />
            <div className="card-body">
              <h5 className="card-title">The Work Day Planner</h5>
              <p className="card-text">
                The Work Day Scheduler allows you to plan out your work day
                between 9am - 5pm. The events are color-coded depending on the
                time of day and if the event has passed, is still taking place
                or in the future.
              </p>
              <ul>
                <li>Utilizes moment.js</li>
                <li>Built with jQuery and bootstrap</li>
                <li>Role: Sole developer</li>
              </ul>
              <a
                href="https://jasonjayoo.github.io/The-Work-Day-Planner/"
                className="card-link"
                target="_blank"
                rel="noreferrer"
              >
                Click to view deployed site!
              </a>
              <br />
              <a
                href="https://github.com/jasonjayoo/The-Work-Day-Planner"
                className="card-link"
                target="_blank"
                rel="noreferrer"
              >
                Click to view the GitHub repository!
              </a>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
