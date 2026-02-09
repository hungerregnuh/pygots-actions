<script lang="ts">
import Greeting from '@/components/Greeting.vue';
import { useRoute } from 'vue-router';

export default {
  components: {
    Greeting
  },
  data() {
    return {greeting: "Unknown"}
  },
  created() {
    const route = useRoute()
    const user: string | undefined = route.params.user ? route.params.user as string : "Unknown"

    fetch(`api/?user=${user}`)
      .then((response) => response.json())
      .then((data) => {
        this.greeting = data.greeting
      })

  }
}
</script>

<template>
  <main>
    <Greeting :greeting="greeting" />
  </main>
</template>
