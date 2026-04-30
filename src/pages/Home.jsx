import { Link } from 'react-router-dom'
import WaveDivider from '../components/ui/WaveDivider'
import ProductCard from '../components/ui/ProductCard'
import { products } from '../data/products'
import { useIntersection } from '../hooks/useIntersection'
import guyWithBottle from '../assets/GuyWithBottle.png'
import bottlesImg from '../assets/Bottles.png'

const WA_NUMBER = '27000000000'

const trustStats = [
  { value: '10,000+', label: 'Deliveries Made' },
  { value: '4.9', label: '★ Customer Rating' },
  { value: '20+', label: 'Areas Served' },
  { value: '100%', label: 'Pure & Safe' },
]

function FadeSection({ children, className = '', style }) {
  const [ref, visible] = useIntersection()
  return (
    <div ref={ref} style={style} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      {children}
    </div>
  )
}

export default function Home() {
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi SIP! I would like to place an order.')}`

  return (
    <div className="overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-gradient-hero flex items-center pt-20 pb-0 overflow-hidden">
        {/* Background radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-brand-blue/10 rounded-full blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Text */}
            <div className="text-white pt-8 lg:pt-0">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-blue-100">Now delivering in your area</span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
                Clean Water,<br />
                <span className="text-brand-blue">Delivered</span><br />
                to Your Door.
              </h1>
              <p className="text-lg text-blue-200 leading-relaxed mb-10 max-w-lg">
                Safe, pure water on demand. Order once or subscribe — we handle the rest.
                And every refill helps a family in need access clean water too.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
                  Order on WhatsApp
                </a>
                <Link to="/how-it-works" className="btn-outline-white text-base px-8 py-4">
                  How It Works
                </Link>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-blue/30 rounded-3xl blur-2xl transform scale-90 translate-y-4" />
                <img
                  src={guyWithBottle}
                  alt="SIP delivery"
                  className="relative rounded-3xl shadow-2xl max-h-[560px] w-auto object-cover"
                />
                {/* Floating card */}
                <div className="absolute -bottom-4 -left-4 glass-card px-5 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Order confirmed</p>
                    <p className="text-blue-200 text-xs">Delivery in 2–4 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-[#F8FAFC] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustStats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-display text-3xl font-bold text-brand-navy mb-1">{value}</div>
                <div className="text-sm text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fill="#ffffff" flip />

      {/* ── PRODUCTS ── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-6">
            <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-wider mb-4">What We Deliver</span>
            <h2 className="section-heading">Pure water, three ways.</h2>
          </FadeSection>
          <FadeSection className="text-center mb-8">
            <p className="section-sub mx-auto">Choose the size that fits your household. Every order includes door-to-door delivery and a community donation.</p>
          </FadeSection>

          {/* Bottles image */}
          <FadeSection className="flex justify-center mb-12">
            <img src={bottlesImg} alt="SIP water bottles — 500ml, 10L and 20L" className="max-w-lg w-full rounded-2xl shadow-card" />
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <FadeSection key={p.id} style={{ transitionDelay: `${i * 100}ms` }}>
                <ProductCard product={p} />
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fill="#0F172A" />

      {/* ── SUBSCRIPTION TEASER ── */}
      <section className="bg-brand-navy py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeSection>
              <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-wider mb-4">Subscriptions</span>
              <h2 className="section-heading-white mb-6">Never run dry.<br />Subscribe and save.</h2>
              <p className="section-sub-white mb-8">
                Set it and forget it. Choose weekly or monthly delivery and save up to 15% vs single orders.
                Your water is always there when you need it.
              </p>
              <Link to="/plans" className="btn-primary text-base px-8 py-4">
                See All Plans
              </Link>
            </FadeSection>
            <FadeSection>
              <ul className="space-y-5">
                {[
                  { icon: '🚚', title: 'Scheduled Delivery', desc: 'Pick your preferred days — we deliver on time, every time.' },
                  { icon: '♻️', title: 'Free Bottle Exchange', desc: 'Return your empty bottles, get fresh ones. Zero waste.' },
                  { icon: '💧', title: 'Donation Included', desc: 'Every subscription delivery includes a community water donation.' },
                  { icon: '📱', title: 'Manage via WhatsApp', desc: 'Pause, reschedule or cancel anytime — no hassle.' },
                ].map(({ icon, title, desc }) => (
                  <li key={title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-blue/20 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{title}</h4>
                      <p className="text-blue-200/70 text-sm">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeSection>
          </div>
        </div>
      </section>

      <WaveDivider fill="#EFF6FF" flip />

      {/* ── IMPACT CALLOUT ── */}
      <section className="bg-brand-blue-pale py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeSection>
            <p className="text-brand-blue font-semibold text-sm uppercase tracking-wider mb-4">Making a Difference</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-brand-navy mb-4">
              12,000 <span className="text-brand-blue">Litres</span> Donated.
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Every order you place contributes clean water to underserved communities across South Africa.
              Order for yourself, give for others.
            </p>
            <Link to="/impact" className="btn-primary text-base px-8 py-4">
              Learn About Our Impact
            </Link>
          </FadeSection>
        </div>
      </section>
    </div>
  )
}
