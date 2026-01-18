<template>
  <div class="app-layout">
    <!-- Global Background Blobs -->
    <ClientOnly>
      <div class="bg-blob blob-primary"></div>
      <div class="bg-blob blob-secondary"></div>
    </ClientOnly>

    <AppHeader />

    <main class="main-content">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// Layout logic
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
