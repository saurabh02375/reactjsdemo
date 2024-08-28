import React, { useState,useEffect } from 'react';
import './Register.css'; // External CSS file to maintain the styles

const Register = () => {
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    image: null,
    email:'',
    number:''

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

      const data = new FormData();
      data.append('username', formData.username);
      data.append('email', formData.email);
      data.append('number', formData.number);
      data.append('image', formData.image);
  
      fetch('https://nodeproject-izw9.onrender.com/submit-form', {  
        method: 'POST',
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
      <div className=" col-lg-6 col-12 mx-auto">
      {/* <h1 className="text-white mt-2 mb-4 pb-2 text-center">Stay tuned!</h1> */}
        <div className="offcanvas-body d-flex flex-wrap align-items-center justify-content-center">
        <form className="register-class form" onSubmit={handleSubmit} encType="multipart/form-data">
      <p className="title">Register</p>
      <p className="message">Signup now and get full access to our app.</p>

      <label>
        <input
          required
          placeholder=""
          name="username"
          type="text"
          className="register-class input text-light"
          value={formData.username|| ''}
          onChange={handleChange}
        />
        <span>Username</span>
      </label>
      <label>
        <input
          required
          placeholder=""
          name="email"
          type="text"
          className="register-class input text-light"
          value={formData.email|| ''}
          onChange={handleChange}
        />
        <span>Email</span>
      </label>
      <label>
        <input
          required
          placeholder=""
          name="number"
          type="number"
          className="register-class input text-light"
          value={formData.number|| ''}
          onChange={handleChange}
        />
        <span>Phone Number</span>
      </label>
      <label className="custum-f" htmlFor="file">
       
        <div className="register-class text">
          <span>Upload Image</span>
        </div>
        <input
          type="file"
          accept="image/png, image/gif, image/jpeg"
          id="file"
          className='register-class'
          name="image"
          onChange={handleChange}
        />
      </label>

      <button className="register-class submit">Submit</button>
    </form>
        </div>
      </div>
    </>
  );
};

export default Register;
