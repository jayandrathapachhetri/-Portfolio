import React from "react";
import "./style.css";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h1 className="heading">
        <span> my </span> portfolio
      </h1>
      <div className="box-container">
        <div className="box">
          <img src="images/img-1.jpg" alt="" />
          <h3>project 01</h3>
          <div className="icons">
            <a href="#" className="fas fa-link" />
            <a href="#" className="fas fa-share" />
            <a href="#" className="fas fa-search" />
          </div>
        </div>
        <div className="box">
          <img src="images/img-2.jpg" alt="" />
          <h3>project 02</h3>
          <div className="icons">
            <a href="#" className="fas fa-link" />
            <a href="#" className="fas fa-share" />
            <a href="#" className="fas fa-search" />
          </div>
        </div>
        <div className="box">
          <img src="images/img-3.jpg" alt="" />
          <h3>project 03</h3>
          <div className="icons">
            <a href="#" className="fas fa-link" />
            <a href="#" className="fas fa-share" />
            <a href="#" className="fas fa-search" />
          </div>
        </div>
        <div className="box">
          <img src="images/img-4.jpg" alt="" />
          <h3>project 04</h3>
          <div className="icons">
            <a href="#" className="fas fa-link" />
            <a href="#" className="fas fa-share" />
            <a href="#" className="fas fa-search" />
          </div>
        </div>
        <div className="box">
          <img src="images/img-5.jpg" alt="" />
          <h3>project 05</h3>
          <div className="icons">
            <a href="#" className="fas fa-link" />
            <a href="#" className="fas fa-share" />
            <a href="#" className="fas fa-search" />
          </div>
        </div>
        <div className="box">
          <img src="images/img-6.jpg" alt="" />
          <h3>project 06</h3>
          <div className="icons">
            <a href="#" className="fas fa-link" />
            <a href="#" className="fas fa-share" />
            <a href="#" className="fas fa-search" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
