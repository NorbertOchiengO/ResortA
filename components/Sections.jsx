'use client'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Plus, X, Waves, Utensils, Car, Clock, BedDouble, Coffee, MapPin, Sprout } from 'lucide-react'
import { img, glance, story, rating, rooms, roomIncludes, days, dine, explore, mapQuery, gallery, faq, brand } from '@/data/resortContent'
import { Heading, Reveal, Img, Eyebrow, Btn } from './ui'

const Sec = ({ id, className = '', children }) => <section id={id} className={`px-6 py-28 ${className}`}><div className="mx-auto max-w-6xl">{children}</div></section>
const icons = [BedDouble, Waves, Coffee, Utensils, Car, Clock]

export function Glance() {
  return <div className="bg-valley px-6 py-10 text-cream"><div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
    {glance.map(([a, b], i) => { const I = icons[i]; return <div key={b} className="flex flex-col items-center text-center"><I className="mb-2 size-5 text-brass-light" strokeWidth={1.4} /><b className="font-serif text-3xl font-light">{a}</b><small className="text-[11px] uppercase tracking-[.18em] text-cream/60">{b}</small></div> })}
  </div></div>
}

export function Story() {
  return <Sec><div className="grid items-center gap-16 md:grid-cols-[.95fr_1.05fr]">
    <Reveal className="relative h-[460px] md:h-[600px]">
      <Img src={img.story} alt="Sunlight moving through tall trees" className="absolute left-0 top-0 h-[82%] w-[72%] rounded-[2rem] object-cover shadow-2xl" />
      <Img src={img.hills} alt="Misty green hills" className="absolute bottom-0 right-0 h-[48%] w-[52%] rounded-[2rem] border-[6px] border-background object-cover shadow-2xl" /></Reveal>
    <div><Heading eyebrow="Our story">{story.title[0]} <em>{story.title[1]}</em></Heading>
      <Reveal delay={.1} className="space-y-4 text-lg leading-relaxed text-muted">{story.body.map(t => <p key={t}>{t}</p>)}</Reveal>
      <Reveal delay={.2} className="mt-9 flex items-center gap-5 rounded-2xl border border-border bg-card p-5"><b className="font-serif text-6xl font-light text-brass">{rating.score}</b>
        <p className="text-sm text-muted">Average rating from {rating.count} {rating.source}.</p></Reveal></div></div></Sec>
}

export function Stay() {
  return <Sec id="stay" className="bg-sand"><Heading eyebrow="Stay" lead="Three pool-view room types, all with the comforts that matter and breakfast on us.">Rest with a <em>view of the water.</em></Heading>
    <div className="mt-14 grid gap-6 md:grid-cols-3">{rooms.map((r, i) => <Reveal key={r.name} delay={i * .1}>
      <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
        <div className="aspect-[4/3] overflow-hidden"><Img src={img[r.img]} alt={`${r.name} room, illustrative`} className="size-full object-cover transition duration-1000 group-hover:scale-110" /></div>
        <div className="p-6"><small className="text-[11px] uppercase tracking-[.2em] text-brass">{r.meta}</small><h3 className="mb-2 mt-2 text-3xl font-medium">{r.name}</h3><p className="text-[15px] leading-relaxed text-muted">{r.text}</p></div></article></Reveal>)}</div>
    <Reveal className="mt-8 flex flex-wrap gap-2.5">{roomIncludes.map(t => <span key={t} className="rounded-full bg-valley px-5 py-2 text-[13px] tracking-wide text-brass-light">{t}</span>)}</Reveal>
    <Reveal className="mt-10"><Btn href="#enquiry">Ask about availability</Btn></Reveal></Sec>
}

export function Days() {
  return <Sec id="days"><div className="grid items-center gap-16 md:grid-cols-2">
    <div><Heading eyebrow="Days out" lead="You don’t have to stay overnight to feel the difference. Come for the day, bring the family.">Pool days, <em>proper</em> breaks.</Heading>
      <ul className="mt-8">{days.map(([t, d]) => <Reveal key={t}><li className="border-b border-dashed border-border py-5"><h3 className="text-3xl font-medium">{t}</h3><p className="mt-1 text-muted">{d}</p></li></Reveal>)}</ul></div>
    <Reveal className="relative"><Img src={img.pool} alt="Sunlit valley landscape" className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl" />
      <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-xl"><Sprout className="size-5 text-brass" /><span className="font-serif text-xl">Free parking on site</span></div></Reveal></div></Sec>
}

