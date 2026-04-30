import { useIntersection } from '../../hooks/useIntersection'

export default function ImpactCard({ metric, unit, label, sub, icon }) {
  const [ref, visible] = useIntersection()

  return (
    <div
      ref={ref}
      className={`glass-card p-8 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <div className="font-display text-5xl font-bold text-white mb-1">{metric}</div>
      <div className="text-brand-blue-light font-semibold text-sm uppercase tracking-wider mb-3">{unit}</div>
      <div className="text-blue-100 font-medium mb-2">{label}</div>
      <p className="text-blue-200/70 text-xs leading-relaxed">{sub}</p>
    </div>
  )
}
