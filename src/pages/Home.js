import React from 'react';
import Sidebar from '../Components/Sidebar.js';
import Content from '../Components/Content.js';

function Home() {
  return (
    <>
      <Sidebar/>
      <Content keyword={"Home"}/>
    </>
  );
}

export default Home;
  