// 旧サイト（nakazawa-tekkojo.jp）から抽出した実コンテンツ
import { config } from '../config'

export const company = {
  name: '有限会社 中澤鉄工所',
  nameEn: 'NAKAZAWA TEKKOJO CO., LTD.',
  founded: '昭和42年（1967年）',
  foundedYear: 1967,
  capital: '900万円',
  employees: '17名',
  rep: '中澤 慰徳',
  zip: '954-0001',
  address: '新潟県見附市葛巻2丁目5番5号',
  area: '見附市・長岡市を中心に新潟県内',
  tel: '0258-62-3779',
  fax: '0258-63-2437',
  hours: '8:00 – 17:00',
  philosophy: '継続は力　技術は日々磨かれる',
  mission: '金属切削の技術と価値を高め、日本のもの作りに貢献する',
  values: ['凡事徹底', '自己成長', '相利共生'],
  mottos: ['出来ないというより、先にやってみよう', '生涯初心の気持ちを忘れず'],
}

export const nav = [
  { label: '中澤鉄工所とは', href: '/about/' },
  { label: '会社概要', href: '/company/' },
  { label: '事業案内', href: '/service/' },
  { label: '設備紹介', href: '/facilities/' },
  { label: '製品紹介', href: '/products/' },
  { label: '採用情報', href: '/recruit/' },
]

export const strengths = [
  { no: '01', title: 'NC旋盤・マシニングセンタによる高品位加工', body: 'NC旋盤（複合機含む）8台、マシニングセンタ5台を駆使し、高精度・高品位な切削加工をご提供します。' },
  { no: '02', title: '設備力で短納期に対応', body: '充実した設備と多台持ちの体制で、量産から飛び込みの短納期案件まで柔軟に対応します。' },
  { no: '03', title: '一点物も匠の技で', body: '汎用機を巧みに扱い、図面一枚・一点物の難加工も、現場の熟練が丁寧に仕上げます。' },
  { no: '04', title: '異形物は治具立てで', body: '鋳物・異形物は蓄積したノウハウと治具立てで、材種を問わず加工します。' },
]

// 設備紹介（カテゴリ別）
export const facilityGroups = [
  {
    key: 'machining',
    name: 'マシニングセンタ',
    en: 'Machining Center',
    count: '5台',
    photo: '/photos/machine.jpg',
    body: '立形・横形のマシニングセンタで、複雑形状や多面加工に対応。令和6年には MAZAK VCN-600 を導入し、生産能力を強化しています。',
    machines: ['MAZAK VCN-600', 'MAZAK VCN シリーズ', '立形マシニングセンタ 他'],
  },
  {
    key: 'nclathe',
    name: 'NC旋盤・複合機',
    en: 'NC Lathe',
    count: '8台',
    photo: '/photos/lathe-hero.jpg',
    body: '複合加工機を含む8台のNC旋盤で、丸物・軸物の高精度加工を実現。ミーリング機能付き複合機で工程集約にも対応します。',
    machines: ['TAKISAWA NC旋盤', '複合加工機（ミーリング付）', 'NC旋盤 各種'],
  },
  {
    key: 'other',
    name: '汎用旋盤・フライス・ボール盤',
    en: 'General Purpose',
    count: '',
    photo: '/photos/other-machine.jpg',
    body: '汎用機を巧みに扱う熟練の手仕事で、一点物・試作・修理対応まで。NCでは拾いきれない領域を匠の技が支えます。',
    machines: ['汎用旋盤', '汎用フライス盤', 'ボール盤 他'],
  },
]

// 協力工場ネットワーク（二次加工）
export const network = [
  { label: '熱処理', items: '焼き入れ・浸炭' },
  { label: '表面処理', items: '鍍金・黒染め・アルマイト・コーティング・溶射' },
  { label: '研磨', items: '平面研削・円筒研削・内径研削・ラッピング' },
  { label: '二次加工', items: '歯切り・スプライン・スロッター' },
  { label: '板金・プレス', items: 'レーザー加工・パンチング・鍛造・鋳造' },
]

