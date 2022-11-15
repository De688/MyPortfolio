import React from "react";
import "./Home.css";
import Heroimage from "../../../src/Heroimage2.svg";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="homemaincontainer" id="/">
        <div className="wrapper">
          <div className="herocontainer">
            <div className="herobigtext">
              <div className="herobigtext1">
                Natengeneza custom Websites za kisasa kwa ajili ya biashara.
              </div>
              <div className="herobigtext2">
                I am a full stack web developer, we can work together to bulid a
                website that can help grow your bussines{" "}
              </div>
            </div>
            <div className="herobtn">
              <button type="button" className="herobtn1">
                Hire Me
              </button>
              <NavLink to="/readmore">
                <button type="button" className="herobtn2">
                  Read More
                </button>
              </NavLink>
            </div>
          </div>
          <div className="heroimage">
            <img src={Heroimage} alt="programing image" className="herosvg" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
