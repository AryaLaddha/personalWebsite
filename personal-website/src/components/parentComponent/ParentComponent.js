import React from 'react';
import BackgroundHome from '../backgroundHome/BackgroundHome';
import About from '../about/About';
import Work from '../work/Work';

const ParentComponent = () => {
    return (
        <div className="parentComponent">
            <BackgroundHome />
            <About />
            <Work />
        </div>
    );
};

export default ParentComponent;
