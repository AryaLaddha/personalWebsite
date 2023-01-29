import React from 'react';
import BackgroundHome from '../backgroundHome/BackgroundHome';
import About from '../about/About';

const ParentComponent = () => {
    return (
        <div className="parentComponent">
            <BackgroundHome />
            <About />
        </div>
    );
};

export default ParentComponent;