// 沿革
export const history = [
  { year: '昭和42年 9月', text: '繊維機械修理業として創業（初代 中澤 長雄）' },
  { year: '昭和60年 6月', text: 'NC旋盤を導入し、切削加工へ本格進出' },
  { year: '昭和61年 4月', text: '有限会社中澤鉄工所に組織変更' },
  { year: '平成元年 以降', text: '複数のNC機を順次導入し設備を拡充' },
  { year: '平成18年 9月', text: '現在の新社屋へ移転' },
  { year: '平成26年 10月', text: '代表取締役を交代（中澤 慰徳）' },
  { year: '令和6年 3月', text: 'マシニングセンタ MAZAK VCN-600 を導入' },
]

// 主要取引先
export const clients = ['株式会社ニクニアサヒ', '株式会社オーエム製作所', '株式会社太陽工機']

// 会社概要テーブル
export const companyTable: { label: string; value: string }[] = [
  { label: '社名', value: company.name },
  { label: '代表者', value: `代表取締役　${company.rep}` },
  { label: '創業', value: company.founded },
  { label: '資本金', value: company.capital },
  { label: '従業員数', value: company.employees },
  { label: '所在地', value: `〒${company.zip}　${company.address}` },
  { label: 'TEL / FAX', value: `${company.tel} / ${company.fax}` },
  { label: '営業時間', value: `${company.hours}（土日祝休 ※社内規定による）` },
  { label: '事業内容', value: '金属切削加工（NC旋盤・マシニングセンタによる精密加工、一点物〜量産）' },
  { label: '取引銀行', value: '※ 公開前に確認' },
]

// 製品ギャラリー（旧サイトは画像のみ。写真は順次差し替え）
export const products = [
  { title: '内径ボーリングバー', cat: '旋盤加工品', photo: '/photos/product.jpg' },
  { title: '軸・シャフト部品', cat: '旋盤加工品', photo: '/photos/lathe-hero.jpg' },
  { title: 'マシニング加工部品', cat: 'マシニング加工品', photo: '/photos/machine.jpg' },
  { title: '治具・異形物', cat: '治具・異形物', photo: '/photos/other-machine.jpg' },
  { title: '量産切削部品', cat: '量産品', photo: '/photos/factory2.png' },
  { title: '一点物・試作', cat: '試作・一点物', photo: '/photos/factory.jpg' },
]

// 採用
export const recruit = {
  catch: '出来ないというより、先にやってみよう。',
  lead: 'ものづくりが好きで、現場を熟知した技術者になりたい方を歓迎します。',
  detail: [
    { label: '募集職種', value: '技術職（生産技術・製品開発・工機）' },
    { label: '応募資格', value: 'ものづくりが好きで、現場を熟知した技術者を目指す方' },
    { label: '給与', value: '応相談（経験・能力を考慮し決定）' },
    { label: '勤務地', value: `本社（${company.address}）` },
    { label: '勤務時間', value: company.hours },
    { label: '休日休暇', value: '週休2日制（社内規定による）／GW・夏季・年末年始／年次有給休暇 15〜20日（初年度10日）' },
  ],
}

export const news = [
  { date: '2026.04.17', cat: 'ブログ', title: '技能検定（普通旋盤3級）への取組み' },
  { date: '2026.04.13', cat: 'お知らせ', title: '2026年 ゴールデンウイークによる休業日' },
  { date: '2026.03.31', cat: 'お知らせ', title: '2026年度 営業カレンダー' },
  { date: '2026.02.25', cat: 'ブログ', title: '社長が倫理法人会にて講話' },
  { date: '2026.02.12', cat: 'お知らせ', title: 'みつけ新聞に掲載されました' },
]

// 構造化データ（LocalBusiness）
export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MachineShop',
  name: company.name,
  alternateName: company.nameEn,
  url: config.siteUrl,
  telephone: company.tel,
  faxNumber: company.fax,
  foundingDate: '1967',
  slogan: company.philosophy,
  image: `${config.siteUrl}/photos/lathe-hero.jpg`,
  address: {
    '@type': 'PostalAddress',
    postalCode: company.zip,
    addressRegion: '新潟県',
    addressLocality: '見附市',
    streetAddress: '葛巻2-5-5',
    addressCountry: 'JP',
  },
  areaServed: ['見附市', '長岡市', '新潟県'],
  openingHours: 'Mo-Fr 08:00-17:00',
}
