import React from 'react'
import './OtpVerify.css';

const OtpVerify = () => {
  return (
    <>
      <div className=" col-lg-6 col-12 mx-auto">
        <div className="d-flex justify-content-center ">
          <form className="form"> <div className="otp-title">OTP
          </div>
            <div className="otp-title">Verification Code</div>
            <p className="message">We have sent a verification code to your mobile number</p>
            <div className="form-card-input-wrapper">
              <input className="form-card-input" placeholder="____" maxLength="4" type="tel" />
              <div className="form-card-input-bg"></div>
            </div>
            <button className="action">verify me</button> </form>
        </div>
      </div>
    </>
  )
}

export default OtpVerify


