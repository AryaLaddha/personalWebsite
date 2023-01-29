import React from 'react'
import './About.css'
import Profile from '../../images/IMG_5391.jpg'

class About extends React.Component {
    render () {
        return (
            <div className="AboutPage">
                <div className="about-container">
                    <div className="about-line-left"></div>
                    <div className="About-text">ABOUT</div>
                    <div className="about-line-right"></div>
                </div>
                <div className="main-about">
                    <div className="paragraph-about">
                        {/* <div> */}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum turpis nunc, facilisis maximus leo ultrices vitae. Proin eu tellus ligula. Praesent sed enim molestie, placerat turpis sed, hendrerit nibh. Aenean sagittis, ipsum ac lobortis posuere, tellus arcu rutrum nulla, vel sodales mauris leo sed elit. Cras sodales velit eros, eu condimentum ante mattis quis. Duis at mattis velit. Mauris mollis interdum lectus eu dictum. Ut ipsum enim, convallis tincidunt justo vitae, fermentum pellentesque ex.
                        {/* </div> */}
                        {/* <div> */}
                            Cras laoreet finibus eros tempor sagittis. Sed purus metus, mollis quis tincidunt vel, tincidunt sit amet magna. Vivamus gravida malesuada erat ut iaculis. Donec tempus pretium mauris, a posuere est aliquam eget. Vivamus sodales et mi in scelerisque. Morbi scelerisque dui nec nunc mattis dignissim. Vestibulum at ultricies justo, eget mollis augue.
                        {/* </div> */}
                    </div>
                    <div className="picture">
                        <img src={Profile} alt="Personal" height={270} width={270}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
