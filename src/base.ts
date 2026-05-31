// サブパス公開（例: <user>.github.io/nakazawa-tekkojo/）対応。
// Vite の base（import.meta.env.BASE_URL）を内部URL・アセットパスに前置する。
const BASE = import.meta.env.BASE_URL || '/'

/** 内部パス（"/about/" や "/photos/x.jpg"）に base を前置する。
 *  外部URL・tel:・mailto:・ページ内アンカー(#) はそのまま返す。 */
export function withBase(path: string): string {
  if (!path) return path
  if (/^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(path)) return path
  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE
  return base + (path.startsWith('/') ? path : '/' + path)
}
