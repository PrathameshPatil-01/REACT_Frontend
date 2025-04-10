import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <Link className="navbar-brand" to="/home">PROJECT 01</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <pre>{user.first_name} {user.last_name}</pre>
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Navbar
