import React, { useState } from 'react';
import './Contact.css'; 
import axios from 'axios';
import emailjs from 'emailjs-com';  // Import EmailJS

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');

  var qdata = {};

  const handleSubmit = (e) => {
    e.preventDefault();

    qdata = {
      name,
      email,
      query
    };
    
    // Send form data to your backend via axios
    axios.post('https://malvibol-backend.onrender.com/Submit_Query_Data', qdata).then(response => {
      console.log(response.data);
      document.getElementById("display_message").innerHTML = response.data;
      document.getElementById("display_message").style.color = "green";
    }).catch(error => {
      console.log(error);
    });

    // Send form data via EmailJS
    emailjs.send('service_fhpzvbi', 'template_wqs7n5l', qdata, 'eqsacw18BOgrOwm2I')
      .then((result) => {
          console.log(result.text);
          document.getElementById("display_message").innerHTML = "Query submitted successfully!";
      }, (error) => {
          console.log(error.text);
          document.getElementById("display_message").innerHTML = "Failed to submit query.";
      });

    // Reset form fields
    setName('');
    setEmail('');
    setQuery('');
  };

  return (
    <div className="contact-form" id="contact">
      <h2>Contact Us</h2>
      <p>
        We appreciate your interest in contacting us. Whether you have a question about our products, services, or just want to say hello, we're here to help. Please fill out the form below with your details and query, and we'll get back to you as soon as possible.
      </p>
      <form className="contact_formmm" onSubmit={handleSubmit}>
        <div className="form-group_1">
          <label className="query_label" htmlFor="name">Full Name</label>
          <input
            className='query_inputs'
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group_1">
          <label className="query_label" htmlFor="email">Email Address</label>
          <input
            className='query_inputs'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group_1">
          <label className="query_label" htmlFor="query">Problem/Query</label>
          <textarea
            className='query_inputs qry_txta'
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          ></textarea>
        </div>
        <button className="submit_Query_btn" type="submit">Submit Query</button>
      </form>
      <div id='display_message'></div>
    </div>
  );
};

export default Contact;
