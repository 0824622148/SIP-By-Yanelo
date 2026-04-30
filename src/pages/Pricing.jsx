import { useState } from 'react'
import { Link } from 'react-router-dom'
import WaveDivider from '../components/ui/WaveDivider'
import PricingCard from '../components/ui/PricingCard'
import { plans } from '../data/plans'
import { useIntersection } from '../hooks/useIntersection'
import bottlesImg from '../assets/Bottles.png'

function FadeSection({ children, className = '' }) {
  const [ref, visible] = useIntersection()
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      {children}
    </div>
  )
}

const comparisonFeatures = [
  { label: 'Scheduled delivery', weekly: true, monthly: true },
  { label: 'Same-day delivery', weekly: false, monthly: true },
  { label: 'Free bottle exchange', weekly: true, monthly: true },
  { label: 'Community donation', weekly: true, monthly: true },
  { label: 'Priority support', weekly: false, monthly: true },
  { label: 'Savings vs single order', weekly: '0%', monthly: '15%' },
]

const faqs = [
  { q: 'Can I cancel my subscription anytime?', a: 'Yes — send us a WhatsApp message and we will cancel or pause with no questions asked and no fees.' },
  { q: 'Do you charge a bottle deposit?', a: 'No deposit. We operate a free bottle exchange — return empty, receive full. Simple.' },
  { q: 'What if I need more water than my plan includes?', a: 'You can top up at any time with a one-off order at regular pricing. Just WhatsApp us.' },
  { q: 'How do I pay?', a: 'We accept EFT and cash on delivery. WhatsApp us to confirm payment details after ordering.' },
]

export default function Pricing() {
  const [frequency, setFrequency] = useState('monthly')

  return (
    <div className="overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="bg-gradient-hero pt-32 pb-0 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-16">
          <span className="inline-block text-blue-300 text-sm font-semibold uppercase tracking-wider mb-5">Plans & Pricing</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Water that <span className="text-brand-blue">fits</span> your life.
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Choose your delivery frequency and the size that works best for your household.
            Every plan includes a community water donation.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
            <button
              onClick={() => setFrequency('weekly')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${frequency === 'weekly' ? 'bg-white text-brand-navy shadow-md' : 'text-white hover:text-white/80'}`}
            >
              Weekly
            </button>
            <button
              onClick={() => setFrequency('monthly')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${frequency === 'monthly' ? 'bg-white text-brand-navy shadow-md' : 'text-white hover:text-white/80'}`}
            >
              Monthly
              <span className="ml-2 text-xs bg-green-400 text-white px-2 py-0.5 rounded-full">Save 15%</span>
            </button>
          </div>
        </div>
        <WaveDivider fill="#F8FAFC" />
      </section>

      {/* ── PRICING CARDS ── */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans[frequency].map((plan, i) => (
              <FadeSection key={plan.id}>
                <PricingCard plan={plan} />
              </FadeSection>
            ))}
          </div>

          <FadeSection className="mt-12 text-center">
            <p className="text-slate-500 text-sm">
              All plans include door-to-door delivery, free bottle exchange, and a community donation.{' '}
              <Link to="/impact" className="text-brand-blue hover:underline font-medium">Learn about our impact →</Link>
            </p>
          </FadeSection>
        </div>
      </section>

      {/* ── PRODUCT VISUAL ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeSection>
              <img src={bottlesImg} alt="SIP water bottles" className="rounded-2xl shadow-card w-full" />
            </FadeSection>
            <FadeSection>
              <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-wider mb-4">Our Products</span>
              <h2 className="section-heading mb-6">Three sizes.<br />One promise.</h2>
              <p className="section-sub mb-8">
                Whether you are hydrating a household, running an office, or heading out — SIP has the right size.
                All bottles are BPA-free, sealed for purity, and delivered cold.
              </p>
              <div className="space-y-4">
                {[
                  { size: '20L Refill', desc: 'Perfect for families & offices', price: 'R45.00' },
                  { size: '10L Refill', desc: 'Great for smaller households', price: 'R25.00' },
                  { size: '500ml Pack', desc: 'On-the-go & events', price: 'R55.00' },
                ].map(({ size, desc, price }) => (
                  <div key={size} className="flex items-center justify-between p-4 bg-brand-blue-pale rounded-xl">
                    <div>
                      <span className="font-semibold text-brand-navy">{size}</span>
                      <span className="text-slate-500 text-sm ml-3">{desc}</span>
                    </div>
                    <span className="font-display font-bold text-brand-blue">{price}</span>
                  </div>
                ))}
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE (desktop) ── */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-12">
            <h2 className="section-heading">Weekly vs Monthly</h2>
            <p className="section-sub mx-auto mt-3">A clear look at what each plan includes.</p>
          </FadeSection>
          <FadeSection>
            <div className="hidden md:block bg-white rounded-2xl shadow-card overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-brand-navy text-white">
                    <th className="text-left py-4 px-6 font-semibold">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold">Weekly</th>
                    <th className="text-center py-4 px-6 font-semibold bg-brand-blue">Monthly</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map(({ label, weekly, monthly }, i) => (
                    <tr key={label} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="py-4 px-6 text-sm text-brand-navy font-medium">{label}</td>
                      <td className="py-4 px-6 text-center">
                        {typeof weekly === 'boolean' ? (
                          weekly
                            ? <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            : <svg className="w-5 h-5 text-slate-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        ) : <span className="text-sm font-semibold text-slate-600">{weekly}</span>}
                      </td>
                      <td className="py-4 px-6 text-center bg-blue-50">
                        {typeof monthly === 'boolean' ? (
                          monthly
                            ? <svg className="w-5 h-5 text-brand-blue mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            : <svg className="w-5 h-5 text-slate-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        ) : <span className="text-sm font-bold text-brand-blue">{monthly}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-12">
            <h2 className="section-heading">Common questions.</h2>
          </FadeSection>
          <FadeSection className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group bg-[#F8FAFC] rounded-2xl border border-slate-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-semibold text-brand-navy hover:text-brand-blue transition-colors duration-200">
                  <span>{q}</span>
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300 flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-200 pt-4">{a}</div>
              </details>
            ))}
          </FadeSection>
        </div>
      </section>

      <WaveDivider fill="#2563EB" />

      {/* ── CTA ── */}
      <section className="bg-brand-blue-dark py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Start your subscription today.</h2>
          <p className="text-blue-200 text-lg mb-10">No contracts. No deposits. Just clean water, delivered.</p>
          <Link to="/contact" className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-brand-blue font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  )
}
