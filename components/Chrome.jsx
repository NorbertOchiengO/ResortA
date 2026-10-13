'use client'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X, Moon, Sun, MessageCircle } from 'lucide-react'
import { brand, nav, contact } from '@/data/resortContent'
import { Tree, Btn } from './ui'

export function Header() {
  const [s, setS] = useState(false), [open, setOpen] = useState(false), [dark, setDark] = useState(false)
  useEffect(() => { setDark(document.documentElement.classList.contains('dark')); const f = () => setS(scrollY > 40); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])
  const flip = () => { const d = !dark; setDark(d); document.documentElement.classList.toggle('dark', d); try { localStorage.setItem('theme', d ? 'dark' : 'light') } catch {} }
  return (<>
    <motion.header initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: .2, ease: [.22, 1, .36, 1] }} className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border py-2.5 pl-5 pr-3 backdrop-blur-xl transition-all duration-500 ${s ? 'border-border bg-background/80 text-foreground shadow-lg' : 'border-white/20 bg-white/5 text-white'}`}>
        <a href="#top" className="flex items-center gap-2.5 font-serif text-xl tracking-wide"><Tree className="h-5 w-7 text-brass" />{brand.name}</a>
        <ul className="hidden items-center gap-7 text-sm lg:flex">{nav.map(([l, h]) => <li key={h}><a href={h} className="opacity-80 transition hover:text-brass hover:opacity-100">{l}</a></li>)}</ul>
        <div className="flex items-center gap-2">
          <button onClick={flip} aria-label="Toggle theme" className="grid size-9 place-items-center rounded-full border border-current/30 opacity-80 hover:opacity-100">{dark ? <Sun className="size-4" /> : <Moon className="size-4" />}</button>
          <Btn href="#enquiry" className="hidden !px-5 !py-2.5 sm:inline-flex">Enquire</Btn>
          <button className="grid size-9 place-items-center lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu"><Menu className="size-5" /></button>
        </div>
      </nav>
    </motion.header>
    <AnimatePresence>{open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-6 bg-deep/95 text-cream">
      <button className="absolute right-6 top-6" onClick={() => setOpen(false)} aria-label="Close menu"><X /></button>
      {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="font-serif text-4xl hover:text-brass-light">{l}</a>)}
      <Btn href="#enquiry" onClick={() => setOpen(false)}>Enquire</Btn></motion.div>}</AnimatePresence>
  </>)
}

export function StickyCta() {
  const [show, setShow] = useState(false)
  useEffect(() => { const f = () => setShow(scrollY > 700); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  const wa = contact.whatsapp ? `https://wa.me/${contact.whatsapp}` : '#enquiry'
  return <div className={`fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-border bg-background/90 p-3 backdrop-blur-xl transition-transform duration-500 md:hidden ${show ? '' : 'translate-y-full'}`}>
    <Btn href="#enquiry" className="flex-1">Enquire now</Btn><Btn href={wa} variant="ghost" className="!border-border !bg-transparent !text-foreground"><MessageCircle className="size-4" />WhatsApp</Btn></div>
}

export function Footer() {
  return <footer className="bg-deep px-6 pb-24 pt-16 text-center text-cream md:pb-12">
    <a href="#top" className="inline-flex items-center gap-3 font-serif text-4xl"><Tree className="h-8 w-12 text-brass" />{brand.name} {brand.descriptor}</a>
    <p className="mt-3 font-serif text-2xl italic text-brass-light">{brand.tagline}</p><p className="mt-2 text-sm text-cream/60">{brand.location}</p>
    <p className="mx-auto mt-10 max-w-xl text-xs leading-relaxed text-cream/40">Concept website prepared by Levis Tech Solutions. Imagery is illustrative and facts are drawn from public listings, pending the resort’s confirmation. No enquiries are sent while in demo mode.</p>
  </footer>
}
