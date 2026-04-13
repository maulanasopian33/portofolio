// ============================================================
// DATA: blog-content.ts
// Konten lengkap setiap artikel blog (pengganti @nuxt/content)
// Saat @nuxt/content tersedia → pindahkan ke content/blog/*.md
// ============================================================

export interface BlogContent {
  slug: string
  content: BlogSection[]
}

export interface BlogSection {
  type: 'heading' | 'paragraph' | 'code' | 'list' | 'callout' | 'divider'
  level?: 2 | 3
  text?: string
  language?: string
  items?: string[]
  variant?: 'info' | 'warning' | 'tip'
}

export const blogContents: Record<string, BlogSection[]> = {
  'migrate-vue3-to-nuxt4': [
    {
      type: 'callout',
      variant: 'info',
      text: 'Artikel ini ditulis berdasarkan pengalaman nyata migrasi project portfolio dari Vue 3 + Vite SPA ke Nuxt 4 SSR. Estimasi waktu baca: 8 menit.',
    },
    { type: 'heading', level: 2, text: 'Kenapa Harus Migrasi ke Nuxt 4?' },
    {
      type: 'paragraph',
      text: 'Vue 3 SPA adalah pilihan yang solid untuk membangun antarmuka interaktif. Namun, ketika berbicara tentang portfolio sebagai Full Stack Developer, SEO adalah segalanya. Googlebot tidak menjalankan JavaScript dengan sempurna — artinya konten SPA Anda mungkin tidak terindeks dengan baik.'
    },
    {
      type: 'paragraph',
      text: 'Nuxt 4 dengan Server-Side Rendering (SSR) menghasilkan HTML lengkap di server sebelum dikirim ke browser. Hasilnya: Google bisa membaca setiap konten halaman Anda, Core Web Vitals meningkat drastis (terutama LCP), dan pengalaman pertama user jauh lebih cepat.'
    },
    { type: 'heading', level: 2, text: 'Perbedaan Struktur Folder' },
    {
      type: 'paragraph',
      text: 'Ini hal pertama yang bikin bingung: di Nuxt 4, semua file aplikasi klien wajib berada di dalam folder /app. Berbeda dengan Nuxt 3 yang masih menggunakan root-level folders.'
    },
    {
      type: 'code',
      language: 'bash',
      text: `# Nuxt 3 (root-level)
pages/
components/
composables/
layouts/

# Nuxt 4 (app-directory)
app/
  pages/
  components/
  composables/
  layouts/
server/  ← tetap di root
nuxt.config.ts`,
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Jangan lupa tambahkan future: { compatibilityVersion: 4 } di nuxt.config.ts untuk memastikan Nuxt berjalan dalam mode v4 yang stabil.',
    },
    { type: 'heading', level: 2, text: 'Migrasi Router: Vue Router → File-Based Routing' },
    {
      type: 'paragraph',
      text: 'Di Vue 3, kita mendefinisikan route secara manual di router/index.ts. Di Nuxt 4, routing berbasis file — setiap file .vue di folder pages/ otomatis menjadi route.',
    },
    {
      type: 'code',
      language: 'typescript',
      text: `// Sebelum: Vue Router (manual)
const routes = [
  { path: '/',        component: HomeView },
  { path: '/about',   component: AboutView },
  { path: '/projects/:id', component: ProjectDetailView },
]

// Sesudah: File-based routing (Nuxt 4)
// app/pages/index.vue          → /
// app/pages/about.vue          → /about
// app/pages/projects/[id].vue  → /projects/:id`,
    },
    { type: 'heading', level: 2, text: 'SSR Compatibility: window, document, localStorage' },
    {
      type: 'paragraph',
      text: 'Ini adalah jebakan terbesar saat migrasi. Di SSR, kode Anda dieksekusi di server (Node.js) — dan server tidak punya window, document, atau localStorage.',
    },
    {
      type: 'list',
      items: [
        'Bungkus akses DOM dengan process.client sebelum mengeksekusi',
        'Gunakan onMounted() untuk code yang butuh browser environment',
        'Gunakan <ClientOnly> wrapper untuk komponen yang tidak kompatibel SSR',
        'Gunakan useCookie() bukan localStorage untuk data yang butuh SSR',
      ],
    },
    {
      type: 'code',
      language: 'typescript',
      text: `// ❌ Salah — window tidak ada di server
const width = window.innerWidth

// ✅ Benar — SSR safe
const width = ref(0)
onMounted(() => {
  width.value = window.innerWidth
})`,
    },
    { type: 'heading', level: 2, text: 'SEO: useSeoMeta dan useHead' },
    {
      type: 'paragraph',
      text: 'Nuxt menyediakan composable useSeoMeta() yang sangat powerful. Dibanding menulis meta tag HTML secara manual, composable ini type-safe dan dioptimalkan untuk SSR.',
    },
    {
      type: 'code',
      language: 'typescript',
      text: `// app/pages/about.vue
useSeoMeta({
  title: 'Tentang Saya — Full Stack Developer',
  description: 'Kenali lebih jauh pengalaman dan keahlian saya.',
  ogImage: 'https://mysite.dev/og-image.jpg',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})`,
    },
    { type: 'heading', level: 2, text: 'Hasil Akhir: Sebelum vs Sesudah' },
    {
      type: 'list',
      items: [
        'Lighthouse SEO Score: 67 → 98',
        'LCP (Largest Contentful Paint): 3.2s → 0.9s',
        'Googlebot dapat membaca semua konten halaman',
        'Bundle size lebih kecil berkat code-splitting otomatis Nuxt',
        'Developer experience lebih baik dengan auto-imports',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Tips: Setelah migrasi, jalankan npm run build && npm run preview untuk verifikasi SSR bekerja dengan benar sebelum deploy.',
    },
  ],

  'clean-architecture-nodejs': [
    {
      type: 'callout',
      variant: 'info',
      text: 'Artikel ini menggunakan Node.js + Express sebagai contoh, namun prinsipnya berlaku untuk framework backend apapun.',
    },
    { type: 'heading', level: 2, text: 'Masalah yang Sering Terjadi' },
    {
      type: 'paragraph',
      text: 'Saya sering melihat codebase Node.js di mana seluruh logic bisnis — validasi, query database, perhitungan, pengiriman email — semuanya ada di dalam satu controller. Ini yang disebut "Fat Controller" atau "God Object" pattern.',
    },
    {
      type: 'code',
      language: 'typescript',
      text: `// ❌ Fat Controller — anti-pattern
export async function createOrder(req: Request, res: Response) {
  // Validasi input
  if (!req.body.productId) return res.status(400).json({ error: '...' })
  
  // Query database langsung dari controller
  const product = await db.query('SELECT * FROM products WHERE id = ?', [req.body.productId])
  
  // Business logic di controller
  const total = product.price * req.body.quantity
  if (total > user.credit_limit) return res.status(400).json({ error: '...' })
  
  // Insert order
  await db.query('INSERT INTO orders ...')
  
  // Kirim email langsung di sini
  await nodemailer.sendMail({ ... })
  
  res.json({ success: true })
}`,
    },
    { type: 'heading', level: 2, text: 'Solusi: Separation of Concerns' },
    {
      type: 'paragraph',
      text: 'Clean Architecture memisahkan kode menjadi beberapa layer dengan tanggung jawab yang jelas. Setiap layer hanya boleh berkomunikasi dengan layer di bawahnya.',
    },
    {
      type: 'list',
      items: [
        'Controller (Routes) — Hanya handle HTTP request/response, validasi input',
        'Service (Use Cases) — Business logic murni, tidak tahu tentang HTTP',
        'Repository (Data Access) — Hanya query database, tidak tahu tentang business rules',
        'Model — Representasi data dan struktur database',
      ],
    },
    {
      type: 'code',
      language: 'typescript',
      text: `// ✅ Repository: hanya urusan database
class OrderRepository {
  async create(data: CreateOrderDto): Promise<Order> {
    return await db.query('INSERT INTO orders ...', [data])
  }
  
  async findById(id: string): Promise<Order | null> {
    return await db.query('SELECT * FROM orders WHERE id = ?', [id])
  }
}

// ✅ Service: business logic murni
class OrderService {
  constructor(
    private readonly orderRepo: OrderRepository,
    private readonly mailService: MailService,
  ) {}

  async createOrder(dto: CreateOrderDto, userId: string): Promise<Order> {
    // Validasi bisnis
    const user = await this.userRepo.findById(userId)
    if (dto.total > user.creditLimit) {
      throw new BusinessError('Credit limit exceeded')
    }
    
    const order = await this.orderRepo.create({ ...dto, userId })
    await this.mailService.sendOrderConfirmation(order)
    return order
  }
}

// ✅ Controller: hanya HTTP concerns
export async function createOrderHandler(req: Request, res: Response) {
  try {
    const order = await orderService.createOrder(req.body, req.user.id)
    res.status(201).json(order)
  } catch (err) {
    if (err instanceof BusinessError) return res.status(400).json({ error: err.message })
    res.status(500).json({ error: 'Internal server error' })
  }
}`,
    },
    { type: 'heading', level: 2, text: 'Dependency Injection: Kunci Testability' },
    {
      type: 'paragraph',
      text: 'Dengan memisahkan dependency ke constructor, kita bisa dengan mudah meng-inject mock saat testing tanpa menyentuh database atau mengirim email sungguhan.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Gunakan library seperti tsyringe atau awilix untuk Dependency Injection Container di project Node.js yang lebih besar.',
    },
    { type: 'heading', level: 2, text: 'Struktur Folder yang Direkomendasikan' },
    {
      type: 'code',
      language: 'bash',
      text: `src/
├── routes/          # Express routes (HTTP layer)
├── controllers/     # Thin controllers
├── services/        # Business logic
├── repositories/    # Database access
├── models/          # Data structures / ORM models
├── middleware/      # Auth, validation, error handler
├── utils/           # Pure utility functions
└── types/           # TypeScript interfaces`,
    },
    { type: 'heading', level: 2, text: 'Kesimpulan' },
    {
      type: 'paragraph',
      text: 'Clean Architecture bukan tentang membuat kode yang "indah" — ini tentang membuat kode yang mudah ditest, mudah diubah, dan mudah dipahami oleh developer lain. Investasi waktu awal yang kecil ini akan menghemat jam debugging di masa depan.',
    },
  ],

  'vue-composables-best-practices': [
    {
      type: 'callout',
      variant: 'info',
      text: 'Composables adalah salah satu fitur terkuat Vue 3. Namun salah penggunaan dapat membuat state management justru lebih rumit.',
    },
    { type: 'heading', level: 2, text: 'Tiga Pilihan State Management di Vue 3' },
    {
      type: 'paragraph',
      text: 'Vue 3 memberikan kita tiga opsi utama untuk mengelola state: local composables, Pinia store, dan props/emit. Kebanyakan developer kebingungan memilih mana yang tepat untuk situasi tertentu.',
    },
    { type: 'heading', level: 2, text: 'Kapan Pakai Local Composable (useX)' },
    {
      type: 'paragraph',
      text: 'Gunakan composable lokal ketika state hanya relevan untuk satu komponen atau beberapa komponen yang closely related — dan tidak perlu diakses dari seluruh aplikasi.',
    },
    {
      type: 'code',
      language: 'typescript',
      text: `// ✅ Cocok untuk composable: logic scroll, form state lokal, timer
export function useCountdown(initialSeconds: number) {
  const seconds = ref(initialSeconds)
  const isRunning = ref(false)
  let interval: ReturnType<typeof setInterval> | null = null

  const start = () => {
    isRunning.value = true
    interval = setInterval(() => {
      if (seconds.value <= 0) return stop()
      seconds.value--
    }, 1000)
  }

  const stop = () => {
    isRunning.value = false
    if (interval) clearInterval(interval)
  }

  onUnmounted(stop)
  return { seconds, isRunning, start, stop }
}`,
    },
    { type: 'heading', level: 2, text: 'Kapan Pakai Pinia' },
    {
      type: 'paragraph',
      text: 'Gunakan Pinia ketika: (1) state perlu diakses dari banyak komponen yang tidak punya relasi parent-child, atau (2) state perlu persist antar navigasi halaman.',
    },
    {
      type: 'list',
      items: [
        'Auth state (user, token, permissions)',
        'Shopping cart yang bisa diakses dari navbar, halaman cart, dan checkout',
        'Global notification / toast system',
        'Data yang di-fetch dan di-cache (server state)',
      ],
    },
    { type: 'heading', level: 2, text: 'Props/Emit: Jangan Dianggap Kuno' },
    {
      type: 'paragraph',
      text: 'Banyak developer langsung loncat ke composable atau Pinia padahal props/emit adalah solusi paling sederhana dan paling mudah di-trace. Gunakan props/emit ketika komponen child perlu data dari parent yang langsung bersebrangan.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Rule of thumb: Props/emit untuk komponen yang deeply coupled. Composable untuk logic yang reusable. Pinia untuk global state.',
    },
    { type: 'heading', level: 2, text: 'Anti-Pattern yang Harus Dihindari' },
    {
      type: 'list',
      items: [
        'Jangan buat Pinia store untuk setiap fitur — ini overkill untuk state lokal',
        'Jangan pakai composable jika prop drilling hanya satu level',
        'Jangan mutasi prop langsung — selalu emit event ke parent',
        'Jangan lupa cleanup (clearInterval, removeEventListener) di onUnmounted',
      ],
    },
  ],

  'postgresql-performance-tips': [
    {
      type: 'callout',
      variant: 'info',
      text: 'Semua tips ini berdasarkan pengalaman nyata debugging query lambat di production environment dengan dataset 1M+ records.',
    },
    { type: 'heading', level: 2, text: '1. Selalu Gunakan EXPLAIN ANALYZE' },
    {
      type: 'paragraph',
      text: 'Sebelum mengoptimasi apapun, pahami dulu apa yang sebenarnya dilakukan database. EXPLAIN ANALYZE menjalankan query sungguhan dan menampilkan execution plan beserta waktu aktual.',
    },
    {
      type: 'code',
      language: 'sql',
      text: `-- Jalankan ini untuk melihat execution plan
EXPLAIN ANALYZE
SELECT u.name, COUNT(o.id) as total_orders
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
WHERE u.created_at > '2024-01-01'
GROUP BY u.id;

-- Perhatikan bagian yang ada "Seq Scan" — ini biasanya bottleneck
-- "Index Scan" lebih cepat untuk selective queries`,
    },
    { type: 'heading', level: 2, text: '2. Index yang Tepat di Kolom yang Tepat' },
    {
      type: 'paragraph',
      text: 'Ini kesalahan paling sering: tidak ada index di kolom yang sering difilter atau di-JOIN. Namun terlalu banyak index juga buruk — memperlambat INSERT/UPDATE.',
    },
    {
      type: 'code',
      language: 'sql',
      text: `-- Index untuk filter yang sering digunakan
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);

-- Composite index untuk query yang filter dua kolom sekaligus
CREATE INDEX idx_orders_user_status ON orders(user_id, status);

-- Partial index untuk subset data (lebih efisien)
CREATE INDEX idx_orders_pending ON orders(created_at)
WHERE status = 'pending';`,
    },
    { type: 'heading', level: 2, text: '3. Hindari N+1 Query Problem' },
    {
      type: 'paragraph',
      text: 'N+1 adalah biang kerok performa buruk yang paling sering tidak disadari. Terjadi ketika Anda fetch satu list, lalu untuk setiap item melakukan query tambahan.',
    },
    {
      type: 'code',
      language: 'typescript',
      text: `// ❌ N+1 Problem — 1 query untuk users + N query untuk orders
const users = await db.query('SELECT * FROM users')
for (const user of users) {
  user.orders = await db.query(
    'SELECT * FROM orders WHERE user_id = ?', [user.id]
  )
}

// ✅ Solusi: JOIN atau batch query
const usersWithOrders = await db.query(\`
  SELECT u.*, json_agg(o.*) as orders
  FROM users u
  LEFT JOIN orders o ON o.user_id = u.id
  GROUP BY u.id
\`)`,
    },
    { type: 'heading', level: 2, text: '4. Gunakan Connection Pooling' },
    {
      type: 'paragraph',
      text: 'Setiap koneksi PostgreSQL baru membutuhkan sekitar 1-2ms overhead. Di aplikasi dengan traffic tinggi, ini menumpuk jadi masalah besar. Gunakan connection pool seperti pg-pool (Node.js) atau PgBouncer.',
    },
    {
      type: 'code',
      language: 'typescript',
      text: `import { Pool } from 'pg'

const pool = new Pool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  max: 20,          // maksimum 20 koneksi
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

// Selalu release koneksi kembali ke pool
const client = await pool.connect()
try {
  const result = await client.query('SELECT ...')
  return result.rows
} finally {
  client.release()  // ← WAJIB
}`,
    },
    { type: 'heading', level: 2, text: '5. Pagination yang Efisien: Cursor vs OFFSET' },
    {
      type: 'paragraph',
      text: 'OFFSET pagination sangat lambat untuk halaman jauh — database harus membaca semua row sebelum offset. Gunakan cursor-based pagination untuk dataset besar.',
    },
    {
      type: 'code',
      language: 'sql',
      text: `-- ❌ OFFSET lambat di halaman 500+
SELECT * FROM orders ORDER BY id LIMIT 20 OFFSET 10000;

-- ✅ Cursor-based: selalu cepat
SELECT * FROM orders
WHERE id > :last_seen_id
ORDER BY id
LIMIT 20;`,
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Jangan lupa: setelah menambahkan index, jalankan VACUUM ANALYZE untuk memastikan planner statistics diperbarui.',
    },
  ],
}

export function getBlogContent(slug: string): BlogSection[] {
  return blogContents[slug] ?? []
}
