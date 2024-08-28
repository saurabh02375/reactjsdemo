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
          className="register-class input"
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
          className="register-class input"
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
          className="register-class input"
          value={formData.number|| ''}
          onChange={handleChange}
        />
        <span>Phone Number</span>
      </label>
      <label className="custum-file-upload" htmlFor="file">
        <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
            />
          </svg>
        </div>
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
