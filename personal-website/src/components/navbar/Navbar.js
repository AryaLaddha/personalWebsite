import React from 'react'
import "./Navbar.css"
import logo from '../../images/newLogo1.png'
import instagramLogo from '../../images/icons8-instagram-48.svg'
import githubLogo from '../../images/icons8-github-60.svg'
import linkedinLogo from '../../images/icons8-linkedin.svg'
import facebookLogo from '../../images/icons8-facebook.svg'

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <div class="navbar-content">
                    <div class="left-content">
                        <img src={logo} alt="logo" className="logoMain" height={50} width={50}/>
                        Arya Laddha
                    </div>
                    <div class="center-content">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Portfolio</a>
                        <a href="#work">Blog</a>
                        <a href="#work">Contact</a>
                    </div>
                    <div class="right-content">
                        <a href='#' className="social-link">
                            <img src={instagramLogo} alt="logo" className="social-logo" />
                        </a>
                        <a href='#' className="social-link">
                            <img src={githubLogo} alt="logo" className="social-logo" height={48} width={48}/>
                        </a>
                        <a href='#' className="social-link">
                            <img src={linkedinLogo} alt="logo" className="social-logo" />
                        </a>
                        <a href='#' className="social-link">
                            <img src={facebookLogo} alt="logo" className="social-logo" /> 
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
