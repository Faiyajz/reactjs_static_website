import React from "react";
import web from "../src/images/digital-marketing.gif";
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