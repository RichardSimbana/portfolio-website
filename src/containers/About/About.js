import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <section className="about-me flex">
            <div className="container grid">
                <div className="cell">
                    <h1>About Me</h1>
                </div>
                <div className="cell grid-center-self">
                    <img src={require('../../images/profile-picture.jpg')} className='profile-pic' alt="profile" />
                </div>
                <div className="cell">
                    <p>Richard Simbana is currently employed as a Software Engineer, responsible for creating and maintaining scalable API services to handle client expectations and UI interfaces to streamline workflows. Currently studying for the Oracle Database Exam (1Z0-071). In their spare time, they are either exploring new locations and trying out new foods or working on game development projects.</p>
                </div>
                <div className="cell">
                    <label>Download:</label>
                    {/* <Link to="./resume.pdf" target="_blank" download> */}
                        <button type="button" className="btn btn-primary ml-1">Resume<i className="fas fa-file-download ml-1" /></button>
                    {/* </Link> */}
                </div>
            </div>
        </section>
    )
}
export default About;
