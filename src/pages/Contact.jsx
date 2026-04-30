import { useState } from 'react'
import WaveDivider from '../components/ui/WaveDivider'
import { useIntersection } from '../hooks/useIntersection'
import { deliveryAreas } from '../data/impact'

const WA_NUMBER = '27000000000'
const waDirectUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi SIP! I would like to place an order.')}`

function FadeSection({ children, className = '' }) {
  const [ref, visible] = useIntersection()
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      {children}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '', phone: '', address: '', size: '', frequency: '', notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const msg = `Hi SIP by Yanelo! 👋 I'd like to place an order:

🧑 Name: ${form.name}
📞 Phone: ${form.phone}
📍 Address: ${form.address}
💧 Bottle Size: ${form.size}
📅 Frequency: ${form.frequency}${form.notes ? `\n📝 Notes: ${form.notes}` : ''}

Please confirm my order. Thank you!`
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
    setSubmitted(true)
  }

  return (
    <div className="overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="bg-gradient-hero pt-32 pb-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-16">
          <span className="inline-block text-blue-300 text-sm font-semibold uppercase tracking-wider mb-5">Order Water</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Order Water.<br />
            <span className="text-brand-blue">It's that simple.</span>
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Fill in the form below or message us directly on WhatsApp. We confirm every order personally.
          </p>
          <a href={waDirectUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4 inline-flex">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
        <WaveDivider fill="#F8FAFC" />
      </section>

      {/* ── FORM ── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection>
            {!submitted ? (
              <div className="bg-white rounded-3xl shadow-card p-8 md:p-12">
                <h2 className="section-heading mb-2 text-center">Place Your Order</h2>
                <p className="text-center section-sub mb-10">We will confirm and deliver within hours.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">Full Name *</label>
                      <input
                        type="text" name="name" required value={form.name} onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-brand-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">Phone Number *</label>
                      <input
                        type="tel" name="phone" required value={form.phone} onChange={handleChange}
                        placeholder="+27 00 000 0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-brand-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">Delivery Address *</label>
                    <input
                      type="text" name="address" required value={form.address} onChange={handleChange}
                      placeholder="Street address, suburb, city"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-brand-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">Bottle Size *</label>
                      <select
                        name="size" required value={form.size} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Select size</option>
                        <option value="20L Refill (R2.00)">20L Refill — R2.00</option>
                        <option value="10L Refill (R1.20)">10L Refill — R1.20</option>
                        <option value="500ml Pack (R5.00)">500ml Pack — R5.00</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">Order Frequency *</label>
                      <select
                        name="frequency" required value={form.frequency} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Select frequency</option>
                        <option value="Once-off order">Once-off order</option>
                        <option value="Weekly subscription">Weekly subscription</option>
                        <option value="Monthly subscription">Monthly subscription</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">Additional Notes</label>
                    <textarea
                      name="notes" rows={3} value={form.notes} onChange={handleChange}
                      placeholder="e.g. delivery time preference, gate code, quantity..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-brand-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full text-base py-4">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white flex-shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Send Order via WhatsApp
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-3">
                    Clicking submit opens WhatsApp with your order details pre-filled.
                  </p>
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-3xl shadow-card p-12 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-navy mb-3">WhatsApp opened!</h3>
                <p className="text-slate-500 text-sm mb-8">Your order details are pre-filled. Just hit send and we will confirm your delivery shortly.</p>
                <button onClick={() => setSubmitted(false)} className="btn-outline text-sm px-6 py-2.5">
                  Place Another Order
                </button>
              </div>
            )}
          </FadeSection>
        </div>
      </section>

      {/* ── DELIVERY AREAS ── */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-12">
            <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-wider mb-4">Coverage</span>
            <h2 className="section-heading mb-3">Delivery Areas</h2>
            <p className="section-sub mx-auto">We're currently serving these communities — and growing fast.</p>
          </FadeSection>

          <FadeSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliveryAreas.map(({ area, days, eta }) => (
                <div key={area} className="bg-brand-blue-pale rounded-2xl p-6 text-center">
                  <div className="w-10 h-10 bg-brand-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <h4 className="font-display font-bold text-brand-navy mb-2">{area}</h4>
                  <p className="text-xs text-slate-500 mb-1">{days}</p>
                  <p className="text-xs font-medium text-brand-blue">{eta}</p>
                </div>
              ))}
            </div>
          </FadeSection>

          <FadeSection className="mt-10 text-center">
            <p className="text-slate-500 text-sm">
              Don't see your area?{' '}
              <a href={waDirectUrl} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline font-medium">
                Contact us on WhatsApp
              </a>{' '}
              — we are expanding every month.
            </p>
          </FadeSection>
        </div>
      </section>
    </div>
  )
}
