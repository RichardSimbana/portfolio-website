import React from 'react';
import { NavHashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark header" id="navbar">
            <div className="navbar-brand d-sx-block d-md-block d-lg-none color-style">Richard Simbana</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavHashLink exact className='nav-link' activeClassName="active" to='/#home' smooth>Home</NavHashLink>
                    </li>
                    <li className="nav-item">
                        <NavHashLink exact className='nav-link' activeClassName="active" to='/#about' smooth>About Me</NavHashLink>
                    </li>
                    <li className="nav-item">
                        <NavHashLink exact className='nav-link' activeClassName="active" to='/#work' smooth>Work</NavHashLink>
                    </li>
                    <li className="nav-item">
                        <NavHashLink exact className='nav-link' activeClassName="active" to='/#contact' smooth>Contact Me</NavHashLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Header;
