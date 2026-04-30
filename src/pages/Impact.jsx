import { Link } from 'react-router-dom'
import WaveDivider from '../components/ui/WaveDivider'
import ImpactCard from '../components/ui/ImpactCard'
import { impactMetrics, donationBreakdown, partners } from '../data/impact'
import { useIntersection } from '../hooks/useIntersection'
import communityImg from '../assets/Community.jpg'
import cleanWaterImg from '../assets/CleanWater.jpg'

function FadeSection({ children, className = '' }) {
  const [ref, visible] = useIntersection()
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      {children}
    </div>
  )
}

export default function Impact() {
  const waUrl = `https://wa.me/27000000000?text=${encodeURIComponent('Hi SIP! I would like to place an order and support clean water access.')}`

  return (
    <div className="overflow-x-hidden">

      {/* ── SECTION 1: EMOTIONAL HERO ── */}
      <section className="relative min-h-screen bg-gradient-impact flex items-center overflow-hidden pt-20">
        {/* Radial water ripples */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-brand-blue/10 animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-brand-blue/15" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-brand-blue/20" />
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-brand-navy/50 to-transparent" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-10">
            <span className="text-2xl">💧</span>
            <span className="text-sm font-medium text-blue-200">SIP Community Impact</span>
          </div>
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-6">
            Every Drop<br />
            <span className="text-brand-blue">Counts.</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 font-light leading-relaxed max-w-3xl mx-auto mb-6">
            Clean water is not a luxury.
          </p>
          <p className="text-lg text-blue-300/70 leading-relaxed max-w-2xl mx-auto">
            It is a right. And for millions of South Africans, it remains out of reach.
            SIP is changing that — one delivery at a time.
          </p>

          {/* Scroll indicator */}
          <div className="mt-16 flex justify-center">
            <div className="flex flex-col items-center gap-2 text-blue-400/50 animate-bounce">
              <span className="text-xs tracking-widest uppercase">Scroll to learn more</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

      </section>

      {/* ── SECTION 2: THE PROBLEM ── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeSection>
              <div className="relative">
                <img
                  src={communityImg}
                  alt="Child collecting water in a South African township"
                  className="rounded-3xl shadow-2xl w-full object-cover max-h-[520px]"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-sm font-medium italic opacity-90">
                    "Every morning, a 3km walk just to reach unsafe water."
                  </p>
                </div>
              </div>
            </FadeSection>

            <FadeSection>
              <span className="inline-block text-red-500 text-sm font-semibold uppercase tracking-wider mb-4">The Reality</span>
              <h2 className="section-heading mb-6">
                1.8 Billion people lack access to clean drinking water.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5 text-lg">
                In South Africa, millions — including children — still walk long distances to collect
                water from unsafe sources. Contaminated water causes disease, missed school days,
                and economic hardship that compounds generational poverty.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                While cities and suburbs enjoy piped water, townships and informal settlements are
                left behind. This is not a distant global crisis — it is happening in our communities,
                in our cities, right now.
              </p>
              <div className="p-6 bg-red-50 border-l-4 border-red-400 rounded-r-xl">
                <p className="text-red-700 font-semibold text-sm">
                  In South Africa alone, 3.4 million households lack access to clean piped water.
                </p>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      <WaveDivider fill="#EFF6FF" />

      {/* ── SECTION 3: THE SIP MODEL ── */}
      <section className="bg-brand-blue-pale py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-16">
            <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-wider mb-4">How It Works</span>
            <h2 className="section-heading mb-4">The SIP Model</h2>
            <p className="section-sub mx-auto">Every purchase creates a ripple. Here is how your order changes lives.</p>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { step: 'You Order', icon: '📱', desc: 'Place an order for yourself — 20L, 10L, or 500ml pack.', color: 'bg-white' },
              { step: 'We Donate', icon: '💙', desc: 'SIP allocates 10% of each order as clean water for communities in need.', color: 'bg-brand-blue text-white' },
              { step: 'They Receive', icon: '🤲', desc: 'Through verified NGO partners, clean water reaches families who need it most.', color: 'bg-white' },
            ].map(({ step, icon, desc, color }, i) => (
              <FadeSection key={step}>
                <div className={`${color} rounded-2xl p-8 text-center shadow-card relative`}>
                  {i === 1 && (
                    <>
                      <div className="hidden md:block absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-brand-blue-pale rotate-45" />
                      <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-brand-blue-pale rotate-45" />
                    </>
                  )}
                  <div className="text-4xl mb-4">{icon}</div>
                  <h3 className={`font-display text-xl font-bold mb-3 ${color.includes('blue') ? 'text-white' : 'text-brand-navy'}`}>{step}</h3>
                  <p className={`text-sm leading-relaxed ${color.includes('blue') ? 'text-blue-200' : 'text-slate-500'}`}>{desc}</p>
                  {i < 2 && (
                    <div className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 items-center">
                      <svg className="w-10 h-5 text-brand-blue" fill="none" viewBox="0 0 40 20">
                        <path d="M0 10 H35 M28 3 L35 10 L28 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                  )}
                </div>
              </FadeSection>
            ))}
          </div>

          {/* Callout box */}
          <FadeSection>
            <div className="max-w-2xl mx-auto bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-2xl p-8 text-center text-white shadow-xl">
              <p className="font-display text-2xl font-bold mb-2">Every 20L order = 2L donated</p>
              <p className="text-blue-200 text-sm">to a family in an underserved community</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <div className="glass-card px-4 py-2">10L order → 1L donated</div>
                <div className="glass-card px-4 py-2">500ml pack → 500ml donated</div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      <WaveDivider fill="#0F172A" />

      {/* ── SECTION 4: IMPACT METRICS ── */}
      <section className="bg-brand-navy py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-16">
            <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-wider mb-4">The Numbers</span>
            <h2 className="section-heading-white mb-4">Real impact. Real numbers.</h2>
            <p className="section-sub-white mx-auto">These are not projections. This is what your orders have already made possible.</p>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactMetrics.map((metric) => (
              <ImpactCard key={metric.label} {...metric} />
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fill="#ffffff" flip />

      {/* ── SECTION 5: COMMUNITY STORY ── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-16">
            <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-wider mb-4">Community Stories</span>
            <h2 className="section-heading">The face of change.</h2>
          </FadeSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeSection>
              <div className="relative">
                <img
                  src={cleanWaterImg}
                  alt="Young girl with clean water access — SIP community impact"
                  className="rounded-3xl shadow-2xl w-full object-cover max-h-[560px]"
                />
                <div className="absolute -bottom-6 -right-6 bg-brand-blue-dark p-5 rounded-2xl max-w-[200px] shadow-xl hidden lg:block">
                  <p className="text-white font-display text-2xl font-bold">💙</p>
                  <p className="text-blue-100 text-xs mt-1">Clean water delivered</p>
                  <p className="text-white font-bold text-sm">to her village</p>
                </div>
              </div>
            </FadeSection>

            <FadeSection>
              <div className="space-y-6">
                <h3 className="font-display text-3xl font-bold text-brand-navy">
                  "Now I don't worry about whether the water is safe."
                </h3>
                <blockquote className="text-2xl italic text-brand-blue font-light leading-relaxed border-l-4 border-brand-blue pl-6">
                  "Before SIP reached us, we would fill bottles from a standpipe three streets away. Sometimes the water was brown. We boiled it, but children still got sick."
                </blockquote>
                <p className="text-slate-600 leading-relaxed">
                  The Masondo family in Limpopo — a mother of four — now receives two 20L bottles of clean SIP water monthly through our NGO partner. Her youngest daughter, who spent weeks in hospital due to waterborne illness last year, has not been sick since.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Stories like this are why every order matters. When you order from SIP, you are not just hydrating your household — you are funding access for someone who has none.
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-brand-navy font-semibold">Nomsa Masondo</p>
                  <p className="text-slate-400 text-sm">Mother of 4 · Limpopo</p>
                </div>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      <WaveDivider fill="#F8FAFC" />

      {/* ── SECTION 6: CONTRIBUTION BREAKDOWN ── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-12">
            <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-wider mb-4">The Breakdown</span>
            <h2 className="section-heading mb-4">What your order gives.</h2>
            <p className="section-sub mx-auto">Every product donates 10% of its water volume to communities in need.</p>
          </FadeSection>

          <FadeSection className="bg-white rounded-2xl shadow-card overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-brand-navy text-white">
                  <th className="text-left py-4 px-6 font-semibold text-sm">Product</th>
                  <th className="text-center py-4 px-6 font-semibold text-sm">Price</th>
                  <th className="text-center py-4 px-6 font-semibold text-sm">Donation</th>
                  <th className="text-center py-4 px-6 font-semibold text-sm">Impact</th>
                </tr>
              </thead>
              <tbody>
                {donationBreakdown.map(({ product, price, donation, ratio }, i) => (
                  <tr key={product} className={`${i % 2 === 0 ? 'bg-slate-50' : 'bg-white'} border-b border-slate-100 last:border-0`}>
                    <td className="py-5 px-6 font-semibold text-brand-navy text-sm">{product}</td>
                    <td className="py-5 px-6 text-center text-brand-blue font-bold">{price}</td>
                    <td className="py-5 px-6 text-center">
                      <span className="inline-block bg-brand-blue-pale text-brand-blue text-xs font-semibold px-3 py-1 rounded-full">
                        💧 {donation}
                      </span>
                    </td>
                    <td className="py-5 px-6 text-center text-slate-500 text-sm">{ratio} of volume</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FadeSection>
        </div>
      </section>

      <WaveDivider fill="#ffffff" />

      {/* ── SECTION 7: PARTNERS ── */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-12">
            <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-wider mb-4">Our Partners</span>
            <h2 className="section-heading mb-4">Verified impact partners.</h2>
            <p className="section-sub mx-auto">
              We work with trusted local organisations to ensure water reaches those who need it most.
              Every litre donated is tracked and verified.
            </p>
          </FadeSection>

          <FadeSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {partners.map(({ name, type }) => (
                <div key={name} className="border border-slate-200 rounded-2xl p-6 text-center hover:border-brand-blue hover:bg-brand-blue-pale transition-all duration-300">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="font-semibold text-brand-navy text-sm">{name}</p>
                  <p className="text-xs text-slate-400 mt-1">{type}</p>
                </div>
              ))}
            </div>
          </FadeSection>

          <FadeSection className="mt-10 text-center">
            <p className="text-slate-400 text-sm italic">
              Partner logos displayed upon confirmation of partnership. Verified NGO documentation available on request.
            </p>
          </FadeSection>
        </div>
      </section>

      <WaveDivider fill="#0F172A" />

      {/* ── SECTION 8: FINAL CTA ── */}
      <section className="bg-gradient-impact py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-blue/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeSection>
            <p className="text-brand-blue text-sm font-semibold uppercase tracking-wider mb-6">Make a difference</p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Order Water.<br />
              <span className="text-brand-blue">Change Lives.</span>
            </h2>
            <p className="text-blue-200 text-xl leading-relaxed max-w-2xl mx-auto mb-12">
              Join thousands of South African households who are staying hydrated and
              funding clean water access — one refill at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-10 py-4">
                Order Water Now
              </a>
              <Link to="/how-it-works" className="btn-outline-white text-base px-10 py-4">
                Learn More
              </Link>
            </div>
            <p className="text-blue-300/50 text-xs mt-8">
              Every order. Every litre. Every family. It all starts with you.
            </p>
          </FadeSection>
        </div>
      </section>
    </div>
  )
}
