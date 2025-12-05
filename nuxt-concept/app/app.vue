<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// ใช้ useHead สำหรับ SEO และ Meta tags
useHead({
  htmlAttrs: {
    lang: 'th'
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Nuxt 4 Demo` : 'Nuxt 4 Demo'
  }
})
</script>

