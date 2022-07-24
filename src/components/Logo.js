import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
    return (
        <>
            <Link className="home__mainLogo" to="/">
                <img src={require('../assets/images/custom/logo.png')} alt="logo" className="home__logo mr-1" />
                <span className="home__text-color d-inline-block fredoka-font ls-3 fw-600 font-xl logo-text mb-0">
                    MentorZ
                </span>
            </Link>
        </>
    )
}
