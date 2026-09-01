import React, {useState} from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [status, setStatus] = useState(null)

  async function submit(e){
    e.preventDefault()
    const res = await fetch('http://localhost:4000/api/contact', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(form)
    })
    if(res.ok) setStatus('sent')
    else setStatus('error')
  }

  return (
    <section className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <form className="mt-4" onSubmit={submit}>
        <label className="block">Name<input className="w-full p-2 border mt-1" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} /></label>
        <label className="block mt-2">Email<input className="w-full p-2 border mt-1" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} /></label>
        <label className="block mt-2">Message<textarea className="w-full p-2 border mt-1" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} /></label>
        <button className="mt-4 px-4 py-2 bg-accent text-white rounded" type="submit">Send</button>
      </form>
      {status === 'sent' && <p className="mt-2 text-green-600">Message sent. We'll respond soon.</p>}
      {status === 'error' && <p className="mt-2 text-red-600">Error sending message.</p>}
    </section>
  )
}
