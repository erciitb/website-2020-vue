<template>
  <div
    ref="cursorElement"
    :class="{
      cursor: true,
      enlargedCursor: cursorEnlarged,
      cursorDifferenceFilter: cursorNegative
    }"
    :style="{ top: `${cursorTop}px`, left: `${cursorLeft}px` }"
  />
</template>

<script>
import { computed, onMounted, onUnmounted, ref } from '@vue/runtime-core'
import store from '../store'

export default {
  name: 'Cursor',
  setup() {
    const cursorElement = ref(null)
    const cursorNegative = computed(() => {
      return store.state.cursorNegative
    })
    const cursorEnlarged = computed(() => {
      return store.state.cursorEnlarged
    })
    let cursorLeft = ref(0)
    let cursorTop = ref(0)
    const updateCursorValues = (event) => {
      cursorLeft.value = event.clientX
      cursorTop.value =
        event.clientY -
        (cursorElement.value.getBoundingClientRect().height *
          (1 - 0.5 * cursorEnlarged.value)) /
          2
    }
    onMounted(() => {
      window.addEventListener('mousemove', updateCursorValues)
    })
    onUnmounted(() => {
      window.removeEventListener('mousemove', updateCursorValues)
    })
    return {
      cursorNegative,
      cursorEnlarged,
      cursorLeft,
      cursorTop,
      cursorElement,
      updateCursorValues
    }
  }
}
</script>

<style lang="scss" scoped>
@use './styles/cursor';
</style>
