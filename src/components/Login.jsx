import React, { useState,useEffect } from 'react';
import './Register.css'; // External CSS file to maintain the styles

const Login = () => {
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('username', formData.username);
    form.append('image', formData.image);

    // Handle the form submission logic here
    console.log('Form data:', formData);

    // Trigger useEffect by updating state
    setIsSubmitted(true);
  };

    useEffect(() => {
      if (isSubmitted) {
        fetch('https://api.github.com/users/hiteshchoudhary')
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
        
        // Reset the submission state if needed
        setIsSubmitted(false);
      }
    }, [isSubmitted]);

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
      

      <button className="submit">Login</button>
    </form>
        </div>
      </div>
    </>
  );
};

export default Login;
