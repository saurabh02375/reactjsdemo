import React, { useState } from 'react';
import './Register.css'; 
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    image: null,
    email: '',
    number: '',
    password: ''
  });

  const [errors, setErrors] = useState({}); // State to hold validation errors

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
    data.append('password', formData.password);
    data.append('image', formData.image);

    try {
      const response = await fetch(`${apiUrl}/submit-form`, { 
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Success:', result);
        setIsSubmitted(true);
        setErrors({}); // Clear errors on success
      } else {
        setErrors(result.errors || {}); // Set errors if validation fails
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="col-lg-6 col-12 mx-auto">
        <div className="offcanvas-body d-flex flex-wrap align-items-center justify-content-center">
          <form className="register-class form" onSubmit={handleSubmit} encType="multipart/form-data">
            <p className="title">Register</p>
            <p className="message">Signup now and get full access to our app.</p>

            <label>
              <input
                placeholder=""
                name="username"
                type="text"
                className="register-class input text-light"
                value={formData.username || ''}
                onChange={handleChange}
              />
              <span>Username</span>
              {errors.username && <p className="text-danger error-message">{errors.username}</p>} {/* Display username error */}
            </label>

            <label>
              <input
                placeholder=""
                name="email"
                type="text"
                className="register-class input text-light"
                value={formData.email || ''}
                onChange={handleChange}
              />
              <span>Email</span>
              {errors.email && <p className="text-danger error-message">{errors.email}</p>} {/* Display email error */}
            </label>

            <label>
              <input
                placeholder=""
                name="number"
                type="number"
                className="register-class input text-light"
                value={formData.number || ''}
                onChange={handleChange}
              />
              <span>Phone Number</span>
              {errors.number && <p className="text-danger error-message">{errors.number}</p>} {/* Display number error */}
            </label>

            <label>
              <input
                placeholder=""
                name="password"
                type="password"
                className="register-class input text-light"
                value={formData.password || ''}
                onChange={handleChange}
              />
              <span>Password</span>
              {errors.password && <p className=" text-danger error-message">{errors.password}</p>} {/* Display password error */}
            </label>

            <label className="custum-f d-flex justify-content-center" htmlFor="file">
              <button className="container-btn-file">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                Upload Image
                <input
                  className="file"
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  id="file"
                  name="image"
                  onChange={handleChange}
                />
              </button>
              {errors.image && <p className=" text-danger error-message">{errors.image}</p>} {/* Display image error */}
            </label>

            <button className="register-class submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
