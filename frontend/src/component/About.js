import React from 'react'
import { useSelector } from 'react-redux'

const About = () => {
    const comp = useSelector((state)=>state.comp.comp)
  return (
    <>
    {   comp === "about" &&
        <div className="aboutPage">

      <h1 className="aboutHeading">About EduTrack</h1>

      <div className="aboutCard">

        <p>
          <b>EduTrack</b> is a smart academic management platform designed to
          help students organize subjects and track attendance efficiently.
          It provides a centralized system where students can monitor their
          academic progress in a simple and structured way.
        </p>

        <p>
          Instead of managing attendance manually, EduTrack provides a digital
          solution that helps students stay organized and focused throughout
          the semester.
        </p>

        <p>
          EduTrack is built using the <b>MERN Stack</b> (MongoDB, Express,
          React, Node.js) and uses secure <b>JWT authentication</b> to protect
          user data.
        </p>


        <h2 className="featureTitle">Key Features</h2>

        <div className="featureBox">

          <div className="featureItem">
            📚 Subject Management
          </div>

          <div className="featureItem">
            📊 Attendance Tracking
          </div>

          <div className="featureItem">
            🔐 Secure Login System
          </div>

          <div className="featureItem">
            📱 Simple Interface
          </div>

        </div>


        <h2 className="visionTitle">Our Vision</h2>

        <p>
          Our vision is to build a reliable academic management system that
          helps students improve productivity and stay disciplined in their
          studies.
        </p>

      </div>

    </div>
    }
</>
)
}

export default About
