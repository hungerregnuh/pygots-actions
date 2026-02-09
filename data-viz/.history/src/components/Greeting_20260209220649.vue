<script setup lang="ts">
  const props = defineProps<{
    user: string | null | undefined
  }>()
</script>

<template>
  <div>
    Hello! {{ props.user }}
  </div>
</template>
