import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container">
        <div>© {new Date().getFullYear()} Your Studio</div>
        <div className="foot-links">
          <a href="#">Privacy</a> · <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}