export function Dine() {
  return <Sec id="dine" className="bg-valley text-cream"><div className="grid items-center gap-16 md:grid-cols-[1.1fr_.9fr]">
    <Reveal><Img src={img.table} alt="Light-filled dining space" className="aspect-[4/3] w-full rounded-[2rem] object-cover" /></Reveal>
    <div><Heading light eyebrow="Dine & drink" lead={dine.lead}>Good food, <em>unhurried.</em></Heading>
      <ul className="mt-8">{dine.items.map(([t, d]) => <li key={t} className="flex justify-between gap-4 border-b border-cream/15 py-4"><b className="font-serif text-2xl font-medium">{t}</b><span className="text-right text-sm text-cream/60">{d}</span></li>)}</ul></div></div></Sec>
}

export function Explore() {
  return <Sec id="explore"><div className="grid gap-12 md:grid-cols-[.9fr_1.1fr]">
    <div><Heading eyebrow="Explore" lead="Base yourself here and spend the day at the falls or the gardens.">Close to the <em>good stuff.</em></Heading>
      <ul className="mt-8 grid gap-3">{explore.map(([t, d]) => <Reveal key={t}><li className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4"><MapPin className="size-5 shrink-0 text-brass" /><div><b className="block font-serif text-xl font-medium">{t}</b><span className="text-sm text-muted">{d}</span></div></li></Reveal>)}</ul></div>
    <Reveal><iframe title={`Map to ${brand.name}`} loading="lazy" className="h-[420px] w-full rounded-[2rem] border border-border md:h-full md:min-h-[460px]" src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`} /></Reveal></div></Sec>
}

export function Gallery() {
  const [i, setI] = useState(null), n = gallery.length
  useEffect(() => { if (i === null) return; const k = e => { if (e.key === 'Escape') setI(null); if (e.key === 'ArrowRight') setI((i + 1) % n); if (e.key === 'ArrowLeft') setI((i - 1 + n) % n) }; addEventListener('keydown', k); return () => removeEventListener('keydown', k) }, [i, n])
  return <Sec id="gallery" className="bg-sand"><Heading eyebrow="Gallery">A glimpse of <em>the valley.</em></Heading>
    <Reveal className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3.5 md:grid-cols-4">{gallery.map(([k, alt, wide], x) => <button key={k} onClick={() => setI(x)} className={`group overflow-hidden rounded-2xl ${wide ? 'col-span-2' : ''}`} aria-label={`Open: ${alt}`}>
      <Img src={img[k]} alt={alt} className="size-full object-cover transition duration-[1400ms] group-hover:scale-110" /></button>)}</Reveal>
    {i !== null && <div role="dialog" aria-modal="true" className="fixed inset-0 z-[70] grid place-items-center bg-deep/95 p-5" onClick={() => setI(null)}>
      <button className="absolute right-6 top-6 text-white" aria-label="Close"><X /></button>
      <button className="absolute left-4 text-white" aria-label="Previous" onClick={e => { e.stopPropagation(); setI((i - 1 + n) % n) }}><ChevronLeft className="size-9" /></button>
      <img src={img[gallery[i][0]]} alt={gallery[i][1]} className="max-h-[85vh] max-w-full rounded-2xl object-contain" onClick={e => e.stopPropagation()} />
      <button className="absolute right-4 text-white" aria-label="Next" onClick={e => { e.stopPropagation(); setI((i + 1) % n) }}><ChevronRight className="size-9" /></button></div>}</Sec>
}

export function Faq() {
  const [o, setO] = useState(0)
  return <Sec id="faq"><div className="mx-auto max-w-3xl"><Heading eyebrow="Good to know">Quick <em>answers.</em></Heading>
    <div className="mt-10">{faq.map(([q, a], x) => <div key={q} className="border-b border-border"><button onClick={() => setO(o === x ? -1 : x)} aria-expanded={o === x} className="flex w-full items-center justify-between gap-4 py-5 text-left font-serif text-2xl"><span>{q}</span><Plus className={`size-5 shrink-0 text-brass transition ${o === x ? 'rotate-45' : ''}`} /></button>
      <div className={`grid transition-all duration-500 ${o === x ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}><p className="overflow-hidden text-muted">{a}</p></div></div>)}</div></div></Sec>
}
