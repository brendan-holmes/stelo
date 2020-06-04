import React from 'react';
import '../css/Image.css';
// import LazyLoad from 'react-lazyload';

function Image(props){
    return (
        // <LazyLoad>
            <span className="Image">
                <img src={props.src} alt="Default"/>
            </span>  
        // </LazyLoad>
    )};

export default Image;