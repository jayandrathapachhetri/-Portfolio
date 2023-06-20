import React from "react";
import "./style.css";
// import Footer from "./Footer";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <span className="hi"> Hi there... </span>
        <h3>
          i am <span> jayandra thapa </span>
        </h3>
        <p className="info">I am a front-end developer</p>
        <p className="text">
          Welcome to my portfolio. I'm love to create beautiful things. With
          passion and enthusiasm, i'm always ready for new adventures and
          challenges.
        </p>
        <a href="#about" className="btn">
          About Me
        </a>
      </div>
      <div className="image">
        {/* <img src="./images/home-img1.png" alt="" /> */}
        <img
          src="./images/home-img1.png"
          alt=""
          style={{
            width: "80%",
            height: "80%",
            objectFit: "cover",
          }}
        />
      </div>
      {/* <Footer/> */}
    </section>
  );
};

export default Home;
