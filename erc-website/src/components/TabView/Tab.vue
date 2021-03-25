<template>
  <transition name="tabFade">
    <div
      class="tabWrapper tabsCustomStylesFromParent"
      v-show="index === selectedIndex"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    index: Number,
    selectedIndex: Number
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@use './../styles/TabView/tab';
</style>
