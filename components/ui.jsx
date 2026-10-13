'use client'
import { useState } from 'react'
import { motion } from 'motion/react'

export const Tree = ({ className = '' }) => (
  <svg viewBox="0 0 120 80" className={className} fill="currentColor" aria-hidden>
    <circle cx="60" cy="28" r="24" /><circle cx="33" cy="38" r="18" /><circle cx="87" cy="38" r="18" />
    <path d="M53 48h14c0 11 2 20 11 28H42c9-8 11-17 11-28z" />
  </svg>
)
export const Reveal = ({ children, className = '', delay = 0 }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
)
export const Eyebrow = ({ children, className = '' }) => (
  <span className={`inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-luxury text-brass ${className}`}><span className="h-px w-10 bg-current" />{children}</span>
)
export const Heading = ({ eyebrow, children, lead, light }) => (
  <Reveal>
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 className="mb-5 mt-4 text-5xl sm:text-6xl lg:text-7xl [&_em]:italic [&_em]:text-brass">{children}</h2>
    {lead && <p className={`max-w-xl text-lg leading-relaxed ${light ? 'text-cream/70' : 'text-muted'}`}>{lead}</p>}
  </Reveal>
)
export const Btn = ({ variant = 'solid', className = '', as: T = 'a', ...p }) => (
  <T {...p} className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition duration-300 hover:scale-[1.04] ${
    variant === 'solid' ? 'bg-brass-light text-deep shadow-lg shadow-brass/30' : 'border border-white/35 bg-white/10 text-white backdrop-blur-md hover:border-brass-light hover:text-brass-light'} ${className}`} />
)
export function Img({ src, alt, className = '' }) {
  const [bad, setBad] = useState(false)
  return bad ? <div role="img" aria-label={alt} className={`bg-gradient-to-br from-valley to-deep ${className}`} />
    : <img src={src} alt={alt} loading="lazy" onError={() => setBad(true)} className={className} />
}
