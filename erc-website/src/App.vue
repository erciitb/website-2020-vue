<template>
  <Navbar />
  <router-view />
  <Gallery />
  <Cursor />
</template>

<script>
import Cursor from '@/components/Cursor.vue'
import Navbar from '@/components/Navbar.vue'
import Gallery from '@/components/Gallery.vue'
export default {
  name: 'App',
  components: {
    Cursor,
    Navbar,
    Gallery
  }
}
</script>
