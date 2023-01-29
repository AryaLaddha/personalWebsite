import React from 'react'
import './About.css'
// import Profile from '../../images/IMG_5391.jpg'

class About extends React.Component {
    render () {
        return (
            <div className="AboutPage">
                <div className="about-container">
                    <div className="about-line-left"></div>
                    <div className="About-text">ABOUT</div>
                    <div className="about-line-right"></div>
                </div>
                <div className="main-about">
                    <div className="paragraph-about"></div>
                    <div className="picture"></div>
                </div>
            </div>
        )
    }
}

export default About;
