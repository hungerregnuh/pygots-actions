<script setup lang="ts">
  defineProps<{
    user: string | null | undefined
  }>()
</script>

<template>
  <div>
    Hello! {{ user }}
  </div>
</template>
