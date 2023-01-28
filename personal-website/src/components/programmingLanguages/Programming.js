import React from 'react'
import './Programming.css'
import ReactLogo from '../../images/icons8-react-80.svg'
import PythonLogo from '../../images/icons8-python-80.svg'
import PostgreLogo from '../../images/icons8-postgresql-80.svg'

class Programming extends React.Component {
    render() {
        return (
            <div className="Languages">
                <div className="fixed-line-right"></div>
                <img src={ReactLogo} alt="logo" className="ReactLogo" height={50} width={50}/>
                <img src={PythonLogo} alt="logo" className="PythonLogo" height={50} width={50}/>
                <img src={PostgreLogo} alt="logo" className="PostgreLogo" height={50} width={50}/>
            </div>
        )
    }
}

export default Programming;