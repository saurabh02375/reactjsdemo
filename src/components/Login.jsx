import React, { useState,useEffect } from 'react';
import './Register.css'; // External CSS file to maintain the styles
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;;


const Login = () => {
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data =new URLSearchParams({
      'username': formData.username,
      'password':formData.password,
  });

    console.log(data)


    fetch(`${apiUrl}/login`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data,
    })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

    
  return (
    <>
      <div className="col-lg-6 col-12 mx-auto">
      {/* <h1 className="text-white mt-2 mb-4 pb-2 text-center">Stay tuned!</h1> */}
        <div className="d-flex flex-wrap align-items-center justify-content-center">
        <form className=" register-class form" onSubmit={handleSubmit} encType="multipart/form-data">
      <p className="title">Login</p>

      <label>
        <input
          required
          placeholder=""
          name="username"
          type="text"
          className="input register-class text-light"
          value={formData.username}
          onChange={handleChange}
        />
        <span>Username/Email</span>
      </label>
      <label>
        <input
          required
          placeholder=""
          name="password"
          type="password"
          className="input register-class text-light"
          value={formData.password}
          onChange={handleChange}
        />
        <span>Password</span>
      </label>
      

      <button type='submit' className="submit">Login</button>
    </form>
        </div>
      </div>
    </>
  );
};

export default Login;
