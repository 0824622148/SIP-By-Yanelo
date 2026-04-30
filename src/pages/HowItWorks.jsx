import { Link } from 'react-router-dom'
import WaveDivider from '../components/ui/WaveDivider'
import StepCard from '../components/ui/StepCard'
import { useIntersection } from '../hooks/useIntersection'
import boxImg from '../assets/Box.png'
import guyWithBottle from '../assets/GuyWithBottle.png'

function FadeSection({ children, className = '' }) {
  const [ref, visible] = useIntersection()
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      {children}
    </div>
  )
}

const faqs = [
  {
    q: 'Which areas do you deliver to?',
    a: 'We currently deliver to Soweto, Alexandra, Tembisa, and Khayelitsha. We are expanding rapidly — contact us to check if your area is covered.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Standard delivery takes 2–5 hours depending on your area. Same-day delivery is available if you order before 12:00 PM.',
  },
  {
    q: 'What if I am not home when you deliver?',
    a: 'No problem — just let us know a safe spot to leave your water, or we will reschedule at no extra cost.',
  },
  {
    q: 'How does the bottle exchange work?',
    a: 'Leave your empty SIP bottle at the door. Our driver collects it and delivers a fresh one. It is completely free and reduces plastic waste.',
  },
  {
    q: 'Can I cancel or pause my subscription?',
    a: 'Yes, anytime. Just send us a WhatsApp message and we will pause or cancel your subscription with no questions asked.',
  },
]

export default function HowItWorks() {
  return (
    <div className="overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="bg-gradient-hero pt-32 pb-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-16">
          <span className="inline-block text-blue-300 text-sm font-semibold uppercase tracking-wider mb-5">The Process</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Simple, Reliable,<br /><span className="text-brand-blue">Delivered.</span>
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto">
            Getting clean water delivered to your door takes just three steps.
            No complicated setup, no waiting — just fresh water when you need it.
          </p>
        </div>
        <WaveDivider fill="#ffffff" />
      </section>

      {/* ── 3 STEPS ── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Connecting dashed line (desktop) */}
            <div className="hidden md:block absolute top-8 left-[calc(33.33%+2rem)] right-[calc(33.33%+2rem)] h-0.5 border-t-2 border-dashed border-brand-blue-light" />

            <FadeSection>
              <StepCard
                step={1}
                title="Place Your Order"
                description="Send us a WhatsApp message or fill in our quick order form. Tell us your size, address and preferred delivery time."
              >
                <div className="w-full h-full bg-brand-blue-pale flex items-center justify-center">
                  <svg className="w-12 h-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </StepCard>
            </FadeSection>

            <FadeSection style={{ transitionDelay: '100ms' }}>
              <StepCard
                step={2}
                title="We Deliver"
                description="Our driver picks up your order and delivers it straight to your door. You get a WhatsApp update when we're on the way."
              >
                <img src={guyWithBottle} alt="SIP delivery" className="w-full h-full object-cover" />
              </StepCard>
            </FadeSection>

            <FadeSection style={{ transitionDelay: '200ms' }}>
              <StepCard
                step={3}
                title="Refill & Repeat"
                description="Leave your empty bottle out — we collect it and deliver a fresh one. Subscribe and it happens automatically."
              >
                <img src={boxImg} alt="SIP 20L box" className="w-full h-full object-cover" />
              </StepCard>
            </FadeSection>
          </div>
        </div>
      </section>

      <WaveDivider fill="#F8FAFC" />

      {/* ── DELIVERY DETAILS ── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-16">
            <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-wider mb-4">Delivery Details</span>
            <h2 className="section-heading mb-4">Everything you need to know.</h2>
            <p className="section-sub mx-auto">Got questions? We have answered the most common ones below.</p>
          </FadeSection>

          <FadeSection className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-semibold text-brand-navy hover:text-brand-blue transition-colors duration-200">
                  <span>{q}</span>
                  <svg
                    className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300 flex-shrink-0 ml-4"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  {a}
                </div>
              </details>
            ))}
          </FadeSection>
        </div>
      </section>

      <WaveDivider fill="#2563EB" />

      {/* ── CTA BANNER ── */}
      <section className="bg-brand-blue-dark py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-blue-200 text-lg mb-10">Join thousands of households who never run out of clean water.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-brand-blue font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300">
              Order Now
            </Link>
            <Link to="/plans" className="btn-outline-white text-base px-8 py-4">
              View Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
