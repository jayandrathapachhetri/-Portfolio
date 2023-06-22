import React from "react";
// import "./style.css";
import '@fortawesome/fontawesome-free/css/all.css';


function About() {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        about <span> me </span>
      </h1>
      <div className="row-1">
        <div className="image">
          {/* <img src="images/about-image.png" alt="" /> */}
          <img
            src="./images/about-image.png"
            alt=""
            style={{
              width: "80%",
              height: "80%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="content">
          <h3>My Name Is Jayandra Thapa &amp; I Am A Front-End Developer</h3>
          <p>
            I am Graphics designer, Front-end developer, UI/UX designer and Data
            analyst. I am studying Bsc-CSIT, besides this i am also working with
            few organization and also a freelancer.
          </p>
          <div className="box-container">
            <div className="box">
              <p>
                <span> Age : </span> 23
              </p>
              <p>
                <span> Gender : </span> Male
              </p>
              <p>
                <span> Language : </span> Nepali, Hindi, English
              </p>
              <p>
                <span> Work : </span> Front-end developer
              </p>
            </div>
            <div className="box">
              <p>
                <span> Freelance : </span> Available
              </p>
              <p>
                <span> Phone : </span> 9863467790
              </p>
              <p>
                <span> Email : </span> jayandrathapa5518@gmail.com
              </p>
              <p>
                <span> Country : </span> Nepal
              </p>
            </div>
          </div>
          <a href="cv" className="btn">
            Download CV
          </a>
          <a href="hire" className="btn">
            Hire Me
          </a>
        </div>
      </div>
      <h1 className="heading">
        <span> my </span> skills
      </h1>
      <div className="row-2">
        <div className="skills">
          <div className="progress">
            <h3>
              Web Design <span> 85% </span>
            </h3>
            <div className="bar">
              <span />
            </div>
          </div>
          <div className="progress">
            <h3>
              Web Development <span> 80% </span>
            </h3>
            <div className="bar">
              <span />
            </div>
          </div>
          <div className="progress">
            <h3>
              Graphic Design <span> 65% </span>
            </h3>
            <div className="bar">
              <span />
            </div>
          </div>
          <div className="progress">
            <h3>
              digital Marketing <span> 50% </span>
            </h3>
            <div className="bar">
              <span />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
