import React from "react"

import "../client/styles/header.scss"

const Header = (props) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <img src="marker.png" width="30" height="30" className="d-inline-block align-top"/>
                Dro
            </a>
        </nav>
    )
}

export default Header