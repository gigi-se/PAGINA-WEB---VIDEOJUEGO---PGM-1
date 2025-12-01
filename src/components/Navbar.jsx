import React from 'react'

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="logo">GAME<span className="dot">.</span></div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#media">Media</a>
          <button className="cta">Pre-order</button>
        </nav>
      </div>
    </header>
  )
}
