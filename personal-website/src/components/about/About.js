import React from 'react'
import './About.css'
import Profile from '../../images/IMG_5391.jpg'

class About extends React.Component {
    render () {
        return (
            <div className="AboutPage">
                <div classname="about-container">
                    <div classname="about-line-left"></div>
                    <div classname="About-text">ABOUT</div>
                    <div classname="about-line-right"></div>
                </div>
                <div classname="main-about">
                    <div classname="paragraph-about"></div>
                    <div classname="picture"></div>
                </div>
            </div>
        )
    }
}

export default About;
