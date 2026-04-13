# Coding Standards & Naming Conventions

Panduan ini mendokumentasikan standar penamaan dan struktur yang digunakan dalam project Portfolio Nuxt 3 ini.

## 1. Komponen (`components/`)
Gunakan **PascalCase** untuk nama file. Komponen diorganisir berdasarkan folder yang bertindak sebagai prefix.

| Folder | Prefix Nuxt | Kegunaan | Contoh File |
| :--- | :--- | :--- | :--- |
| `layout/` | `Layout` | Singleton/Structure | `TheNavbar.vue` |
| `ui/` | `Ui` | Reusable Atoms | `UiTagBadge.vue` |
| `home/` | `Home` | Feature Specific | `HeroSection.vue` |
| `projects/` | `Projects` | Feature Specific | `ProjectCard.vue` |

**Aturan Template:**
- Gunakan `<UiButton />` bukan `<ui-button />`.
- Gunakan `NuxtLink` untuk internal routing.

## 2. Composables (`composables/`)
Gunakan **camelCase** dengan prefix `use`.
- `usePortfolioData.ts` (Stateful logic)
- `useCustomCursor.ts` (Browser/DOM logic)

## 3. Data Layer (`data/`)
Gunakan **camelCase** dan nama plural jika mengembalikan array.
- `projects.ts`
- `certificates.ts`

Setiap file data WAJIB memiliki **TypeScript Interface** untuk kejelasan struktur data.

## 4. Server API (`server/api/`)
Gunakan suffix method untuk file handler.
- `[name].get.ts`
- `[name].post.ts`

## 5. CSS (`assets/css/`)
- `main.css`: Design tokens, variabel CSS, dan global resets.
- `animations.css`: Semua `@keyframes` sentral.
- Komponen harus menggunakan `<style scoped>` kecuali jika benar-benar butuh modifikasi global.

## 6. HTML Semantics
Penting untuk SEO (Nuxt SSR):
- `<h1>` hanya boleh satu per halaman.
- Gunakan `<header>`, `<footer>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<time>`.
