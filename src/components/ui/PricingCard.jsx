const WA_NUMBER = '27000000000'

export default function PricingCard({ plan }) {
  const { name, size, price, perUnit, frequency, recommended, badge, features } = plan
  const msg = encodeURIComponent(`Hi SIP! I'd like to subscribe to the ${name} plan. Please send me more details.`)
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${msg}`

  return (
    <div className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1
      ${recommended
        ? 'bg-gradient-to-b from-brand-blue to-brand-blue-dark text-white shadow-xl ring-2 ring-brand-blue ring-offset-2'
        : 'bg-white text-brand-navy shadow-card hover:shadow-card-hover'}`}>
      {(recommended || badge) && (
        <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full
          ${recommended ? 'bg-white text-brand-blue' : 'bg-brand-blue text-white'}`}>
          {badge || 'Recommended'}
        </span>
      )}
      <div className="mb-6">
        <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${recommended ? 'text-blue-200' : 'text-brand-blue'}`}>
          {size}
        </p>
        <h3 className={`font-display text-xl font-bold mb-1 ${recommended ? 'text-white' : 'text-brand-navy'}`}>{name}</h3>
        <div className="flex items-end gap-1 mt-2">
          <span className={`font-display text-4xl font-bold ${recommended ? 'text-white' : 'text-brand-navy'}`}>{price}</span>
          <span className={`text-sm mb-1 ${recommended ? 'text-blue-200' : 'text-slate-400'}`}>/month</span>
        </div>
        <p className={`text-xs mt-1 ${recommended ? 'text-blue-200' : 'text-slate-400'}`}>{perUnit} · {frequency}</p>
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${recommended ? 'text-blue-200' : 'text-brand-blue'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className={recommended ? 'text-blue-100' : 'text-slate-600'}>{f}</span>
          </li>
        ))}
      </ul>
      <a href={waUrl} target="_blank" rel="noopener noreferrer"
        className={`w-full text-center py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105
          ${recommended
            ? 'bg-white text-brand-blue hover:bg-blue-50'
            : 'bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white shadow-md hover:shadow-lg'}`}>
        Get Started
      </a>
    </div>
  )
}
