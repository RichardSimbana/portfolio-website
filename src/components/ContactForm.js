import React from 'react';

const ContactForm = props => {
    const iconToUse = () => {
        return (
            props.isEmailConfirming ?
                <button className="btn btn-primary" disabled>Send
                    <div className="spinner-border ml-2" role="status" />
                </button> : 
                <button className="btn btn-primary" type="submit">Send
                    <i className="far fa-paper-plane ml-2" />
                </button>
            );
    }
    
    return (
        <form onSubmit={props.onSubmit}>
            <div className="row">
                <div className="col">
                    <i className="fas fa-user-alt mr-2" />
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
            </div>
            <br />
            <div className="row">
                <div className="col">
                    <i className="far fa-envelope mr-2" />
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
            </div>
            <br />
            <div className="row">
                <div className="col">
                    <i className="fas fa-pencil-alt mr-2" />
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
                    <br />
                    {iconToUse()}
                </div>
            </div>
        </form>
    );
}
export default ContactForm;
