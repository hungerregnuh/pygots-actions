<script setup lang="ts">
  defineProps<{
    greeting: string | null | undefined
  }>()
</script>

<template>
  <div>
    {{ greeting }}
  </div>
</template>
