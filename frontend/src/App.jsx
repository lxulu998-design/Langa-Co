import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Phones from './pages/Phones'
import Security from './pages/Security'
import Results from './pages/Results'

function Nav(){
  return (
    <header className="flex items-center justify-between p-6 bg-transparent">
      <div className="flex items-center space-x-4">
        <div className="text-xl font-semibold">Langa & Co</div>
        <div className="text-sm text-[var(--muted)]">Ballito, KZN</div>
      </div>
      <nav className="space-x-6">
        <Link to="/services" className="text-slate-800">Growth Websites</Link>
        <Link to="/phones" className="text-slate-800">Phones</Link>
        <Link to="/security" className="text-slate-800">Security</Link>
        <Link to="/results" className="text-slate-800">Results</Link>
        <Link to="/contact" className="text-slate-800">Contact</Link>
        <Link to="/services" className="ml-4 inline-block px-4 py-2 rounded-12 bg-black text-[var(--bg)]">Get My Growth Website</Link>
      </nav>
    </header>
  )
}

export default function App(){
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Nav />
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/phones" element={<Phones/>} />
          <Route path="/security" element={<Security/>} />
          <Route path="/results" element={<Results/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </main>
      <footer className="p-6 text-center text-sm text-[var(--muted)]">© {new Date().getFullYear()} Langa & Co — Built with care</footer>
      <WhatsAppFloat />
    </div>
  )
}

function WhatsAppFloat(){
  const text = encodeURIComponent('Hi Langa, I want the R200 website that brings customers')
  const url = `https://wa.me/?text=${text}`
  return (
    <a className="whatsapp-float" href={url} target="_blank" rel="noreferrer">WhatsApp</a>
  )
}

export { WhatsAppFloat }
