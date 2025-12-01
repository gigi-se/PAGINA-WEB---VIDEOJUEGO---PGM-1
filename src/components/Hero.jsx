import React from 'react'

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-media" aria-hidden="true">
        {/* Decorative gradient + overlay instead of copyrighted video */}
      </div>
      <div className="hero-content">
        <h1 className="hero-title">WELCOME TO <span className="accent">VI</span></h1>
        <p className="hero-sub">An original template inspired by cinematic game sites — replace with your assets.</p>
        <div className="hero-actions">
          <a className="btn primary" href="#features">Watch Trailer</a>
          <a className="btn ghost" href="#media">Screenshots</a>
        </div>
      </div>
    </section>
  )
}
