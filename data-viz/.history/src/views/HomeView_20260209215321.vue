<script setup lang="ts">
  import Greeting from '@/components/Greeting.vue';
import { useRoute } from 'vue-router';
  const route = useRoute()

  let user = "Unknown"

  watch(
    () => route.params.id,
    (newUser, oldUser) => user = newUser
  )
</script>

<template>
  <main>
    {{  user }}
    <Greeting />
  </main>
</template>
