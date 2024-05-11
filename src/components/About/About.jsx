import React from "react";
import "./About.css";
import Image from "../../assets/avatar2.png";
import Resume from "../../assets/resume.pdf";
import AboutBox from "./AboutBox";

const About = () => {
  const downloadResume = async () => {
    window.open(Resume, "_blank");
  };

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me </h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hi there! I'm Gyanavardhan, a tech enthusiast currently studying
              Computer Science with a focus on IoT. My passion for building
              intelligent systems started with an AI programming course and has
              grown through internships and projects.
              <br />
              <br />
              I've honed my skills in web development (MERN stack) and machine
              learning by creating impactful projects like a collaborative
              platform , efficient job search application and image classifers
              with efficient devops practices. I'm eager to learn more and
              contribute my skills to a team that values innovation and
              collaboration.
              <br />
              <br />
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="about__list">
              <li>Python</li>
              <li>JavaScript</li>
              <li>SQL</li>
              <li>React.js</li>
              <li>Azure</li>
              <li>Express.js</li>
              <li>Docker</li>
              <li>MongoDB</li>
              <li>Kubernetes</li>
              <li>Node.js</li>
              <li>Jenkins</li>
              <li>Jest</li>
            </ul>
            <button className="btn" onClick={downloadResume}>
              Donwload CV
            </button>
          </div>

          {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
