<script setup lang="ts">
import Greeting from '@/components/Greeting.vue';
  const user = $route.params.user
</script>

<template>
  <main>
    {{  user }}
    <Greeting />
  </main>
</template>
