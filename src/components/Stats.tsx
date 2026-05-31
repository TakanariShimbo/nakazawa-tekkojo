import { useEffect, useRef, useState } from 'react'

type Stat = { label: string; value: number; unit: string; count: boolean }

const STATS: Stat[] = [
  { label: 'Established', value: 1967, unit: '創業（昭和42年）', count: false },
  { label: 'Members', value: 17, unit: '名のチーム', count: true },
  { label: 'NC Lathe', value: 8, unit: '台（複合機含む）', count: true },
  { label: 'Machining', value: 5, unit: '台', count: true },
]

function CountValue({ stat, run }: { stat: Stat; run: boolean }) {
  const [n, setN] = useState(stat.value) // SSR/no-JS は最終値
  useEffect(() => {
    if (!stat.count) return
    if (!run) {
      setN(0)
      return
    }
    const dur = 1400
    let raf = 0
    let start = 0
    const tick = (t: number) => {
      if (!start) start = t
      const p = Math.min((t - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(stat.value * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, stat])
  return <>{n}</>
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [run, setRun] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      setRun(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="stats u-grid" ref={ref} style={{ '--grid-c': 'rgba(244,240,230,0.05)' } as React.CSSProperties}>
      <div className="container-wide">
        <div className="statsGrid">
          {STATS.map((st) => (
            <div className="statItem" key={st.label}>
              <span className="statLabel">{st.label}</span>
              <div className="statValue">
                <CountValue stat={st} run={run} />
              </div>
              <span className="statUnit">{st.unit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
