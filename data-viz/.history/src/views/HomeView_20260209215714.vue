<script setup lang="ts">
  import Greeting from '@/components/Greeting.vue';
import { watch } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
  const route = useRoute()

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
