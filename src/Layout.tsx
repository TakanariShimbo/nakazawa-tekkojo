import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useReveal } from './useReveal'

export function Layout() {
  const { pathname } = useLocation()
  // ルート遷移ごとに .reveal を再監視
  useReveal(pathname)
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  )
}
