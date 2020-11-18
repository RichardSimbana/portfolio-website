import React from 'react';
import ContactForm from '../../components/ContactForm';
import './Contact.css';

const Contact = props => {
    return (
        <div id="contact" className="container-fluid contact">
            <div className="jumbotron">
                <div className="row">
                    <div className="col">
                        <div className="jumbotron-title">Contact Me</div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-lg-6 col">
                        <ContactForm
                            isEmailConfirming={props.isEmailConfirming}
                            contactForm={props.contactForm}
                            onSubmit={props.onSubmit}
                            onChange={props.onChange}
                        />
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <br />
                                <i className="fas fa-mobile-alt mr-2" />
                                <label>908 205 5161</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <br />
                                <i className="far fa-envelope mr-2" />
                                <label>richardsimbana@yahoo.com</label>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col">
                                <button onClick={() => window.open('https://www.github.com/richardsimbana')} type="button" className="btn btn-sm btn-git"><i className="fab fa-github pr-1" />Github</button>
                                <button onClick={() => window.open('https://www.linkedin.com/in/richardsimbana/')} type="button" className="btn btn-sm btn-li"><i className="fab fa-linkedin-in pr-1" />Linkedin</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;
