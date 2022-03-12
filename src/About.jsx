import React from "react";
import web from "../src/images/home-page-animation.jpg";
import {NavLink} from "react-router-dom";
import Common from './Common'

const About = () => {
    return (
        <Common
        name="Welcome to About Page"
        imgsrc={web}
        visit="/about"
        btname="Contact Now"
        />
    )
}

export default About;