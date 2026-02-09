<script setup lang="ts">
  import Greeting from '@/components/Greeting.vue';
  import { onBeforeRouteUpdate, useRoute } from 'vue-router';

  const route = useRoute()
  let user: string | string[] | undefined = route.params.user ?? "Unknown"

  onBeforeRouteUpdate(async (to, from) => {
    console.log('Update', to, from)

    user = await to.params.user
  })
</script>

<template>
  <main>
    {{  $route.params.user }} <br />
    {{  user }}
    <Greeting />
  </main>
</template>
