import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div id="about" className="container-fluid about">
            <div className="jumbotron">
                <div className='row'>
                    <div className='col'>
                        <div className="jumbotron-title">About Me</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className='row'>
                            <div className='col-sm-6 col-md-6 col-lg-3 center-div'>
                                <img src={require('../../images/profile-picture.jpg')} className='profile-pic' alt="profile" />
                            </div>
                            <div className='col'>
                                <p>Richard Simbana is currently employed as a Software Engineer, responsible for creating and maintaining scalable API services to handle client expectations and UI interfaces to streamline workflows. Currently studying for the Oracle Database Exam (1Z0-071). In their spare time, they are either exploring new locations and trying out new foods or working on game development projects.</p>
                                <label className="mr-2">Download:</label>
                                <Link to="./resume.pdf" target="_blank" download><button type="button" className="btn btn-primary">Resume<i className="fas fa-file-download ml-2" /></button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;
