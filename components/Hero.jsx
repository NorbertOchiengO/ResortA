'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { hero, img, enquiryTypes, brand } from '@/data/resortContent'
import { Btn, Eyebrow } from './ui'
import { deliver, inputCls } from './Enquiry'

export default function Hero() {
  const ref = useRef(null), [dots, setDots] = useState([]), [sent, setSent] = useState(false)
  const [v, setV] = useState({ name: '', type: enquiryTypes[0], arrival: '', guests: '2' })
  useEffect(() => setDots(Array.from({ length: 24 }, () => ({ l: Math.random() * 100, d: 10 + Math.random() * 10, t: -Math.random() * 16 }))), [])
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(p, [0, 1], ['0%', '22%']), sc = useTransform(p, [0, 1], [1.05, 1.18]), cy = useTransform(p, [0, 1], ['0%', '30%']), fade = useTransform(p, [0, .7], [1, 0])
  const set = k => e => setV({ ...v, [k]: e.target.value })
  const lab = 'grid gap-1.5 text-[11px] uppercase tracking-[.2em] text-muted'
  return (
    <section id="top" ref={ref} className="relative min-h-svh overflow-hidden bg-valley text-white">
      <motion.div style={{ y, scale: sc, backgroundImage: `url(${img.hero})` }} className="absolute inset-0 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-deep/60 via-deep/20 to-deep/85" /><div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      {dots.map((d, i) => <i key={i} className="absolute bottom-0 z-[1] size-1.5 rounded-full bg-brass-light opacity-0" style={{ left: `${d.l}%`, animation: `drift ${d.d}s linear ${d.t}s infinite` }} />)}
      <motion.div style={{ y: cy, opacity: fade }} className="relative z-10 mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 pb-[26rem] pt-32 md:pb-64">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .4 }}><Eyebrow className="!text-brass-light">{hero.eyebrow}</Eyebrow></motion.div>
        <h1 className="my-6 max-w-4xl text-6xl sm:text-8xl lg:text-9xl">{hero.words.map((w, i) => <motion.span key={w} className={`mr-4 inline-block ${i === 1 ? 'italic text-brass-light' : ''}`}
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 1, delay: .5 + i * .18, ease: [.22, 1, .36, 1] }}>{w}</motion.span>)}</h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.2 }} className="max-w-xl text-lg leading-relaxed text-white/80">{hero.sub}</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.4 }} className="mt-9 flex flex-wrap gap-3.5"><Btn href="#enquiry">Plan your stay</Btn><Btn href="#stay" variant="ghost">See the rooms</Btn></motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 1.6 }} className="absolute inset-x-0 bottom-0 z-20 px-4">
        <form onSubmit={e => { e.preventDefault(); deliver(v); setSent(true) }} className="mx-auto grid max-w-5xl grid-cols-2 items-end gap-3.5 rounded-t-3xl border border-border bg-card/90 p-5 text-foreground shadow-2xl backdrop-blur-xl md:grid-cols-[repeat(4,1fr)_auto] md:p-6">
          <label className={lab}>Looking for<select className={inputCls} value={v.type} onChange={set('type')}>{enquiryTypes.map(t => <option key={t}>{t}</option>)}</select></label>
          <label className={lab}>Arrival<input type="date" className={inputCls} value={v.arrival} onChange={set('arrival')} /></label>
          <label className={lab}>Guests<input type="number" min="1" className={inputCls} value={v.guests} onChange={set('guests')} /></label>
          <label className={lab}>Your name<input className={inputCls} placeholder="Jane W." value={v.name} onChange={set('name')} /></label>
          <Btn as="button" type="submit" className="col-span-2 md:col-span-1">{sent ? 'Request sent ✓' : 'Check availability'}</Btn>
        </form>
      </motion.div>
    </section>
  )
}
