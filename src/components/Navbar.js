import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary container-fluid">
    <div class="container-fluid">
    <Link class="navbar-brand fw-bold" to='/'><span className='fw-bold text-danger'>PAVI</span>Cozo.</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" to='/'>Acasa</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/galerie'>Galerie</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/contact'>Contact</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbar;