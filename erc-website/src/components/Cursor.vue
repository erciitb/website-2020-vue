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
/**
 * @name Cursor
 *
 * Creates the cursor on the screen
 * Current occupies 25px on a 1080p screen
 * Has 2 effects applied - cursor gets enlarged and a negative filter
 * Use the store to choose which effect to apply
 * Minimum diameter is 20px
 * Frame rate is limited to 80fps - calculate by 1000/(throttle time)
 *
 */
import { computed, onMounted, onUnmounted, ref } from '@vue/runtime-core'
import store from '@/store'
import { performance } from '@/utils/functions'

export default {
  name: 'Cursor',
  setup() {
    const cursorElement = ref(null)
    let cursorLeft = ref(0)
    let cursorTop = ref(0)
    const cursorNegative = computed(() => {
      return store.state.cursor.cursorNegative
    })
    const cursorEnlarged = computed(() => {
      return store.state.cursor.cursorEnlarged
    })
    const updateCursorPosition = (event) => {
      cursorLeft.value =
        event.clientX - cursorElement.value.getBoundingClientRect().width / 2
      cursorTop.value =
        event.clientY - cursorElement.value.getBoundingClientRect().height / 2
    }
    // to be called at limit of 80 fps
    const throttleTime = 12.5
    const throttledUpdateOfCursor = performance.simpleThrottle(
      updateCursorPosition,
      throttleTime
    )
    onMounted(() => {
      window.addEventListener('mousemove', throttledUpdateOfCursor)
    })
    onUnmounted(() => {
      window.removeEventListener('mousemove', throttledUpdateOfCursor)
    })
    return {
      cursorNegative,
      cursorEnlarged,
      cursorLeft,
      cursorTop,
      cursorElement
    }
  }
}
</script>

<style lang="scss" scoped>
@use './styles/cursor';
</style>
