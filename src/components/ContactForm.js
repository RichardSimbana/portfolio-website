import React from 'react';

const ContactForm = props => {
    const iconToUse = () => {
        return (
            props.isEmailConfirming ?
                <button className="btn btn-primary" disabled>Send
                    <div className="spinner-border ml-1" role="status" />
                </button> : 
                <button className="btn btn-primary" type="submit">Send
                    <i className="far fa-paper-plane ml-1" />
                </button>
            );
    }
    
    return (
        <form onSubmit={props.onSubmit}>
            <div>
                <i className="fas fa-user-alt mr-1"/>
                <label>Your Name</label>
                <input
                    required
                    id="name"
                    type="text"
                    className="form-control"
                    value={props.contactForm.name}
                    onChange={event => props.onChange(event)}
                />
            </div>
            <div>
                <i className="far fa-envelope mr-1"/>
                <label>Your email</label>
                <input
                    required
                    id="email"
                    type="email"
                    className="form-control"
                    value={props.contactForm.email}
                    onChange={event => props.onChange(event)}
                />
            </div>
            <div>
                <i className="fas fa-pencil-alt mr-1"/>
                <label>Your Message</label>
                <textarea
                    required
                    id="message"
                    type="text"
                    rows="3"
                    className="form-control"
                    value={props.contactForm.message}
                    onChange={event => props.onChange(event)}
                />
                {iconToUse()}
            </div>
        </form>
    );
}
export default ContactForm;
