import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted successfully');

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <>
      <div className='contact-heading'>
        <h2>Contact Us</h2>
      </div>
      <div className="contact">
        <section>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label><br />
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              required 
            /><br />
            <label htmlFor="email">Email:</label><br />
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange} 
              required 
            /><br />
            <label htmlFor="message">Message:</label><br />
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleInputChange} 
              required 
            ></textarea><br />
            <input type="submit" value="Submit" />
          </form>
        </section>
      </div>
    </>
  );
};

export default Contact;
