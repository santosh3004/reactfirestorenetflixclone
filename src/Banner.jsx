import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <header className='banner' style={{
      backgroundSize:"cover",
      backgroundPosition:"center center",
      backgroundImage:`url("https://c8.alamy.com/comp/2DCB92D/logos-of-the-on-demand-video-site-and-app-netflix-on-a-heap-web-banner-size-with-copy-space-selective-focus-2DCB92D.jpg")`
    }}>

    <div className="banner__contents">
      <h1 className="banner__title">
        Movie Name
      </h1>
      <div className="banner__buttons">
        <button className='banner__button'>Play</button>
        <button className='banner__button'>My List</button>
        
      </div>
      <div className='banner__fadeBottom'></div>
    </div>

    </header>
  )
}

export default Banner