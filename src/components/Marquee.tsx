const KEYWORDS = [
  'NC旋盤', 'マシニングセンタ', '複合加工', '治具立て加工', '鋳物・異形物',
  'SUS304', 'S45C', 'A5052', 'SCM440', '一点物', '量産', '短納期',
  '内径ボーリング', '高品位仕上げ', 'MAZAK VCN-600',
]

export function Marquee() {
  // 2連結でシームレスループ（translateX -50%）
  const items = [...KEYWORDS, ...KEYWORDS]
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__track">
        {items.map((k, i) => (
          <span key={i}>{k}</span>
        ))}
      </div>
    </div>
  )
}
