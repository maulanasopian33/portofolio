<template>
  <div class="app-layout">
    <ClientOnly>
      <UiReadingProgress />
    </ClientOnly>

    <LayoutTheNavbar />

    <main id="main-content" role="main">
      <slot />
    </main>

    <LayoutTheFooter />

    <ClientOnly>
      <UiBackToTop />
      <UiCustomCursor />
    </ClientOnly>
  </div>
</template>

<style>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#main-content {
  flex: 1;
}
</style>
