import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import { Routes ,Route } from 'react-router-dom';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/service' element={<Service/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/about' element={<About/>} />
        </Routes>

    )
}

export default App;