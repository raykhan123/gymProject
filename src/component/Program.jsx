import React from "react";
import "./Program.css";

import crossfit from "../assets/crossfit.jpg";
import gymnastics from "../assets/gymnastics.jpg";
import swimming from "../assets/swimming.jpg";

const Program = () => {
  return (
    <>
      
      <div class="fitness-services">
        <div class="fitness-heading">
          <h1>
            welcome to fitness
          </h1>
          <p>
            Our staff includes amazing professionals that have an eye for
            crossfit.
          </p>
        </div>

        <div class="fitness-main-service">
          <div class="fitness-inner-content">
            <div class="fitness-images">
              <img src={crossfit} alt="" />
            </div>
            <div class="fitness-inner-headings">
              <h1>Cross Fit</h1>
              <p>
                Our staff includes amazing professionals that have an eye for
                crossfit.
              </p>
              <button class="fitness-btn">get in touch</button>
            </div>
          </div>

          <div class="fitness-inner-content">
            <div class="fitness-images">
              <img src={gymnastics} alt="" />
            </div>
            <div class="fitness-inner-headings">
              <h1>Gymnastics</h1>
              <p>
                Our staff includes amazing professionals that have an eye for
                gymnastics.
              </p>
              <button class="fitness-btn">get in touch</button>
            </div>
          </div>

          <div class="fitness-inner-content">
            <div class="fitness-images">
              <img src={swimming} alt="" />
            </div>
            <div class="fitness-inner-headings">
              <h1>Swimming</h1>
              <p>
                Our staff includes amazing professionals that have an eye for
                swimming.
              </p>
              <button class="fitness-btn">get in touch</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Program;