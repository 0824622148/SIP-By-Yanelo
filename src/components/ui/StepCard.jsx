export default function StepCard({ step, title, description, children }) {
  return (
    <div className="flex flex-col items-center text-center relative">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-blue to-brand-blue-dark flex items-center justify-center text-white font-display font-bold text-xl mb-6 shadow-lg flex-shrink-0">
        {step}
      </div>
      {children && (
        <div className="w-32 h-32 mb-6 rounded-2xl overflow-hidden shadow-card">
          {children}
        </div>
      )}
      <h3 className="font-display text-xl font-bold text-brand-navy mb-3">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{description}</p>
    </div>
  )
}
