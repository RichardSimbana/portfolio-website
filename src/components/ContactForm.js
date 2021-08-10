import React from 'react';

const ContactForm = props => {
    const iconToUse = () => {
        return (
            props.isEmailConfirming ?
                <button className="btn btn-primary mt-2" disabled>Send
                    <div className="spinner-border ml-2" role="status" />
                </button> : 
                <button className="btn btn-primary mt-2" type="submit">Send
                    <i className="far fa-paper-plane ml-2" />
                </button>
            );
    }
    
    return (
        <form onSubmit={props.onSubmit}>
            <div className="">
                <i className="fas fa-user-alt"/>
                <label>Your Name</label>
                <input
                    required
                    id="name"
                    type="text"
                    className="form-control mt-1"
                    value={props.contactForm.name}
                    onChange={event => props.onChange(event)}
                />
            </div>
            <div className="mt-2">
                <i className="far fa-envelope"/>
                <label>Your email</label>
                <input
                    required
                    id="email"
                    type="email"
                    className="form-control mt-1"
                    value={props.contactForm.email}
                    onChange={event => props.onChange(event)}
                />
            </div>
            <div className="mt-2">
                <i className="fas fa-pencil-alt"/>
                <label>Your Message</label>
                <textarea
                    required
                    id="message"
                    type="text"
                    rows="3"
                    className="form-control mt-1"
                    value={props.contactForm.message}
                    onChange={event => props.onChange(event)}
                />
                {iconToUse()}
            </div>
        </form>
    );
}
export default ContactForm;
