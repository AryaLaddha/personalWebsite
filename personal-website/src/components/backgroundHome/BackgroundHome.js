import React from 'react'
import "./BackgroundHome.css"
import logo from '../../images/background1.png'

class BackgroundPage extends React.Component {
    render () {
        return (
                <div className="background-main">
                    <div className="backgroundPage-left">
                        <div className="backgroundPage-left-up">
                            Hi, I am Arya.
                        </div>
                        <div className="backgroundPage-left-down">
                            <div className="backgroundPage-left-down-up">
                                Web Developer
                            </div>
                            <div className="backgroundPage-left-down-down">
                                & Data Analyst
                            </div>
                            <div className="backgroundPage-left-lowest">
                                I am a Computer Science student at the University of New South Wales and working part-time as a systems engineer. Aspiring to be an amazing frontend developer and data analyst to help companies grow their business.
                            </div>
                        </div>
                    </div>
                    <div className="backgroundPage">
                        <img src={logo} alt="logo" className="background" />
                    </div>
                </div>
        )
    }
}

export default BackgroundPage;