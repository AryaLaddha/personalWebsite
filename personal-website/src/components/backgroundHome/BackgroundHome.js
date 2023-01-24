import React from 'react'
import "./BackgroundHome.css"
import logo from '../../images/backgroundImage.jpeg'

class BackgroundPage extends React.Component {
    render () {
        return (
            <div className="backgroundPage">
                <img src={logo} alt="logo" className="background" />
            </div>
        )
    }
}

export default BackgroundPage;