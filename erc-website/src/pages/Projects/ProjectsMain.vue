<template>
  <h1 @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @click="onClick">
    Projects Page
  </h1>
</template>

<script>
import store from '../../store'
export default {
  name: 'Projects',
  setup() {
    const onClick = () => {
      store.commit('cursor/makeCursorNegative')
    }
    const onMouseEnter = () => {
      store.commit('cursor/makeCursorEnlarged')
    }
    const onMouseLeave = () => {
      store.commit('cursor/makeCursorNormal')
    }
    return { onClick, onMouseEnter, onMouseLeave }
  }
}
</script>

<style lang="scss" scoped>
@import './styles/projectsMain';
</style>
