import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import Analysis  from './screens/Analysis';
import Profile from './screens/Profile';
import History from "./screens/History";

import './styles/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


const App = () => {

    const [menuIdx, setMenuIdx] = useState(0);

    return (
        <HashRouter>
            <Navbar menuIdx={menuIdx} setMenuIdx={setMenuIdx}/>
            <div style={{paddingLeft: '4.5rem'}}>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/analysis" element={<Analysis />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/history" element={<History setMenuIdx={setMenuIdx}/>} />
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;
