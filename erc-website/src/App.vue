<template>
  <Navbar />
  <router-view />
  <Cursor />
</template>

<script>
import Cursor from '@/components/Cursor.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Cursor,
    Navbar
  }
}
</script>
