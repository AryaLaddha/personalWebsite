import React from 'react'
import './ResumeLine.css'

class ResumeLine extends React.Component {
    render() {
        return (
            <div className="resume">
                <ul className="resumeLineList">
                    <li className="resumeLinediv"><div className="fixed-line"></div></li>
                    <li className="resumeLineResume"><button>Resume</button></li>
                </ul>
            </div>
        )
    }
}

export default ResumeLine;
