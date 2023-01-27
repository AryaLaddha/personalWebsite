import React from 'react'
import "./BackgroundHome.css"
import logo from '../../images/backgroundImage.jpg'

class BackgroundPage extends React.Component {
    render () {
        return (
            <div className="background-main">
                <div className="backgroundPage-left">
                    
                </div>
                <div className="backgroundPage">
                    <img src={logo} alt="logo" className="background" />
                </div>
                <div className="backgroundPage-right">
                </div>
            </div>
        )
    }
}

export default BackgroundPage;