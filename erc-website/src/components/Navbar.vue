<template>
  <div id="navbar">
    <!-- render out all links from router -->
    <div class="router-links" v-for="route in routes" :key="route.id">
      <router-link :to="route.link">{{ route.displayName }}</router-link>
    </div>
  </div>
</template>

<script>
import { routeOptions } from '@/utils/constants'

export default {
  name: 'Navbar',
  setup() {
    // creating links from the router
    const routes = routeOptions.map((route, index) => {
      return {
        link: route.path,
        displayName: route.displayName,
        id: index
      }
    })

    return { routes }
  }
}
</script>

<style scoped lang="scss">
@import './styles/navbar';
</style>
