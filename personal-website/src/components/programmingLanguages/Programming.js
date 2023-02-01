import React from 'react'
import './Programming.css'

import instagramLogo from '../../images/icons8-instagram-48.svg'
import githubLogo from '../../images/icons8-github-60.svg'
import linkedinLogo from '../../images/icons8-linkedin.svg'

class Programming extends React.Component {
    render() {
        return (
            <div className="Languages">
                <div className="fixed-line-right"></div>
                <img src={instagramLogo} alt="logo" className="InstaLogo" height={40} width={40}/>
                <img src={githubLogo} alt="logo" className="GithubLogo" height={40} width={40}/>
                <img src={linkedinLogo} alt="logo" className="LinkedLogo" height={40} width={40}/>
            </div>
        )
    }
}

export default Programming;