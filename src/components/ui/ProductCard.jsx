const WA_NUMBER = '27000000000'

export default function ProductCard({ product }) {
  const { label, price, description, popular, donationNote } = product
  const msg = encodeURIComponent(`Hi SIP! I'd like to order a ${label}. Please let me know delivery details.`)
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${msg}`

  return (
    <div className={`relative bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 p-8 flex flex-col ${popular ? 'ring-2 ring-brand-blue' : ''}`}>
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white text-xs font-semibold px-4 py-1 rounded-full">
          Most Popular
        </span>
      )}
      <div className="w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-full mb-3" />
      <h3 className="font-display text-xl font-bold text-brand-navy mb-1">{label}</h3>
      <p className="text-3xl font-display font-bold text-brand-blue mb-3">{price}</p>
      <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{description}</p>
      <div className="flex items-center gap-2 mb-6 text-xs text-brand-blue font-medium">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        {donationNote}
      </div>
      <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">
        Order Now
      </a>
    </div>
  )
}
