import { useEffect } from 'react'

/**
 * スクロールで .reveal 要素を順次フェードインさせる。
 * dep（通常は location.pathname）が変わるたびに再監視する。
 */
export function useReveal(dep?: unknown) {
  useEffect(() => {
    // JS有効を示すフラグ（CSS側は html.js のときだけ初期非表示にする＝no-JSでも閲覧可）
    document.documentElement.classList.add('js')

    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)'))
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [dep])
}
