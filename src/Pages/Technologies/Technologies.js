import React from "react";
import "./Technologies.css";
import reactjs from "../../../src/reactjs.png";
import javascriptjs from "../../../src/javascript.png";
import expressjs from "../../../src/expressjs.png";
import nodejs from "../../../src/nodejs.png";
import socketio from "../../../src/socketio.png";
import firebase from "../../../src/firebase.png";
import redux from "../../../src/redux.png";
import css3 from "../../../src/css3.png";
import html5 from "../../../src/html.png";
import mongodb from "../../../src/mongodb.png";

function Technologies() {
  return (
    <>
      <section className="techmaincontainer" id="tech">
        <div className="techwarapper">
          <div className="header">
            <h1>Technologies</h1>
          </div>
          <div className="alltechcontainer">
            <div className="frontendtechs">
              <div className="frontendtext">Frontend</div>
              <div className="frontendlist">
                <div className="icon_and_name-container">
                  <img
                    src={reactjs}
                    alt="reactjs-image"
                    className="reacttechimage"
                  />
                  <div className="iconstexts">ReactJS</div>
                </div>
                <div className="icon_and_name-container">
                  <img
                    src={javascriptjs}
                    alt="javascript-image"
                    className="javascripttechimage"
                  />
                  <div className="iconstexts">Javascript</div>
                </div>
                <div className="icon_and_name-container">
                  <img
                    src={redux}
                    alt="redux-image"
                    className="reduxtechimage"
                  />
                  <div className="iconstexts">Redux</div>
                </div>
                <div className="icon_and_name-container">
                  <img src={css3} alt="css-image" className="csstechimage" />
                  <div className="iconstexts">CSS3</div>
                </div>
                <div className="icon_and_name-container">
                  <img src={html5} alt="html-image" className="htmltechimage" />
                  <div className="iconstexts">HTML5</div>
                </div>
              </div>
            </div>
            <div className="frontendtechs">
              <div className="frontendtext">Backend</div>
              <div className="frontendlist">
                <div className="icon_and_name-container">
                  <img
                    src={nodejs}
                    alt="nodetjs-image"
                    className="nodetechimage"
                  />
                  <div className="iconstexts">NodeJS</div>
                </div>
                <div className="icon_and_name-container">
                  <img
                    src={expressjs}
                    alt="express-image"
                    className="expresstechimage"
                  />
                  <div className="iconstexts">ExpressJS</div>
                </div>
              </div>
            </div>
            <div className="frontendtechs">
              <div className="frontendtext">Others</div>
              <div className="frontendlist">
                <div className="icon_and_name-container">
                  <img
                    src={mongodb}
                    alt="mongodb-image"
                    className="mongodbtechimage"
                  />
                  <div className="iconstexts">MongoDB</div>
                </div>

                <div className="icon_and_name-container">
                  <img
                    src={socketio}
                    alt="socketio-image"
                    className="socketiotechimage"
                  />
                  <div className="iconstexts">Socket.io</div>
                </div>
                <div className="icon_and_name-container">
                  <img
                    src={firebase}
                    alt="firebase-image"
                    className="firebasetechimage"
                  />
                  <div className="iconstexts">Firebase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Technologies;
