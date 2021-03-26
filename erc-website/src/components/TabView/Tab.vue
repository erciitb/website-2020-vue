<template>
  <transition name="tabFade">
    <div
      class="tabWrapper tabCustomStylesFromParent"
      v-show="index === selectedIndex"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script>
/**
 * Tab Component
 * Component used to display the content of a tab
 *
 * Animations have been applied via the tabFade class - appear and disappear in 0.5s
 * Can overwrite/add some CSS to the tab via the tabCustomStylesFromParent class (if defined via ::v-deep)
 */
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
