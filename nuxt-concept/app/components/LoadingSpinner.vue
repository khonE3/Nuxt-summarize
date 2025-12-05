<template>
  <div class="loading-spinner">
    <div class="spinner-container">
      <UProgress animation="carousel" color="primary" size="sm" />
      <p v-if="message" class="spinner-message">{{ message }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message?: string
}>()
</script>

<style scoped>
.loading-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.spinner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 300px;
}

.spinner-message {
  color: var(--color-neutral-500);
  font-size: 0.9rem;
  text-align: center;
  margin: 0;
}
</style>
