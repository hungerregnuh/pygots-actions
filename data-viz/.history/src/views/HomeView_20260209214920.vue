<script setup lang="ts">
import Greeting from '@/components/Greeting.vue';
</script>

<template>
  <main>
    {{  $route.params.user }}
    <Greeting />
  </main>
</template>
