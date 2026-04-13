// ============================================================
// DATA: blog.ts
// Blog posts static data (sebelum @nuxt/content diaktifkan)
// ============================================================

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: number  // menit
  tags: string[]
  category: string
  featured: boolean
}

// --- Static Blog Index (dipakai di listing page) ---
// Konten artikel ada di content/blog/[slug].md
export const blogPosts: BlogPost[] = [
  {
    slug: 'migrate-vue3-to-nuxt4',
    title: 'Cara Migrasi Project Vue 3 SPA ke Nuxt 4 SSR',
    excerpt:
      'Panduan lengkap teknis dari seorang Full Stack Developer yang sudah menjalani proses migrasi — dari setup, restrukturisasi folder, hingga optimasi SEO dengan useSeoMeta.',
    date: '2026-04-13',
    readTime: 8,
    tags: ['Vue.js', 'Nuxt.js', 'SSR', 'SEO'],
    category: 'Tutorial',
    featured: true,
  },
  {
    slug: 'clean-architecture-nodejs',
    title: 'Clean Architecture di Node.js: Separation of Concerns yang Sesungguhnya',
    excerpt:
      'Banyak yang mengklaim pakai clean architecture, tapi masih campur logic bisnis di controller. Ini cara saya memisahkan layer secara benar menggunakan Repository Pattern.',
    date: '2026-03-28',
    readTime: 12,
    tags: ['Node.js', 'Architecture', 'Backend', 'Clean Code'],
    category: 'Architecture',
    featured: true,
  },
  {
    slug: 'vue-composables-best-practices',
    title: 'Vue 3 Composables: Kapan Pakai useX, Pinia, atau Props?',
    excerpt:
      'State management di Vue 3 bisa membingungkan. Artikel ini menjelaskan kapan harus pakai composable lokal, Pinia store, atau cukup props/emit biasa.',
    date: '2026-03-10',
    readTime: 7,
    tags: ['Vue.js', 'Composables', 'Pinia', 'State Management'],
    category: 'Best Practices',
    featured: false,
  },
  {
    slug: 'postgresql-performance-tips',
    title: '7 Tips Performa PostgreSQL yang Sering Diabaikan Developer',
    excerpt:
      'Query N+1, missing index, EXPLAIN ANALYZE — hal-hal yang membuat aplikasi lambat di production dan cara mengatasinya secara praktis.',
    date: '2026-02-22',
    readTime: 10,
    tags: ['PostgreSQL', 'Database', 'Performance', 'Backend'],
    category: 'Performance',
    featured: false,
  },
]

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((p) => p.tags.includes(tag))
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateStr))
}
