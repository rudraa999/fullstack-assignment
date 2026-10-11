import React, { useState } from 'react';
import './ControlledForm.css';

// Assignment 5: Controlled React Form
function ControlledForm() {
  // State holding form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle changes for controlled inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="controlled-form-wrapper">
      <h2>Assignment 5: Controlled React Form</h2>
      <p className="subtitle">
        Accepts user inputs and displays the entered data in real-time below the form.
      </p>

      {/* Form with Controlled Inputs */}
      <form className="simple-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="formName">Name:</label>
          <input
            type="text"
            id="formName"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="formEmail">Email:</label>
          <input
            type="email"
            id="formEmail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="formMessage">Message:</label>
          <textarea
            id="formMessage"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter a short message"
          />
        </div>
      </form>

      {/* Real-time Display Below Form */}
      <div className="live-display">
        <h3>Real-Time Output:</h3>
        <p><strong>Name:</strong> {formData.name || '---'}</p>
        <p><strong>Email:</strong> {formData.email || '---'}</p>
        <p><strong>Message:</strong> {formData.message || '---'}</p>
      </div>
    </div>
  );
}

export default ControlledForm;
