import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <main>
        <Section title="About the Game" text="This is a template inspired by modern game landing pages. Replace this with your content and assets." />
        <Section title="Features" text="Stunning visuals, cinematic hero, responsive layout, and modular React components." />
        <Section title="Media" text="Swap in your screenshots, trailers, and promotional assets here." />
      </main>
      <Footer />
    </div>
  )
}
