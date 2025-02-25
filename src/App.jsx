import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import Analysis  from './screens/Analysis';
import Profile from './screens/Profile';



import './styles/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


const App = () => {

    useEffect(() => {
        
    }, []);

    return (
        <Router>
            <Navbar />
            <div style={{paddingLeft: '4.5rem'}}>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/analysis" element={<Analysis />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
