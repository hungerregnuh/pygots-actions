<script setup lang="ts">
  import Greeting from '@/components/Greeting.vue';
  import { onBeforeRouteUpdate, useRoute } from 'vue-router';

  const route = useRoute()
  console.log("Params", route.params)
  let user: string | undefined = route.params.user ? route.params.user as string : "Unknown"

  onBeforeRouteUpdate(async (to, from) => {
    console.log('Update', to, from)

    user = await to.params.user as string
  })
</script>

<template>
  <main>
    <Greeting :user=user />
  </main>
</template>
