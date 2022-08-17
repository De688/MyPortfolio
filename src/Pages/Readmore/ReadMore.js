import React from "react";
import "./ReadMore.css";
import pic from "../../../src/myimage.jpg";

function ReadMore() {
  return (
    <section className="Readmore_maincontainer">
      <div className="readmorewrapper">
        <img src={pic} alt="image" className="myimage" />
        <div className="myimageshadow"></div>
        <div className="myimageshadow2"></div>
      </div>

      <div className="descrpitions">
        <h2 className="header3"> Hello there! </h2>
        <p className="goodwords">
          My name is Christopher Daniel.A self taught full stack web developer
          living in Tanzania. I enjoy building user friendly websites and web
          apps and loves helping people thrives on the internet, Most recently i
          have been building web app using React. I'm curently learning photo
          and video editing.
          <br></br>
          <br></br>
          <span>
            <h1>i'm also. . .</h1>
            <br></br>
            <li>Always love learning and keeping up with the latest tech</li>
            <li>when i'm relaxing i love Watching tech videos </li>
            <li>And also i like to record and edit videos.</li>
            <br></br>
            <br></br>
          </span>
        </p>
      </div>
    </section>
  );
}

export default ReadMore;
