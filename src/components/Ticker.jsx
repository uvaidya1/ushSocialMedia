const items = [
  '1.9M VIEWS', '@LIFEOFUSH', '157K LIKES', 'NYC FOOD',
  '17K SHARES', 'SOUTH ASIAN CULTURE', '796 FOLLOWERS', 'WORKDAY CONSULTANT',
  '9.2% ENGAGEMENT', '@LIFEOFUSHH', '75% FROM FYP', 'CONTENT STRATEGY',
]

export default function Ticker() {
  const doubled = [...items, ...items]

  return (
    <div className="bg-crimson-400 text-white py-3.5 overflow-hidden select-none">
      <div className="flex gap-0 whitespace-nowrap animate-ticker" style={{ width: 'max-content' }}>
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="text-xs font-semibold tracking-[0.15em] px-6">{item}</span>
            <span className="text-crimson-200 text-xs">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
