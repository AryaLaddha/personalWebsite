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
                        Hello! My name is Arya Laddha, and I am an experienced data analyst and web developer who has worked as a systems engineer in an IT management company. I built the frontend of an IT management software and created a data analytics project, which sparked my interest in web development.
                    </div>
                    <div className="About-Paragraph-2">
                        My main focus is to create inclusive and accessible digital experiences for users. Currently, I am expanding my skills in Node and React by building web apps that integrate with APIs like the Spotify API. I am passionate about using my skills to develop innovative solutions and create value for clients.
                    </div>
                    <div className="About-Paragraph-3">
                        I am passionate about using my skills to develop innovative solutions and create value for clients. With my experience and knowledge, I am confident that I can take on challenging projects and deliver exceptional results.
                    </div>
                    {/* <div className="About-Paragraph-4">
                        Here are a few technologies that I use:
                    </div>
                    <div className="About-Paragraph-5">
                        <div className='first-list'>
                            <ul>
                                <li>ReactJS</li>
                                <li>NodeJS</li>
                                <li>Python</li>
                            </ul>
                        </div>
                        <div className='second-list'>
                            <ul>
                                <li>PostgreSQL</li>
                                <li>Socket Programming</li>
                                <li>Azure</li>
                            </ul>
                        </div>
                    </div> */}
                </div>
                <div className="About-Photo">
                    <img src={PersonalPhoto} alt="logo" className="Personal-image" width="300px" height="300px"/>
                </div>
            </div>
        )
    }
}

export default About;
