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
            <div className="inputs">
               <input id="input1" type="text" maxLength="1"/>
               <input id="input2" type="text" maxLength="1"/> 
               <input id="input3" type="text" maxLength="1"/> 
               <input id="input4" type="text" maxLength="1"/> 
            </div> 
          <button className="action">verify me</button> </form>
        </div>
      </div>
    </>
  )
}

export default OtpVerify