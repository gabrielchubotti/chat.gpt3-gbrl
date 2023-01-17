import React from 'react';
import {Footer, Blog, Features, WhatGPT3, Header, Possibility} from './containers';
import {Brand, CTA, Navbar} from './components';
import './App.css';


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
};

export default App;