<template>
  <div class="app-layout">
    <AppHeader />
    
    <main class="main-content">
      <slot />
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// Toast notifications are handled automatically by UApp's Toaster component
</script>

<style>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--color-neutral-50);
}

.dark .app-layout {
  background: var(--color-neutral-950);
}

.main-content {
  flex: 1;
  padding-top: 1rem;
  padding-bottom: 3rem;
}

@media (min-width: 768px) {
  .main-content {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }
}
</style>
