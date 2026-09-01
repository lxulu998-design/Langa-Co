import React from 'react'
import pricing from '../data/pricing.json'

function FeatureList({items}){
  return (
    <ul className="mt-3 list-disc ml-5 text-[var(--muted)]">
      {items.map((f,i)=>(<li key={i}>{f}</li>))}
    </ul>
  )
}

function PackageCard({p}){
  return (
    <div className={`p-8 rounded-12 soft-shadow ${p.popular? 'package-popular':''}`}>
      <div className="flex items-baseline justify-between">
        <h4 className={`text-xl font-semibold ${p.popular? 'text-[var(--bg)]':''}`}>{p.name}</h4>
        <div className={`text-2xl font-bold ${p.popular? 'text-[var(--bg)]':''}`}>R{p.price}/month</div>
      </div>
      <div className="mt-2 text-sm text-[var(--muted)]">{p.label}</div>
      <FeatureList items={p.features} />
      <div className="mt-4 text-sm font-semibold">Goal: {p.goal}</div>
    </div>
  )
}

export default function Services(){
  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">A Website That Actually Brings Customers</h2>
      <p className="text-[var(--muted)] max-w-2xl">It's not a website — it's a customer acquisition & retention system combining design, WhatsApp flows and local SEO to get you leads and keep them coming back.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {pricing.websitePackages.map(p => <PackageCard key={p.id} p={p} />)}
      </div>

      <div className="mt-6 text-[var(--muted)]">FAQ: {pricing.faq}</div>

      <h3 className="mt-12 text-2xl font-semibold">Also from Langa & Co</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {pricing.secondary.map(s => (
          <div key={s.id} className="p-6 bg-[var(--bg)] rounded-12 soft-shadow">
            <h4 className="font-semibold">{s.name}</h4>
            <p className="mt-2 text-[var(--muted)]">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
