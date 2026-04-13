// ============================================================
// DATA: uses.ts
// "Uses" page — tools, setup, dan software yang digunakan
// ============================================================

export interface UseItem {
  name: string
  description: string
  url?: string
}

export interface UseCategory {
  id: string
  icon: string
  label: string
  items: UseItem[]
}

export const usesData: UseCategory[] = [
  {
    id: 'hardware',
    icon: '💻',
    label: 'Hardware',
    items: [
      {
        name: 'ThinkPad L14 Gen 2',
        description: 'Laptop kerja utama — ringan, keyboard enak, dan baterai tahan lama.',
      },
      {
        name: 'Monitor External 24" IPS',
        description: 'Layar 1080p untuk coding dan preview design secara berdampingan.',
      },
      {
        name: 'Mechanical Keyboard (Brown Switch)',
        description: 'Nyaman untuk sesi coding panjang — tactile feedback tanpa berisik.',
      },
    ],
  },
  {
    id: 'editor',
    icon: '✍️',
    label: 'Editor & Terminal',
    items: [
      {
        name: 'VS Code',
        url: 'https://code.visualstudio.com',
        description: 'Editor utama. Ekstensi wajib: ESLint, Volar, GitLens, Prettier, dan Error Lens.',
      },
      {
        name: 'Theme: One Dark Pro',
        description: 'Kontras yang baik, nyaman di mata untuk sesi coding malam.',
      },
      {
        name: 'Font: JetBrains Mono',
        url: 'https://jetbrains.com/lp/mono/',
        description: 'Font monospace dengan ligature yang membuat kode lebih mudah dibaca.',
      },
      {
        name: 'Windows Terminal + PowerShell',
        description: 'Terminal dengan tab, GPU rendering, dan konfigurasi yang fleksibel.',
      },
    ],
  },
  {
    id: 'frontend',
    icon: '🎨',
    label: 'Frontend Stack',
    items: [
      {
        name: 'Vue 3 + Nuxt 4',
        url: 'https://nuxt.com',
        description: 'Framework utama untuk hampir semua project web — DX luar biasa dan SSR built-in.',
      },
      {
        name: 'React + Next.js',
        url: 'https://nextjs.org',
        description: 'Untuk project yang membutuhkan ecosystem React atau sudah menggunakan Next.js.',
      },
      {
        name: 'TypeScript',
        description: 'Selalu. Type safety adalah investasi yang sangat berharga jangka panjang.',
      },
      {
        name: 'Vanilla CSS + CSS Variables',
        description: 'Saya lebih suka CSS custom properties daripada utility-first untuk maintainability.',
      },
      {
        name: 'Pinia',
        url: 'https://pinia.vuejs.org',
        description: 'State management resmi Vue. Jauh lebih simple dan type-safe daripada Vuex.',
      },
    ],
  },
  {
    id: 'backend',
    icon: '⚙️',
    label: 'Backend Stack',
    items: [
      {
        name: 'Node.js + Express / Fastify',
        description: 'Untuk REST API yang ringan dan cepat. Fastify untuk performa lebih tinggi.',
      },
      {
        name: 'Laravel (PHP)',
        url: 'https://laravel.com',
        description: 'Pilihan utama untuk project full-featured — ekosistem sangat matang.',
      },
      {
        name: 'PostgreSQL',
        url: 'https://postgresql.org',
        description: 'Database relasional default untuk semua project production saya.',
      },
      {
        name: 'Prisma ORM',
        url: 'https://prisma.io',
        description: 'Type-safe database access untuk Node.js. Migrations dan schema yang bersih.',
      },
      {
        name: 'Redis',
        url: 'https://redis.io',
        description: 'Untuk caching, session storage, dan pub/sub messaging.',
      },
    ],
  },
  {
    id: 'devops',
    icon: '🚀',
    label: 'DevOps & Deployment',
    items: [
      {
        name: 'Docker + Docker Compose',
        url: 'https://docker.com',
        description: 'Containerize semua development environment — tidak ada lagi "works on my machine".',
      },
      {
        name: 'Vercel',
        url: 'https://vercel.com',
        description: 'Deploy Nuxt/Next.js apps dalam hitungan detik. Perfect untuk portfolio dan side projects.',
      },
      {
        name: 'Nginx',
        description: 'Reverse proxy dan serve static files untuk project self-hosted di VPS.',
      },
      {
        name: 'GitHub Actions',
        description: 'CI/CD pipeline — otomatis run tests dan deploy saat push ke main branch.',
      },
    ],
  },
  {
    id: 'productivity',
    icon: '📋',
    label: 'Productivity',
    items: [
      {
        name: 'Notion',
        url: 'https://notion.so',
        description: 'Project planning, dokumentasi personal, dan brain dump ide.',
      },
      {
        name: 'Figma',
        url: 'https://figma.com',
        description: 'Untuk mockup UI sebelum coding, terutama saat diskusi dengan klien.',
      },
      {
        name: 'Postman',
        url: 'https://postman.com',
        description: 'API testing dan dokumentasi. Collections-nya sangat membantu onboarding tim.',
      },
      {
        name: 'TablePlus',
        description: 'GUI database client yang bersih untuk PostgreSQL, MySQL, dan SQLite.',
      },
    ],
  },
]
