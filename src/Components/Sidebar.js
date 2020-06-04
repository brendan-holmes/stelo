import React from 'react';
import '../css/Sidebar.css';
import { Link } from "react-router-dom";

function Sidebar(props){

    const onLinkClick = () => {
        // console.log(typeof(props.updateContentView))
        console.log("Link clicked")
        props.updateContentView(true);
    }
    return (
        <div className="Sidebar">
            <div className="SidebarContent">
                <Link to="/stelo" className="link"><h1 className="Brand">Stelo</h1></Link>
                <ul>
                    <li>
                        <Link to="/stelo/projects" className="link" onClick={onLinkClick}>Projects</Link>
                    </li>
                    <li>
                        <Link to="/stelo/about" className="link" onClick={onLinkClick}>About</Link>
                    </li>
                    <li>
                        <Link to="/stelo/contact" className="link" onClick={onLinkClick}>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;