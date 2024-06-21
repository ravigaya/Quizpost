import React from 'react';

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add register logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" id="email" placeholder="Enter email" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="tel" className="form-control" id="phone" placeholder="Enter phone number" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Enter password" required />
      </div>
      <button type="submit" className="btn btn-primary btn-block">Register</button>
    </form>
  );
}

export default Register;
