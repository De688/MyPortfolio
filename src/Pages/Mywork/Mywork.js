import React from "react";
import { NavLink } from "react-router-dom";
import movieapp from "../../../src/movieapp.PNG";
import CardData from "./MyworkData";
import "./Mywork.css";

function Mywork() {
  return (
    <>
      <section className="myworkmaincontainer" id="mywork">
        <div className="myworkwrapper">
          <div className="header2">
            <h1 className="myworkline">My Projects</h1>
          </div>
          <div className="allmyworkwrapper">
            {CardData.map((data, index) => {
              const { Title, Image, Technologies, Description, Links } = data;
              return (
                <div className="myworkcard" key={index}>
                  <img src={Image} alt="image" className="cardImage" />
                  <div className="imageinfo-wrapper">
                    <div className="imageTitle">{Title}</div>
                    <div className="descriptionbg">{Description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Mywork;
