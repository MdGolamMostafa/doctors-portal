import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item mr-5 active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item mr-5">
        <a className="nav-link" href="/login">Login</a>
      </li>
      <li className="nav-item mr-5">
        <a className="nav-link" href="/dashboard">Doctors Dashboard</a>
      </li>
      <li className="nav-item mr-5">
        <a className="nav-link  text-white" href="/dashboard">Admin</a>
      </li>
      <li className="nav-item mr-5">
        <a className="nav-link text-white" href="#blog">Blog</a>
      </li>
      <li className="nav-item mr-5">
        <a className="nav-link text-white" href="#contact">Contact Us</a>
      </li>
      
    </ul>
    
  </div>
</nav>
    );
};

export default Navbar;