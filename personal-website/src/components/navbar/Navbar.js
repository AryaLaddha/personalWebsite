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
                        <a href="#work">Work</a>
                        <a href="#blog">Blog</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div class="right-content">
                        <a href='#insta' className="social-link">
                            <img src={instagramLogo} alt="logo" className="social-logo" />
                        </a>
                        <a href='#github' className="social-link">
                            <img src={githubLogo} alt="logo" className="social-logo" height={48} width={48}/>
                        </a>
                        <a href='#linkedin' className="social-link">
                            <img src={linkedinLogo} alt="logo" className="social-logo" />
                        </a>
                        <a href='#facebook' className="social-link">
                            <img src={facebookLogo} alt="logo" className="social-logo" /> 
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
