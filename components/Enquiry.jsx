'use client'
import { useState } from 'react'
import { Check } from 'lucide-react'
import { brand, contact, enquiryTypes } from '@/data/resortContent'
import { Heading, Reveal, Btn } from './ui'

// Opens WhatsApp when contact.whatsapp is set; otherwise runs as a demo (nothing is sent).
export function deliver(v) {
  const text = `Hello ${brand.name} ${brand.descriptor}, I'm ${v.name || 'a guest'}. Enquiry: ${v.type}. Arrival: ${v.arrival || 'to be confirmed'}. Guests: ${v.guests || '-'}.${v.message ? ' ' + v.message : ''}`
  if (contact.whatsapp) window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`, '_blank')
}
export const inputCls = 'w-full rounded-xl border border-border bg-background px-3.5 py-3 text-[15px] text-foreground outline-none transition focus:border-brass'

export function Enquiry() {
  const [v, setV] = useState({ name: '', email: '', type: enquiryTypes[0], arrival: '', guests: '2', message: '' })
  const [err, setErr] = useState({}), [sent, setSent] = useState(false)
  const set = k => e => setV({ ...v, [k]: e.target.value })
  const submit = e => {
    e.preventDefault()
    const n = {}
    if (!v.name.trim()) n.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) n.email = 'Please enter a valid email.'
    if (!v.message.trim()) n.message = 'Tell us a little about your plans.'
    setErr(n); if (!Object.keys(n).length) { deliver(v); setSent(true) }
  }
  const L = ({ t, e, children }) => <label className="grid gap-1.5 text-[11px] uppercase tracking-[.2em] text-valley/70">{t}{children}{e && <span className="text-xs normal-case tracking-normal text-red-800">{e}</span>}</label>
  return (
    <section id="enquiry" className="bg-brass px-6 py-28 text-deep">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[.8fr_1.2fr]">
        <div>
          <Heading eyebrow="Enquire">Let’s plan your <em className="!text-valley">stay.</em></Heading>
          <Reveal className="mt-8 space-y-2 text-[15px]"><p>Tell us when you’d like to come and we’ll reply with availability and options.</p>
            <p className="opacity-70">Phone: {contact.phone}<br />Email: {contact.email}</p></Reveal>
        </div>
        <Reveal>
          {sent ? <div className="grid min-h-[420px] place-content-center gap-3 rounded-3xl bg-cream p-10 text-center text-valley">
            <Check className="mx-auto size-10 text-brass" /><h3 className="text-4xl">Thank you, {v.name.split(' ')[0]}.</h3>
            <p className="text-valley/70">{contact.whatsapp ? 'We’ve opened WhatsApp with your details.' : 'Demo mode: no message was sent. On launch this goes straight to the resort.'}</p></div>
          : <form onSubmit={submit} noValidate className="grid gap-5 rounded-3xl bg-cream p-7 text-valley shadow-2xl sm:grid-cols-2 md:p-10">
            <L t="Full name" e={err.name}><input className={inputCls} value={v.name} onChange={set('name')} /></L>
            <L t="Email" e={err.email}><input type="email" className={inputCls} value={v.email} onChange={set('email')} /></L>
            <L t="I’m enquiring about"><select className={inputCls} value={v.type} onChange={set('type')}>{enquiryTypes.map(t => <option key={t}>{t}</option>)}</select></L>
            <div className="grid grid-cols-2 gap-3"><L t="Arrival"><input type="date" className={inputCls} value={v.arrival} onChange={set('arrival')} /></L><L t="Guests"><input type="number" min="1" className={inputCls} value={v.guests} onChange={set('guests')} /></L></div>
            <div className="sm:col-span-2"><L t="Your message" e={err.message}><textarea rows={4} className={inputCls} value={v.message} onChange={set('message')} /></L></div>
            <Btn as="button" type="submit" className="sm:col-span-2 !bg-valley !text-cream">Send enquiry</Btn>
          </form>}
        </Reveal>
      </div>
    </section>
  )
}
