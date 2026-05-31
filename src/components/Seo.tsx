import { Head } from 'vite-react-ssg'
import { config } from '../config'

type Props = {
  title: string
  description: string
  path: string // 先頭 '/' 付きのパス
  ogImage?: string
  jsonLd?: object
}

const SUFFIX = '有限会社 中澤鉄工所'

export function Seo({ title, description, path, ogImage = '/photos/lathe-hero.jpg', jsonLd }: Props) {
  const fullTitle = path === '/' ? title : `${title} | ${SUFFIX}`
  const url = config.siteUrl + path
  const img = config.siteUrl + ogImage
  return (
    <Head>
      <html lang="ja" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SUFFIX} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content="summary_large_image" />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Head>
  )
}
