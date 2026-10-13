import { Header, StickyCta, Footer } from '@/components/Chrome'
import Hero from '@/components/Hero'
import { Glance, Story, Stay, Days, Dine, Explore, Gallery, Faq } from '@/components/Sections'
import { Enquiry } from '@/components/Enquiry'

export default function Page() {
  return (
    <main className="relative overflow-x-hidden selection:bg-brass selection:text-deep">
      <Header /><Hero /><Glance /><Story /><Stay /><Days /><Dine /><Explore /><Gallery /><Faq /><Enquiry /><Footer /><StickyCta />
    </main>
  )
}
