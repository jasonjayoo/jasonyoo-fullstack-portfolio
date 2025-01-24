import React from "react";
import html5 from "../../assets/html5.png";
import css3 from "../../assets/css3.png";
import bootstrap from "../../assets/bootstrap-logo.png";
import bulma from "../../assets/bulma.png";
import javascript from "../../assets/javascript.png";
import jquery from "../../assets/jquery.png";
import mongodb from "../../assets/mongodb.png";
import mongoose from "../../assets/mongoose.png";
import mysql from "../../assets/mysql.png";
import node from "../../assets/node.png";
import reactLogo from "../../assets/react.png";
import sequelize from "../../assets/sequelize.png";
import express from "../../assets/express.png";
import resume from "../../assets/resume.pdf";

export default function Resume() {
  return (
    <div className="mainContainer">
      <div className="resumeBtn">
        <a
          className="resume"
          href={resume}
          download="Jason Yoo's Resume"
          target="blank"
        >
          <span>Download Resume</span>
        </a>
      </div>
      <div className="container skills-container">
        <h2 className="skills">Front-End Skill Sets</h2>
        <div
          id="carouselExampleControls"
          className="carousel slide mx-auto"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100 logo" src={html5} alt="HTML5" />
              <div className="carousel-caption">
                <h5>HTML5</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 logo" src={css3} alt="CSS3" />
              <div className="carousel-caption">
                <h5>CSS3</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 logo"
                src={javascript}
                alt="JavaScript"
              />
              <div className="carousel-caption">
                <h5>JavaScript</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 logo" src={jquery} alt="JQuery" />
              <div className="carousel-caption">
                <h5>jQuery</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 logo" src={bulma} alt="Bulma" />
              <div className="carousel-caption">
                <h5>Bulma</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 logo"
                src={bootstrap}
                alt="Bootstrap"
              />
              <div className="carousel-caption">
                <h5>Bootstrap</h5>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-dark"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-dark"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div className="container skills-container">
        <h2 className="skills">Back-End Skill Sets</h2>
        <div
          id="carouselExampleControls2"
          className="carousel slide mx-auto"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100 logo" src={mongodb} alt="MongoDB" />
              <div className="carousel-caption">
                <h5>MongoDB</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 logo" src={mysql} alt="mySQL" />
              <div className="carousel-caption">
                <h5>mySQL</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 logo"
                src={sequelize}
                alt="Sequelize"
              />
              <div className="carousel-caption">
                <h5>Sequelize</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 logo" src={node} alt="node.js" />
              <div className="carousel-caption">
                <h5>node.js</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 logo" src={express} alt="Express" />
              <div className="carousel-caption">
                <h5>Express</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 logo"
                src={reactLogo}
                alt="React.js"
              />
              <div className="carousel-caption">
                <h5>React</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 logo"
                src={mongoose}
                alt="Mongoose"
              />
              <div className="carousel-caption">
                <h5>Mongoose</h5>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls2"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-dark"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls2"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-dark"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}
