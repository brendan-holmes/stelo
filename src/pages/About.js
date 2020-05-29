import React from 'react';
import Sidebar from '../Components/Sidebar.js';
import Content from '../Components/Content.js';

function About() {
  return (
    <>
      <Sidebar/>
      <Content keyword={"About"}/>
    </>
  );
}

export default About;