import React from 'react'
import './Programming.css'
import ReactLogo from '../../images/icons8-react-80.svg'
import PythonLogo from '../../images/icons8-python-80.svg'
import HtmlLogo from '../../images/icons8-html-5-80.svg'
import CssLogo from '../../images/icons8-css3-80.svg'
import PostgreLogo from '../../images/icons8-postgresql-80.svg'
import JavaLogo from '../../images/icons8-java-80.svg'
import FirebaseLogo from '../../images/icons8-firebase-80.svg'

class Programming extends React.Component {
    render() {
        return (
            <div className="Languages">
                <img src={ReactLogo} alt="logo" className="ReactLogo" />
                <img src={PythonLogo} alt="logo" className="PythonLogo" />
                <img src={HtmlLogo} alt="logo" className="HtmlLogo" />
                <img src={CssLogo} alt="logo" className="CssLogo" />
                <img src={PostgreLogo} alt="logo" className="PostgreLogo" />
                <img src={JavaLogo} alt="logo" className="JavaLogo" />
                <img src={FirebaseLogo} alt="logo" className="FirebaseLogo" />
            </div>
        )
    }
}

export default Programming;