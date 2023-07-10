import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: name,
      email: email,
      password: password
    };

    axios.post('http://localhost:8084/api/v1/user/save', user)
      .then(response => {
        console.log('Registration successful');
          
        // Handle success, such as showing a success message or redirecting to another page
      })
      .catch(error => {
        console.error('Registration failed:', error);
        // Handle error, such as showing an error message
      });
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Register</button>

    </form>
  );
};

export default RegisterForm;

