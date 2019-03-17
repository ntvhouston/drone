import React from "react"

import "../client/styles/header.scss"

const Header = (props) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand headerBrand" href="#">
                <img src="marker.png" width="30" height="30" className="logo d-inline-block align-top"/>
                DRONE TRACK
            </a>
        </nav>
    )
}

export default Header