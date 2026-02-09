<script setup lang="ts">
  import Greeting from '@/components/Greeting.vue';
import { onBeforeRouteUpdate } from 'vue-router';

  let user: string | string[] | undefined = "Unknown"

  onBeforeRouteUpdate(async (to, from) => {
    console.log('Update', to, from)

    user = await to.params.user
  })
</script>

<template>
  <main>
    {{  user }}
    <Greeting />
  </main>
</template>
