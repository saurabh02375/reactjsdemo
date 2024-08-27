import React from 'react'
import { Header } from './components'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
      <Header />
      <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 mx-auto">
              <h1 className="text-white mt-2 mb-4 pb-2 text-center">Stay tuned!</h1>

              <div className="d-flex flex-wrap align-items-center justify-content-center">
                <ul className="countdown d-flex flex-wrap align-items-center justify-content-center">
                  <li className="countdown-item d-flex flex-column justify-content-center align-items-center">
                    <h2 className="countdown-title days">14</h2>
                    <span className="countdown-text">Days</span>
                  </li>

                  <li className="countdown-item d-flex flex-column justify-content-center align-items-center">
                    <h2 className="countdown-title hours">10</h2>
                    <span className="countdown-text">Hours</span>
                  </li>

                  <li className="countdown-item d-flex flex-column justify-content-center align-items-center">
                    <h2 className="countdown-title minutes">15</h2>
                    <span className="countdown-text">Minutes</span>
                  </li>

                  <li className="countdown-item d-flex flex-column justify-content-center align-items-center">
                    <h2 className="countdown-title seconds">34</h2>
                    <span className="countdown-text">Seconds</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="video-wrap">
          <video autoPlay loop muted className="custom-video" poster="">
            <source src="/assets/videos/earth-rotation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <Outlet />
    </>
  )
}

export default Layout