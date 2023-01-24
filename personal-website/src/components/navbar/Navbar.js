import React from 'react'
import "./Navbar.css"

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <div class="navbar-content">
                    <div class="left-content">
                        Arya Laddha
                    </div>
                    <div class="center-content">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#work">Work</a>
                    </div>
                    <div class="right-content">
                        <button>Contact</button>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
