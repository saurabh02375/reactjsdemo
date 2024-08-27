import React from 'react'
import { Header } from './components'
import { Outlet } from 'react-router-dom';
import video from './assets/videos/earth-rotation.mp4';

const Layout = () => {
  return (
    <>
      <Header />
      <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
        <div className="container">
          <div className="row">
          <Outlet />
          </div>
        </div>

        <div className="video-wrap">
          <video autoPlay loop muted className="custom-video" poster="">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

    </>
  )
}

export default Layout