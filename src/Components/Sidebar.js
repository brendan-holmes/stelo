import React from 'react';
import '../css/Sidebar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Sidebar(){
    return (
        <div className="Sidebar">
            <div className="SidebarContent">
                <h1>Stelo</h1>
                <ul>
                    <li>
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects" className="link">Projects</Link>
                    </li>
                    <li>
                        <Link to="/about" className="link">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="link">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;