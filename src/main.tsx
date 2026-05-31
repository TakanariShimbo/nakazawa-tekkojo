import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'
import './styles/global.css'

// basename はサブパス公開（/nakazawa-tekkojo/）に合わせる。vite の base と同期。
export const createRoot = ViteReactSSG({ routes, basename: import.meta.env.BASE_URL })
