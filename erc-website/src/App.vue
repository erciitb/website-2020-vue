<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export defaults {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
