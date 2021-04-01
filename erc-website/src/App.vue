<template>
  <Navbar />
  <router-view />
  <Cursor />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Cursor from '@/components/Cursor.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Cursor
  }
}
</script>
