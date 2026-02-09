<script setup lang="ts">
  import Greeting from '@/components/Greeting.vue';
  import { onBeforeRouteUpdate, useRoute } from 'vue-router';

  const route = useRoute()
  console.log("Params", route.params)
  let user: string | string[] | undefined = route.params.user ? route.params.user : "Unknown"

  onBeforeRouteUpdate(async (to, from) => {
    console.log('Update', to, from)

    user = await to.params.user
  })
</script>

<template>
  <main>
    <Greeting user="asdfasdfasdf" />
  </main>
</template>
