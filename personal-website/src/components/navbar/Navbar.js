import React from 'react'
import "./Navbar.css"

class Navbar extends React.Component {
    render() {
        return (
            <nav className="main-nav">
                <div class="navbar-content">
                    <div class="left-content">
                        {/* <img src={logo} alt="logo" className="logoMain" height={50} width={50}/> */}
                        Arya Laddha
                    </div>
                    <div class="center-content">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#work">Work</a>
                        <a href="#blog">Blog</a>
                        <a href="#contact"> <button> Contact </button> </a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
