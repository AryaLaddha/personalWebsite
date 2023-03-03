import React from 'react';
import BackgroundHome from '../backgroundHome/BackgroundHome';
import About from '../about/About';
import Projects from '../projects/Projects';

const ParentComponent = () => {
    return (
        <div className="parentComponent">
            <BackgroundHome />
            <About />
            <Projects />
        </div>
    );
};

export default ParentComponent;
