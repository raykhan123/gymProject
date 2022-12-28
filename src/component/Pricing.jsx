import React from "react";
import "./Pricing.css";
import trainer1 from "../assets/trainer1.jpg";
import trainer2 from "../assets/trainer2.jpg";
import trainer3 from "../assets/trainer3.jpg";

const Pricing = () => {
  return (
    <section className="page">
        <br/>
        <br/>
        <h1 className="headings">Meet With Our Professional Trainers</h1>
        <br/>
        <br/>
        <br/>
      <div className="team">
        <img src={trainer1} alt="" />
        <img src={trainer2} alt="" />
        <img src={trainer3} alt="" />
      </div>

      <div>
        <h1 className="heading-2">CHOOSE YOUR BEST PRICING</h1>

        <div className="pricing__wrapper">
          <div className="pricing__item">
            <div className="pricing__card-top">
              <h2 className="section__title">
                $100 <span> / Month </span>
              </h2>
              <h2 className="pricing section__title">SILVER PLAN</h2>
            </div>

            <div className="services">
              <ul>
                <li>Open Gym</li>
                <li>Gymnastics</li>
                <li>CrossFit</li>
                <li>Yoga</li>
              </ul>
              <button className="register__btn">Start Free Trial</button>
            </div>
          </div>

          <div className="pricing__item">
            <div className="pricing__card-top">
              <h2 className="section__title">
                $200 <span> / Month </span>
              </h2>
              <h2 className="pricing section__title">GOLD PLAN</h2>
            </div>

            <div className="services">
              <ul>
                <li>Open Gym</li>
                <li>Gymnastics</li>
                <li>Swimming</li>
                <li>Kickboxing</li>
              </ul>
              <button className="register__btn">Start Free Trial</button>
            </div>
          </div>

          <div className="pricing__item">
            <div className="pricing__card-top">
              <h2 className="section__title">
                $250 <span> / Month </span>
              </h2>
              <h2 className="pricing section__title">DIAMOND PLAN</h2>
            </div>

            <div className="services">
              <ul>
                <li>Open Gym</li>
                <li>Gymnastics</li>
                <li>CrossFit</li>
                <li>Personal Trainer</li>
              </ul>
              <button className="register__btn">Start Free Trial</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;