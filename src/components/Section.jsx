import React from 'react'

export default function Section({title, text}){
  return (
    <section className="section">
      <div className="container">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  )
}
