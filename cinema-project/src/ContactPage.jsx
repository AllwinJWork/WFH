import React from 'react';
import './ContactPage.css'; // Import the CSS file for styling

const ContactPage = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p>Please use the form below to contact the site owner.</p>
      <form className="contact-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>

        <button className="submit-button" type="submit">Submit</button>
      </form>

      <div className="contact-info">
        <h3>Email us at:</h3>
        <p>Email: <a href="mailto:ajohnson@qa.com">ajohnson@qa.com</a></p>
      </div>

      <div className="contact-info">
        <h3>Find us at:</h3>
        <p>Manchester One, 19th Floor: <br /> 53 Portland Street,Manchester,M1 3LD</p>
      </div>
    </div>
  );
};

export default ContactPage;
