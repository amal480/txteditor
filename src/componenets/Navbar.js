import React from 'react'
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom'

export default function Navbar(props) {


    const handleChange = (event) => {
        props.toggleColor(event.target.value)
        // document.body.style.backgroundColor = event.target.value;
    }

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>

                        <div className='divc'>
                            <input type='color' className="button1" title="Change background color" onChange={handleChange} />
                        </div>


                        <div className={`form-check form-switch text-${props.tmode}`}>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Darkmode</label>
                            <input className="form-check-input mx-2" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault" />
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    lin: PropTypes.string
}

Navbar.defaultProps = {
    title: "Default"
}