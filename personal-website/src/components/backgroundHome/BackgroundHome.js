import React from 'react'
import "./BackgroundHome.css"
import logo from '../../images/background1.png'

class BackgroundPage extends React.Component {
    render () {
        return (
            <div className="background-main">
                <div className="backgroundPage">
                    <img src={logo} alt="logo" className="background" />
                </div>
            </div>
        )
    }
}

export default BackgroundPage;