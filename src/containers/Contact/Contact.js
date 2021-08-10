import React from 'react';
import ContactForm from '../../components/ContactForm';
import './Contact.css';

const Contact = props => {
    return (
        <section className="contact flex">
            <div className="container grid">
                <div className="cell">
                    <h1>Contact Me</h1>
                </div>
                <div className="cell">
                    <ContactForm
                        isEmailConfirming={props.isEmailConfirming}
                        contactForm={props.contactForm}
                        onSubmit={props.onSubmit}
                        onChange={props.onChange}
                    />
                </div>
                <div className="cell">
                    <div>
                        <i className="fas fa-mobile-alt"/>
                        <label>908 205 5161</label>
                    </div>
                    <br/>
                    <div>
                        <i className="far fa-envelope"/>
                        <label>richardsimbana@yahoo.com</label>
                    </div>
                    <br/>
                    <div>
                        <button onClick={() => window.open('https://www.github.com/richardsimbana')} type="button" className="btn mr-2"><i className="fab fa-github" />Github</button>
                        <button onClick={() => window.open('https://www.linkedin.com/in/richardsimbana/')} type="button" className="btn"><i className="fab fa-linkedin-in" />Linkedin</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;
