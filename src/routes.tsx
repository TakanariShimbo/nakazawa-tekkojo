import type { RouteRecord } from 'vite-react-ssg'
import { Layout } from './Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Company } from './pages/Company'
import { Service } from './pages/Service'
import { Facilities } from './pages/Facilities'
import { Products } from './pages/Products'
import { Recruit } from './pages/Recruit'
import { Contact } from './pages/Contact'
import { ContactJob } from './pages/ContactJob'
import { News } from './pages/News'
import { NotFound } from './pages/NotFound'

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'company', Component: Company },
      { path: 'service', Component: Service },
      { path: 'facilities', Component: Facilities },
      { path: 'products', Component: Products },
      { path: 'recruit', Component: Recruit },
      { path: 'contact', Component: Contact },
      { path: 'contact/job', Component: ContactJob },
      { path: 'news', Component: News },
      { path: '*', Component: NotFound },
    ],
  },
]
