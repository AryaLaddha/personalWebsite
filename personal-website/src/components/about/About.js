import React from 'react'
import './About.css'
import PersonalPhoto from '../../images/IMG_5391.jpg'

class About extends React.Component {
    render () {
        return (
            <div className="AboutPage">
                <div className="About-Information">
                    <div className="About-Heading">
                        About.
                    </div>
                    <div className="About-Paragraph-1">
                        Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                    </div>
                    <div className="About-Paragraph-2">
                        Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                    </div>
                    <div className="About-Paragraph-3">
                        I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React. Here are a few technologies I’ve been working with recently:
                    </div>
                </div>
                <div className="About-Photo">
                    <img src={PersonalPhoto} alt="logo" className="Personal-image" width="400px" height="400px"/>
                </div>
            </div>
        )
    }
}

export default About;
