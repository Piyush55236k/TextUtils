import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been submitted.`);
    setFormData({name: '', email: '', message: ''}); // Reset form
  };

  const formStyle = {
    maxWidth: '500px',
    margin: 'auto',
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <div style={{padding: '20px'}}>
      <h2 style={{textAlign: 'center', marginBottom: '20px'}}>Contact Me</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          style={inputStyle}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your name"
        />

        <label>Email</label>
        <input
          style={inputStyle}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />

        <label>Message</label>
        <textarea
          style={{...inputStyle, height: '120px'}}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Type your message"
        ></textarea>

        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
