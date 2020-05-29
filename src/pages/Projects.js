import React from 'react';
import Sidebar from '../Components/Sidebar.js';
import Content from '../Components/Content.js';

function Projects() {
  return (
    <>
      <Sidebar/>
      <Content keyword={"Projects"}/>
    </>
  );
}

export default Projects;