import React from 'react';
import {useState} from "react";

const About = () => {
    const [projectName, setProjectName] = useState('Реактивный магазин');

    return (
        <div>
            Добро пожаловать в {projectName}
        </div>
    );
};

export default About;
