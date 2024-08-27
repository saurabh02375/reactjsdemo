import React from 'react'

const Header = () => {
  return (
   <>
         {/* Site Header */}
         <header className="site-header">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-12 col-12 d-flex align-items-center">
              <a className="site-header-text d-flex justify-content-center align-items-center me-auto" href="index.html">
                <i className="bi-box"></i>
                <span>Template</span>
              </a>
              <a
                className="bi-list offcanvas-icon"
                data-bs-toggle="offcanvas"
                href="#offcanvasMenu"
                role="button"
                aria-controls="offcanvasMenu"
              ></a>
            </div>
          </div>
        </div>
      </header>

      {/* Offcanvas Menu */}
      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasMenu"
        aria-labelledby="offcanvasMenuLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close ms-auto"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body d-flex flex-column justify-content-center align-items-center">
          <nav>
            <ul>
              <li>
                <a href="login.html">Login Form</a>
              </li>
              <li>
                <a href="register.html">Create an account</a>
              </li>
              <li>
                <a href="password-reset.html">Password Reset</a>
              </li>
              <li>
                <a href="404.html">404 Page</a>
              </li>
              <li>
                <a href="contact.html">Contact Form</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
   </>
  )
}

export default Header