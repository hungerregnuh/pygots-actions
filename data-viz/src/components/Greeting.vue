<script setup lang="ts">
  defineProps<{
    greeting: string | null | undefined
  }>()
</script>

<template>
  <div id="greeting">
    {{ greeting }}
  </div>
</template>
