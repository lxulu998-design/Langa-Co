import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section className="max-w-5xl mx-auto">
      <div className="py-20">
        <h1 className="text-5xl font-bold leading-tight">Get More Customers. Keep Them Coming Back.</h1>
        <p className="mt-6 text-lg text-[var(--muted)]">For Ballito businesses who are tired of relying only on WhatsApp Status. We build Squarespace-quality websites that turn visitors into paying customers — from R200/month.</p>
        <div className="mt-8 flex space-x-4">
          <Link to="/services" className="px-6 py-3 rounded-12 border border-[var(--text)]">See Packages from R200</Link>
          <a href="#" className="px-6 py-3 rounded-12 bg-black text-[var(--bg)]">See Live Demo</a>
        </div>
        <div className="mt-6 p-4 rounded-12 soft-shadow trust-bar flex items-center justify-center">No R5000 upfront fee • You own it • Works perfectly on mobile data</div>
      </div>
    </section>
  )
}
