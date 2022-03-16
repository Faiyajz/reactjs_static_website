import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import {Routes, Route, Navigate} from 'react-router-dom';
import Footer from "./Footer";

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/service' element={<Service/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/about' element={<About/>} />
                <Route path='*' element={<Navigate replace to="/" />} />
            </Routes>
            <Footer/>
        </>


    )
}

export default App;