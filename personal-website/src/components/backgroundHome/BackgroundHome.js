import React from 'react'
import "./BackgroundHome.css"
import logo from '../../images/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style/21004063.jpg'

class BackgroundPage extends React.Component {
    render () {
        return (
            <div classname="Main-front">
                <div className="background-main">
                    <div className="background-text-left">
                        Web Developer
                    </div>
                    <div className="background-image-div">
                        <img src={logo} alt="logo" className="background-image"/>
                    </div>
                    <div className="background-text-right">
                        Data Analyst
                    </div>
                </div>
                <div className="IntroductionPage">
                    <div className="Main-text">
                        Designer, Front-end Developer, & Mentor
                    </div>
                    <div className="Main-para">
                        I design and code beautifully simple things, and I love what I do.
                    </div>
                </div>
            </div>
        )
    }
}

export default BackgroundPage;