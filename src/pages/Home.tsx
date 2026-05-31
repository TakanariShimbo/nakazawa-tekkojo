import { Seo } from '../components/Seo'
import { Hero } from '../components/Hero'
import { Marquee } from '../components/Marquee'
import { Stats } from '../components/Stats'
import {
  Philosophy,
  Strengths,
  Facilities as FacilitiesSection,
  Network,
  ProductsRecruit,
  News as NewsSection,
  ContactCTA,
} from '../components/Sections'
import { localBusinessJsonLd } from '../data/site'

export function Home() {
  return (
    <>
      <Seo
        title="有限会社 中澤鉄工所 | 金属切削加工 ― 見附市・長岡市"
        description="新潟県見附市の金属切削加工。NC旋盤・マシニングセンタによる高精度・高品位な加工から一点物・短納期まで。継続は力、技術は日々磨かれる。"
        path="/"
        jsonLd={localBusinessJsonLd}
      />
      <Hero />
      <Marquee />
      <Philosophy />
      <Stats />
      <Strengths />
      <FacilitiesSection />
      <Network />
      <ProductsRecruit />
      <NewsSection />
      <ContactCTA />
    </>
  )
}
